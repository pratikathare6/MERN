import { Hono } from "hono";
 

import {PrismaClient} from '../generated/prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'
 
import {sign,verify} from 'hono/jwt';
import { use } from 'react';

import { siginInput, signupinput } from "@pratik6/medium-common";
export const userrouter = new Hono<{

    Bindings:
    {
            DATABASE_URL : string,
            JWT_SECREAT: string    
    }

}>()


userrouter.post('/signup', async (c)=>{

    const prisma = new PrismaClient({

      accelerateUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())


    const body = await c.req.json();
    const { success } = signupinput.safeParse(body);

        if(!success){

            c.status(411)
            return c.json({
                messgae: "Inputs are not correct"
            })
        }

    let user;

    try{

           user = await prisma.user.create({
      data:{

        email : body.email,
        password: body.password

      }
    })
    }
    catch(e){

      c.status(411)
      console.log(e);
      console.log("user not available");
      return c.text("invalid")
    }

  

    const token = await sign({id: user.id}, c.env.JWT_SECREAT)



    return c.json({
      jwt: token
    })
})


userrouter.post('/api/v1/signin', async (c)=>{

    const prisma = new PrismaClient({

        accelerateUrl: c.env.DATABASE_URL

    }).$extends(withAccelerate())

    try{

           const body = await c.req.json();

    const user = await prisma.user.findFirst({

      where: {
        email: body.email,
        password: body.password
      }
    })

      

    if(!user){

      c.status(403);

      return c.json({
        err: "user not found"
      })
    }

    const jwt = await sign({id: user.id},c.env.JWT_SECREAT)

    return c.text(jwt);

    }
    catch(e){

      console.log(e);

      c.status(411);
      return c.text("invalid cred");
    }
   

 

})
