const express = require("express");
const app = express();

const fs = require("fs");

const port = 3000;

app.use(express.json());

    app.get("/:fileName",function(req,res){

        const name = req.params.fileName;

        fs.readFile(name,"utf-8",function(err,data){

            res.json({

                data
            });
        });


    })

    app.post("/:fileName",function(req,res){

        const name = req.params.fileName;
        const filecontent = req.body.content;//content of file which is dynamic

        fs.writeFile(name,filecontent,"utf-8",function(err){

            res.json({

                sucess  :true
            });
        });


    })
    

    app.listen(3000);