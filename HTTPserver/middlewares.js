const express = require("express");

const app = express();

const port = 3000;

let countreq = 0;

function calculaterequests(req,res,next){

    countreq++;
    console.log(countreq);
    next();
}
 //you can also use app.use(calculatereuests)
//so from below this it will automatically call this function without calling 

function uservalidation(req,res,next){
    const username = req.headers.username;
    const password = req.headers.password;

        if(username !='pratik' && password != 'pass'){

            res.status(403).json({
                msg : 'wrong inputs'
            });
        }
        else{

            next();
        }
}

function kidenyvalidation(req,res,next){
    const kidenyid = req.query.kidenyid;

        if(kidenyid != 1 && kidenyid != 2){

            res.status(403).json({
                msg : 'your kidenys have problem'
            });
        }
        else{

            next();
        }

}

//the uservalidation and kidenyvalidation are the middlewares i.e prechecks for the get request
app.get('/kidneyscheck',calculaterequests,uservalidation,kidenyvalidation,function(req,res){

        res.json({
            msg :'your kidneys are fine'


        })

});

app.get('/heartcheck',calculaterequests,uservalidation,function(req,res){

        res.json({
            msg :'your hart is fine'

        })

});

app.listen(3000);
