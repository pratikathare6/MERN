const express = require("express");

const router = express.Router();


const usermiddlware = require('../Middleware/user');
const { User , Course } = require("../DB");

router.post('/signup', async(req,res)=>{

    const username = req.body.username;
    const password = req.body.password;

    await User.create({

        username,
        password
    })

    res.json({

        msg: 'User is created'
    })
});

router.get('/courses', async (req,res)=>{

    const response = await Course.find({});

    res.json({

        courses: response
    })
});

router.post('/courses/:courseId',usermiddlware,(req,res)=>{

    const courseId = req.headers.courseId;
    const username = req.headers.username;
    
    User.updateOne({

        username:username
        
    },
    
    {

        purchasedCourses: {
            "$push": courseId
        }

    })

    res.json({

        msg: "purchase complete"
    })
});
