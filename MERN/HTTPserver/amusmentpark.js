const express = require("express");

const app = express();

 let counrequests =0;

 app.use(function(re,res,next){

        counrequests = counrequests+1;
        console.log(counrequests);
        next();
 })

function checkticket(req,res,next){

    const age = req.query.age;

    if(age>=14){

        next();
    }
    else{
        
        res.json({
            msg : "you dont have acess"
        })
    }

}

app.get('/ride1',checkticket,function(req,res){
        res.json({
        msg: "you have acess the ride 1"
    })
    
})

app.get('/ride2',checkticket,function(req,res){

    res.json({

        mag: "you haave acess to the ride 2"
    })
})



app.listen(3000);

