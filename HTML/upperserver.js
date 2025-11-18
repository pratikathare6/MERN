    const express = require("express");

    const app = express();


    const cors = require("cors");

    app.use(cors());

    app.get('/uppertext',function(req,res){

    const a = req.query.t1;
    
    const ans = a.toUpperCase();

    res.send(ans);

    });



    app.listen(3000);

