import { Client } from "pg";
import 'dotenv/config';
const client = new Client({
  connectionString: process.env.DATABASE_URL
    
});

async function transact(
  username: string,
  email: string,
  password: string,
  country: string,
  city: string
) {
  await client.connect();

  try {
    const beg = await client.query(`

                begin;
        `);

    const insertuser = await client.query(
      `

            insert into userss(username,email,password)
            values ($1,$2,$3) returning id 
            

        `,
      [username, email, password]
    );

    const userid = insertuser.rows[0].id;

    const insertadd = await client.query(
      `
        
        insert into adderesses(user_id,country,city)
        values($1,$2,$3)
        
        
        `,
      [userid, country, city]
    );

    const end = await client.query(`

                commit;
        `);

    console.log(
      beg + "\n" + userid + "\n" + insertuser + "\n" + insertadd + "\n" + end
    );
  } catch (err) {
    console.log(err);

    client.query(`ROLLBACK`);
    console.log("transaction is rollbacked");
  }
}
transact("pratik", "pratik@6", "qwerty", "india", "nashik");
