const express = require("express");

const cors = require("cors");
const app = express();
app.use(cors());

app.get('/sum',(req,res)=>{

        const a = parseInt(req.query.A);

        const b = parseInt(req.query.B);

        const sum= a+b;

        res.send(sum.toString());


});


app.listen(3000);