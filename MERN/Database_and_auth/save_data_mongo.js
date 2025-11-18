const express = require("express");

const app = express();

app.use(express.json());

const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://pratik123:UsPuhxzbNIhe17zz@cluster0.1aizdpc.mongodb.net/userapp")       

const User   = mongoose.model('Users',{name: String, email : String ,password : String});

 

app.post("/users",async function(req,res){

    const username = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const existinguser = await User.findOne({
     $or:[

        {email :email},
        {name : username}
     ]   
       
    
    })

    if(existinguser){
        return res.status(400).send("username already exists");
    }

    const user = new User({
    name:     username, 
    email:    email, 
    password: password
    });

    user.save();

    res.json({
      msg : "user created sucessfully"  
    })

})


app.delete('/users/delete',async function(req,res){

    const name = req.body.name;

    if(!name){
        return res.status(400).json({

            error: "name is required to delete"
        })
    }

    const deleteduser = await User.findOneAndDelete({name});

    if(!deleteduser){

       return res.status(400).json({
        error: "user not found"
       })
    }

    res.json({
        mag :"user deleted"
    });




})

app.get("/users/getuser",async function(req,res){

    const name = req.body.name;

    const user = await User.findOne({name});


    res.json({

        name :user.name,
        email : user.email
    })

})
 

app.listen(3000);