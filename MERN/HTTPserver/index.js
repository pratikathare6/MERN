const express =  require ('express');

const app = express();

const port =3000;



 calculatesum = (n)=>{

    let ans = 0;

    for(let i=0;i<n;i++){

        ans = ans+i;
    }
    return ans;

 }
app.get("/",function(req,res){
    
    const n = req.query.n;
    const ans = calculatesum(n);

    res.send('hii there your ans is '+ans);
})

app.listen(3000);