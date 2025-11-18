
const mongoose = require("mongoose");


mongoose.connect('mongodb+srv://pratik123:UsPuhxzbNIhe17zz@cluster0.1aizdpc.mongodb.net/savedata');



const testschema =  mongoose.Schema({

        title: String,
        name : String,
        age : Number

})

const testmodel = mongoose.model('data',testschema,'data');

module.exports = ({

        testmodel
})