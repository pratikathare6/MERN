const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
const zod = require("zod");
 

const schema = zod.object({

    kidneys: zod.array(zod.number()),
    email: zod.string(),
    country: zod.literal("IND").or(zod.literal("RUS"))

})

app.post('/health',function(req,res){

     
     const response = schema.safeParse(req.body);

     if(!response.success){

        return res.json({
            
            msg: 'wrong inputs'
        })
     }

     res.json({

        msg: "okok"
     })
 
});

app.listen(port);