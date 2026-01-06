import { Hono } from 'hono'

import {PrismaClient} from './generated/prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'
 
import {sign,verify} from 'hono/jwt';

const app = new Hono<{

  Bindings: {

    DATABASE_URL: string
    JWT_SECREAT: string
  }
}>()

app.use('/api/v1/blog/*', async (c,next)=>{

      const header = c.req.header("authorization")||"";

      const token = header.split(" ")[1]

      const response = await verify(token,c.env.JWT_SECREAT)

      if(response.id){

        next()
      }
      else{

        c.status(403)
        return c.json({
          err: "unauthorized"
        })
      }
})


 
app.post('/api/v1/signup', async (c)=>{

    const prisma = new PrismaClient({

      accelerateUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json();

    const user = await prisma.user.create({
      data:{

        email : body.email,
        password: body.password,

      }
    })

    const token = await sign({id: user.id}, c.env.JWT_SECREAT)



    return c.json({
      jwt: token
    })
})

app.post('/api/v1/signin', async (c)=>{

    const prisma = new PrismaClient({

        accelerateUrl: c.env.DATABASE_URL

    }).$extends(withAccelerate())

    const body = await c.req.json();

    const user = await prisma.user.findUnique({

      where: {
        email: body.email
        //password: body.password
      }
    })

    if(!user){

      c.status(403);

      return c.json({
        err: "user not found"
      })
    }

 

})

app.post('/api/v1/blog',(c)=>{

    return c.text('')
})

app.put('/api/v1/blog', (c)=>{

  return c.text('')
})

app.get('/api/v1/blog/:id', (c)=>{

    return c.text('')
})








export default app
