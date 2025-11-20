// one should write the queries like this to avoid security reasons 

import {Client} from 'pg';


const client = new Client(

    'postgresql://neondb_owner:npg_6de7bolCFaRs@ep-hidden-bonus-a8dg74b7-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require'

    );


   async function inserdata(){

        await client.connect();


        const insertquery = `
        
            INSERT INTO USERS (USERNAME, EMAIL, PASSWORD)
            VALUES
            ($1,$2,$3)

        `

        const values = ['asam','smith@mail','1212'];

        const res = await client.query(insertquery,values);

        console.log('inserted safely',res);



    }

    inserdata();