import express, { json } from 'express';

const app = express();
import cors from 'cors';
app.use(cors());
app.use(express.json());
app.get('/random',function(req,res){

        const network= Math.floor(Math.random()*100)+1;
        const jobs= Math.floor(Math.random()*100)+1;
        const notifications= Math.floor(Math.random()*100)+1;
        const messaging= Math.floor(Math.random()*100)+1;
        res.json(
            {network,jobs,notifications,messaging}
        )


})

app.listen(3000);