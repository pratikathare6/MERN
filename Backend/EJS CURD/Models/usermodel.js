const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.MONGODB_URI)


    const userschema = mongoose.Schema = {

            username: String,
            email: String,
            imgurl: String

    }

    module.exports = mongoose.model("users",userschema);

    