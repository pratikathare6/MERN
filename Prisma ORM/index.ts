import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient();



async function inseruser(username: string, password: string, firstname: string, lastname:string){

        const res = await prisma.user2.create({

            data:{

                email : username,
                password,
                firstname,
                lastname



            },

            select: {//this is to return after the insert

                id: true
            }
        })

    console.log(res);
}

inseruser('pratik','1231a','pratik','athare' );

