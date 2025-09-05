const {Router} = require("express");
const adminmiddleware = require("../Middleware/admin");
const {Admin2, User2,Course2} = require("../db");
const {JWT_SECRET} = require("../config");
const router =Router();

const jwt = require("jsonwebtoken");





router.post('/signup',async (req,res)=>{

        const username = req.body.username;
        const password = req.body.password;

       await Admin2.create({

            username : username,
            password : password
        })

         res.json({

            msg: "Admin created sucessfully"
        })
       
})

router.post('/signin',async(req,res)=>{

        const username = req.body.username;
        const password = req.body.password;

        const user = await User2.find({
            username,
            password
        })

        if(user){

             const token = jwt.sign({
            
            username

        },JWT_SECRET)

         res.json({

            token
         })


        }
        else
        {

            res.status(403).json({
                msg: "Incorrect Email and passowrd"
            })
        }
       
})

router.post('/courses',adminmiddleware, async (req,res)=>{

        const title = req.body.title;
        const description = req.body.description;
        const imageLink = req.body.imageLink;
        const price = req.body.price;

        try{
        const newcourse = await Course2.create({

            title,
            description,
            imageLink,
            price
        })


        res.json({

            msg: 'Course created sucessfully', CourseId:  newcourse._id
        })

    }
    catch(e){

        res.status(403).json({
            msg: "invalid token"
        })
    }
})

router.get('/courses',adminmiddleware,async (req,res)=>{

        const response = await Course2.find({})

        res.json({

            courses:response
        })

})

module.exports = router;