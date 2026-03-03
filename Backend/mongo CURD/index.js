const express = require('express')
const app = express();

const usermodel  = require('./db')


app.get('/',(req,res)=>{

        res.send('hey')
})

app.get('/Create',async (req,res)=>{

       let createduser = await usermodel.create({

            name: 'html',
            email: 'js@js.com',
            username: 'html'

        })

        res.send(createduser);
})


app.get('/Update',async (req,res)=>{

        let updateduser = await usermodel.findOneAndUpdate({username:'js'},{email:'pratik5@mail.com'},{returnDocument:true})
                                                         //find by username,update the email,get the updated document

        res.send(updateduser);
})


app.get('/Read', async (req,res)=>{


    // let allusers = await usermodel.find({username:'js'})
                                   //it is like select * 

    let oneuser = await usermodel.findOne({username:'js'})     
                                    //returns first one that matches 
    res.send(oneuser)                          
    // res.send(allusers);

})

app.get('/Delete',async (req,res)=>{

        let deleteduser = await usermodel.findOneAndDelete({username:'js'})
        res.send(deleteduser)
})


app.listen(3000);