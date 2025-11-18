const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://pratik123:UsPuhxzbNIhe17zz@cluster0.1aizdpc.mongodb.net/Course_app');


const AdminSchema = new mongoose.Schema({

        username: String,
        password: String

})


const UserSchema = new mongoose.Schema({

        username: String,
        password: String,
        purchasedCourses:[

            {

                type: mongoose.Schema.Types.ObjectId,
                ref : 'course'

            }
        ]
})

const CourseSchema = new mongoose.Schema({

        title: String,
        description: String,
        imageLink: String,
        price: Number

});


const Admin = mongoose.model('Admin',AdminSchema);

const User = mongoose.model('User',UserSchema);

const Course = mongoose.model('Course',CourseSchema);

module.exports=  {

            Admin,
            User,
            Course

}

