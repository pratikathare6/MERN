const express = require("express");
const { createtodo, updatetodo } = require("../types");
const { todo } = require("./db");

const app = express();
const cors = require("cors");
app.use(cors);
app.use(express.json());


app.post('/todo',async (req,res)=>{

    const createpayload = req.body ;
    const parsedpayload = createtodo.safeParse(createpayload);

        if(!parsedpayload.success){

            res.status(411).json({

                msg: "you send the wrong inputes"
            })

            return;
        }

           await todo.create({

                title: createpayload.title,
                description: createpayload.description,
                completed: false

            })

            res.json({

                msg: 'todo is created'
            })
    


})


app.get('/todos',async (req,res)=>{

       await todo.find({})

        res.json({
            msg: 'todo fetched sucessfully'
        })


})

app.put('completed',async (req,res)=>{

        const updatepayload = req.body;
        const parsedpayload = updatetodo.safeParse(updatepayload);

        if(!parsedpayload.success){

            res.status(411).json({

                msg: 'you sent wrong inputs'
            })
         return;
        }
        await todo.update({ _id: req.body.id},{completed: true} )

        res.json({

            msg: 'Todo marked as completed'
        })
    
})












app.listen(3000);