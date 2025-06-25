const express = require('express');
 

const port = 3000;

const app = express();

app.use(express.json());
const user = [{


    name: "john",
    kidnes: [{
            healthy: false  
    }]



}];


app.get('/',function(req,res){

    const johnkidnes = user[0].kidnes;

    const noofkidenes = johnkidnes.length;
    let noofhealthykidnes = 0; 

    for(let i = 0 ; i<johnkidnes.length;i++){

        if(johnkidnes[i].healthy){

            noofhealthykidnes = noofhealthykidnes+1; 
        }
    }
    
        const noofunhealthykidnes = noofkidenes - noofhealthykidnes;
        
        res.json({

            noofkidenes,
            noofhealthykidnes,
            noofunhealthykidnes

        })

})



        app.post("/",function(req,res){

        const ishealthy = req.body.ishealthy;

            user[0].kidnes.push({
                healthy : ishealthy
            });

            res.json({

                    msg: "Done!"

            })

                 


        })

        app.put("/" ,function(req,res){

            for(let i = 0; i<user[0].kidnes.length; i++ ){

                user[0].kidnes[i].healthy = true;
            }

            res.json({


            })


        })


        app.delete("/",function(req,res){

            const newkidenes = [];

        if(nounhelthykidnes()){
            for(let i=0; i<user[0].kidnes.length; i++)
            {

                if(user[i].kidnes[i].healthy){
                    newkidenes.push({

                        healthy : true
                    }) 
                }
                

            }
           
            

             user[0].kidnes = newkidenes;
            res.json({

                msg: "done!"})
            }
            else{

                res.status(411).res.json({
                    msg : "you have healthy kidenes"
                })
            }
        
        })
    
function nounhelthykidnes(){

        let numberunhealthy = false;

            for(let i=0; i<user[0].kidnes.length; i++)
            {

                if(!user[i].kidnes[i].healthy){
                    
                    nounhelthykidnes = true;
                }

            }
            return nounhelthykidnes;
    }

app.listen(3000);

