const express = require("express");


const port = 4000;


const app = express();

app.use(express.json());

app.post('/',function(req,res){

    console.log(req.headers)
    console.log(req.body)
    res.send("hello world in js ");

});

 


    app.listen(port);