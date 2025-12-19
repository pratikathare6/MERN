import {Client} from 'pg';


const client = new Client({

    connectionString: 'postgresql://neondb_owner:npg_6de7bolCFaRs@ep-hidden-bonus-a8dg74b7.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require'
});


async function deletedata(){

    await client.connect();

    const result = await client.query(`
        
        
            delete from userss where id =1
        
        `)

    
    console.log(result);


}

deletedata();
