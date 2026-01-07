import { Hono } from "hono";
import { PrismaClient } from "../generated/prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";
import { title } from "process";
import {verify} from "hono/jwt"
import prismaConfig from "../../prisma.config";


export const  blogrouter = new Hono<{

    Bindings: {

        DATABASE_URL: string,
        JWT_SECREAT : string 
    },
    Variables: {

            userid: string 

    }
}>();


blogrouter.use("/*",async (c,next)=>{


    const authHeader = c.req.header("authorization")|| "";

    try{

                const user = await verify(authHeader,c.env.JWT_SECREAT);

    if(user){

        c.set("userid",String(user.id));
        await next();
    }
    else{

        c.status(403);
        return c.json({

            message: "you are not logged in "

        })
    }
    }
    catch(e){

        c.status(403)
        return c.json({
            messgae: "You are not logged in"
        })
    }


       

})





blogrouter.post('/',async (c)=>{

    const body = await c.req.json();

    const authorid = c.get("userid");
    const prisma = new PrismaClient({

        accelerateUrl: c.env.DATABASE_URL,

    }).$extends(withAccelerate())

    const post = await prisma.post.create({

        data: {

            title : body.title,
            content: body.content,
            authorID: authorid
        }
    })

    return c.json({
        id: post.id 
    })
})

blogrouter.put('/', async  (c)=>{

    const body = await c.req.json()
    const prisma = new PrismaClient({

        accelerateUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())


        const post  = await prisma.post.update({

            where:{

                id: body.id
            },
            data: {

                title: body.title,
                content: body.content
            }
        })

        return c.json({

            id: post.id
        })
})

//todo add the pegination 
blogrouter.get('/bulk',async (c)=>{

        const prisma = new PrismaClient({

            accelerateUrl : c.env.DATABASE_URL,
        }).$extends(withAccelerate())

        const blogs = await prisma.post.findMany();

        return c.json({

            blogs
        })

})

blogrouter.get('/:id', async (c)=>{

    const id = c.req.param("id");

    const prisma = new PrismaClient({

        accelerateUrl : c.env.DATABASE_URL,
    }).$extends(withAccelerate())


    try{

        const post  = await prisma.post.findFirst({

            where:{

                id:id
            },

        })

        return c.json({
            post
        })

    }

    catch(e){

        c.status(411);
        return c.json({
            messgae: "error while fetching the posts"
        })
    }
})

