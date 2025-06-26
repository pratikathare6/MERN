const express = require("express");

const app = express();

const port = 3000;

const fs = require("fs");



    app.get("/:fileName",function(req,res){

        const name = req.params.fileName;

        

        fs.readFile(name,'utf-8',function(err,data){

            res.json({
                data
            });
        })

    

    });


    app.listen(3000);