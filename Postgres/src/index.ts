import { Client } from 'pg';
import { CLIENT_RENEG_LIMIT } from 'tls';

const client = new Client({
  host: "ep-hidden-bonus-a8dg74b7-pooler.eastus2.azure.neon.tech",
  port: 5432, // default Postgres port
  database: "neondb",
  user: "neondb_owner",
  password: "npg_6de7bolCFaRs",
  ssl: {
    rejectUnauthorized: false   // needed for Neon
  }
  //or you can pass connectionstring 
});



async function createuserstable(){

    await client.connect();

        const result= await client.query(`
            
            create table if not exists Users(

            id serial PRIMARY KEY,
            username varchar(200) unique not null,
            email varchar(200) unique not null,
            password varchar(20) not null,
            created_at timestamp with time zone default current_timestamp
            )
            
            `)

        console.log(result);
}


createuserstable();


async function insertdata(){

  //await client.connect(); alreay connected in above 

    const insertquery = `
    
        insert into users(username,email,password) values('smith','smith@mail.com','postgres123')
    
    `

    const res = await client.query(insertquery);
    console.log('Inserted',res);



}

// insertdata(); commented for test


async function updatedata(){

    const updatequery = `
    
        update users set username='pratik2' where username='pratik'

    `
    const res2 = await client.query(updatequery);



}
// updatedata(); commented for test


async function showdata(){


const showquery = `

    select * from users 
`

    const res3 = await client.query(showquery);

    console.log(res3);
}

showdata();



async function deletedata(){

    const deletequery = `
    
        delete from users where username like 'smith'
    `

    const res5 = await client.query(deletequery);

    console.log('deleted sucessfully',res5);
} 

deletedata();
