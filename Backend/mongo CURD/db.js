const mongoose = require('mongoose')

require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI);


const userschema = mongoose.Schema({

        name: String,
        email: String,
        username: String
});


     
   module.exports =  mongoose.model("user",userschema);