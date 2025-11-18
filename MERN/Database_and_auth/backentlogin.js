const express = require("express");

const app = express();

app.use(express.json());

const jwt = require("jsonwebtoken");
const jwtpassword = "12345";

const ALL_USERS = [

{
    username : "abc@123.com",
    password : "12345",
    nname   :"john",   

},
{
    username : "abc@321.com",
    password : "54321",
    nname   :"alex",   

},
{
    username : "abc@1212.com",
    password : "34455",
    nname   :"smith"  

}

];

function userexists(userename,password){

    let userexist = false;

    for(let i =0; i< ALL_USERS.length;i++){

        if(ALL_USERS[i].username == userename && ALL_USERS[i].password == password){

            userexist = true;
        }
    }

    return userexist;
}

app.post("/signin",function(req,res){

    const username = req.body.username;
    const  password = req.body.password;

    if(!userexists(username,password)){

        return res.status(403).json({
            msg: "user not exists"
        })
    }

    var token = jwt.sign({username : username},jwtpassword );
    return res.json({
        token,
    })
   

});

   


app.get("/users",function(req,res){

    const token = req.headers.authorization;

    const decoded = jwt.verify(token,jwtpassword);

    const username = decoded.username;


    res.json({

        users : ALL_USERS.filter(function(value){

            if(value.username === username){

                return false
            }
            else{

                return true     
            }
        })

    })
})


app.listen(3000);