const { Admin2 } = require('../db');
const jwt = require("jsonwebtoken")

const {JWT_SECRET} = require("../config");
const router = require('../Routes/admin');

function adminmiddleware(req,res,next){

        const token = req.headers.authorization;

        const words = token.split(" ");

        const jwttoken = words[1];

        try{

             const decodedvalue = jwt.verify(jwttoken,JWT_SECRET);

        if(decodedvalue.username){

            next();
        }
        else{

            res.status(403).json({

                msg: "You are not authorized person"
            })
        }


        }
        catch(e){

            res.status(403).json({
                msg: "token not found"
            })
        }
       
}

 

module.exports=  adminmiddleware;
