
const express = require('express');
const app = express();

const usermodel = require('./Models/usermodel')
const postsmodel = require('./Models/postmodel')

app.get('/',(req,res)=>{

        res.send('hello')
});

app.get('/createuser',async (req,res)=>{

       await usermodel.create({

            name:'AaAa',
            email:'a@a.com',
            age:32
             

        })


        res.send('created user')
})

app.get('/createpost',async (req,res)=>{

       let post = await postsmodel.create({

            postdata: 'this is my first post',
            user: '69a7d3b9fcc83c9cc3524357'    //refrence to the user
        })

        let user = await usermodel.findOne({
            _id:'69a7d3b9fcc83c9cc3524357'  //refrence to the post
        })
        user.posts.push(post._id)
        await user.save();

        res.send({
            post,
            user
        })
})

app.listen(3000);