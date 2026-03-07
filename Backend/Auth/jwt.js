const cookieParser = require('cookie-parser');
const express = require('express');

const app = express();
app.use(cookieParser())

const jwt = require('jsonwebtoken');



app.get('/',(req,res)=>{

       const token =  jwt.sign({email:'pratik5@mail.com'},'sceratestring')

       console.log(token);
       res.cookie("token",token)
       res.send('done');

})

app.get('/gettoken',(req,res)=>{


        let data = jwt.verify(req.cookies.token,"sceratestring");
        console.log(data)
        res.redirect('/')
})
 




app.listen(3000);
