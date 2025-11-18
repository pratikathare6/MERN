const { Admin } = require('../DB');


function adminmiddleware(req,res,next){

    const username = req.headers.username;

    const password = req.headers.password;
    
    Admin.findOne({

        username: username,
        password: password
    })

    .then(function(value){

        if(value){

            next();
        }else{

            res.status(403).json({

                msg: 'user not exists'
            })

        }

    })

}

module.exports=  adminmiddleware;