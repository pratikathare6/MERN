import { Hono } from 'hono'

import {PrismaClient} from './generated/prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'
 
import {sign,verify} from 'hono/jwt';
import { use } from 'react';

import { userrouter } from './Routes/user';
import { blogrouter } from './Routes/blog';


const app = new Hono<{

  Bindings: {

    DATABASE_URL: string
    JWT_SECREAT: string
  }
}>()


app.route('/api/v1/user',userrouter);
app.route('/api/v1/blog',blogrouter);


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


 








export default app
