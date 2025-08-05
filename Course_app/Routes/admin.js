const express = require("express")
const adminmiddleware = require("../Middleware/admin")
const router = express.Router();
const {admin, Admin, Course} = require("../DB")

router.post('/signup',async (req,res)=>{

        const username = req.body.username;
        const password = req.body.password;

       await Admin.create({

            username : username,
            password : password
        })

         res.json({

            msg: "Admin created sucessfully"
        })
       
})

router.post('/courses',adminmiddleware, async (req,res)=>{

        const title = req.body.title;
        const description = req.body.description;
        const imageLink = req.body.imageLink;
        const price = req.body.price;


        const newcourse = await Course.create({

            title,
            description,
            imageLink,
            price
        })


        res.json({

            msg: 'Course created sucessfully', CourseId:  newcourse._id
        })
})

router.get('/courses',adminmiddleware,async (req,res)=>{

        const response = await Course.find({})

        res.json({

            courses:response
        })

})

module.exports = router;