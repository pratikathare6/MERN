const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://pratik123:UsPuhxzbNIhe17zz@cluster0.1aizdpc.mongodb.net/new-year-app');

const todoschema = mongoose.Schema({

        title : String,
        description : String,
        completed : Boolean


})

const todo = mongoose.model('todos',todoschema);

module.exports={

    todo
}

