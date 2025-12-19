import { PassThrough } from 'node:stream';
import {Client} from 'pg';
const client = new Client({

    connectionString: 'postgresql://neondb_owner:npg_6de7bolCFaRs@ep-hidden-bonus-a8dg74b7.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require'

});
async function insertdata(user_id: number,country: string, city: string ){

    await client.connect();
    // const result = await client.query(`
    //     //   but this leads to the SQL injection 
    //         insert into userss(username,email,password)
    //         values('${username}','${email}','${password}');
    //     `)

    //to avaoid sql injection we use the follwing approch 

    const result = await client.query(`
        
                insert into adderesses(user_id,country,city) values($1,$2,$3)
        `,[user_id,country,city])


    console.log(result);


} 
insertdata(1,'ind','nsk');