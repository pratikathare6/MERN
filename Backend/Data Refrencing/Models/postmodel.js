const mongoose = require('mongoose')



const postsschema = mongoose.Schema({

        postdata: String,
        user: {

                type: mongoose.Schema.Types.ObjectId,
                ref:'users'
        },
        date:{

                type: Date,
                default: new Date

        }
})

module.exports = mongoose.model('posts',postsschema);
