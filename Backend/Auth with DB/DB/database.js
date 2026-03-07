
const mongoose = require('mongoose');
require('dotenv').config()
mongoose.connect(process.env.MONGODBURL);


const authmodel = mongoose.Schema({

        username:String,
        email:String,
        password:String,
        age:Number

})

module.exports = mongoose.model("AuthData",authmodel);

