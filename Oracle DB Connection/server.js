// import express from 'express';

// import oracledb from 'oracledb'

// const app = express();
// app.use(express.json())


// const dbconfig = {

//         user:"ssdemo",
//         password:"ssD3m0##124",
//         connectString:"130.61.44.86/apexpdb.sub06170601220.fabconnectvcn.oraclevcn.com"    //host/servicename
// }


// app.get('/getdata', async (req,res)=>{

//     let connection;

//     connection = await oracledb.getConnection(dbconfig);

//     const result = await connection.execute(

//         `SELECT * FROM KPI_VALUES`,[],{outFormat: oracledb.OUT_FORMAT_OBJECT}

//     );

//     res.json(result.rows)

    



// })


// app.listen(3000,()=>{

//     console.log('server running....')
// });


import express from 'express';
import oracledb from 'oracledb';

const app = express();
app.use(express.json());

const dbconfig = {
    user: "ssdemo",
    password: "ssD3m0##124", 
    connectString: "130.61.44.86/apexpdb.sub06170601220.fabconnectvcn.oraclevcn.com"
};

app.get('/getdata', async (req, res) => {
    let connection;
    try {
        connection = await oracledb.getConnection(dbconfig);
        const result = await connection.execute(
            `SELECT * FROM KPI_VALUES`,
            [],
            { outFormat: oracledb.OUT_FORMAT_OBJECT }
        );
        res.json(result.rows);
    } catch (err) {
        console.error('DB Error:', err);
        res.status(500).json({ error: err.message });
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.error('Close Error:', err);
            }
        }
    }
});

const startServer = async () => {
    try {
        await oracledb.initOracleClient();  // Initialize Oracle Client
        app.listen(3000, () => {
            console.log('Server running on port 3000');
        });
    } catch (err) {
        console.error('Oracle Client Init Error:', err);
    }
};

startServer();
