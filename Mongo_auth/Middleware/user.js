const express = require("express");

const router = express.Router();

const {JWT_SECRET} = require("../config");
const usermiddlware = require('../Middleware/user');
const { User2 , Course2 } = require("../db");

router.post('/signup', async(req,res)=>{

    const username = req.body.username;
    const password = req.body.password;

    await User2.create({

        username,
        password
    })

    res.json({

        msg: 'User is created'
    })
});

router.get('/courses', async (req,res)=>{

    const response = await Course2.find({});

    res.json({

        courses: response
    })
});

router.post('/courses/:courseId',usermiddlware,async(req,res)=>{

    const courseId = req.params.courseId;
    const username = req.headers.username;
    
   await User2.updateOne({

        username:username
        
    },
    
    {
        '$push':{

            purchasedCourses : courseId
        }

         

    })

    res.json({

        msg: "purchase complete"
    })
});

router.get('/purchasedCourses',usermiddlware, async(req,res)=>{

       const user2 = await User2.findOne({

            username : req.headers.username


        });

        const courses = await Course2.find({
            _id:{

                '$in': user2.purchasedCourses
            }

        })

        res.json({
             
            courses : courses
        })


})


module.exports = router