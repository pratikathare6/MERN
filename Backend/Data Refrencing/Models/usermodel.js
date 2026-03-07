const mongoose = require('mongoose');

require('dotenv').config()

mongoose.connect(process.env.MONGODBURL);


const userschema = mongoose.Schema({

        username: String,
        email: String,
        age: Number,
        posts: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'posts'
            }
        ]
})

module.exports = mongoose.model('users',userschema);

