import path from 'node:path';
import dotenv from 'dotenv';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

import {Pool } from 'pg';

        console.log("cwd:", process.cwd());
        console.log("database url",process.env.DATABASE_URL);
const pool = new Pool({

        connectionString: process.env.DATABASE_URL
})
  
async function insertdata(username: string,email:string,password:string,country: string,city:string){


        const client = await pool.connect();
    try{    

        await client.query(`BEGIN`)


        const insertuser = await client.query(`
            
                insert into userss(username,email,password)
                values($1,$2,$3) returning id 
            
            `,[username,email,password])

        const userid = insertuser.rows[0].id;

        const inseraddresses = await client.query(`
            
                insert into adderesses(user_id,country,city)
                values($1,$2,$3)
            
            `,[userid,country,city])

            console.log(insertuser,inseraddresses,userid);

        await client.query(`commit`);
        
    }

    catch(err){

         
        await client.query(`rollback`);
        console.log("something went wrong"+err);

    }
    finally{

        client.release();
    }


}


insertdata('adam','smith@email','121212','germany','abcd');