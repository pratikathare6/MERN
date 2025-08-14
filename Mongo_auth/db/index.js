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


const Admin2 = mongoose.model('Admin2',AdminSchema);

const User2 = mongoose.model('User2',UserSchema);

const Course2 = mongoose.model('Course2',CourseSchema);

module.exports=  {

            Admin2,
            User2,
            Course2

}

