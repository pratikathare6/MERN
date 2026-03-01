const express = require('express');

const app = express();


//---------------Default Middleware----------------------------
    app.use((req,res,next)=>{

        console.log('middleware started..')

        next();
    })
//-------------------------------------------------------------


app.get('/getdata',(req,res)=>{

    res.send('hello server');
})

app.listen(3000,()=>{
        console.log('running...')
});


//---------------Default Error Handler----------------------------
    app.use((err,req,res,next)=>{

        console.error(err.stack)
        res.status(500).send('something broke')

        next();
    })
//-------------------------------------------------------------
