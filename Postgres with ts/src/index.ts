import {Client} from 'pg';

const client = new Client({

    connectionString: "postgresql://neondb_owner:npg_6de7bolCFaRs@ep-hidden-bonus-a8dg74b7.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require" 
});

async function createtable(){

    await client.connect()

    const result = await client.query(`
        
            create table adderesses(
            id serial primary key,
            user_id integer,
            country varchar(200),
            city varchar(200),
            foreign key(user_id) references userss(id) on delete cascade

            

            
            );
        `)

        

        console.log(result);
}
createtable();
