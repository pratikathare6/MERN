const express = require("express");
const app = express();
app.use(express.json());

const {testmodel} = require('../sample/db');

app.post('/test',async (req,res)=>{

        const title = req.body.title;
        const name = req.body.name;
        const age =  req.body.age;

        const user = new testmodel({title, name , age});


        await user.save();

        res.json({

                msg: 'data is saved'
        })
})

app.get('/getdata',async (req,res)=>{

                const response = await testmodel.find({})

                res.json({

                        response
                })

})

app.listen(3000);

console.log('server is running');