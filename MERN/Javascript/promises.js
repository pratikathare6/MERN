// const fs = require("fs");



//         function readpat(resolve){

//             return new Promise(function(resolve){

//                 fs.readFile("a.txt","utf-8",function(err,data){

//                     resolve(data);
//                 })

//             })
//         }

//         function ondone(data){

//             console.log(data);
//         }

//         readpat().then(ondone);


        // let p = new Promise(function(resolve){

        //     setTimeout(function(){

        //              resolve("hi there");
                
        //     },1000)
           
        // })


        // function callback(){
        //     console.log(p)
        // }

        //  console.log(p);

        //  p.then(callback);



        function squr(a){

          return a*a;
        }

        function cubes(b){

          return b*b*b;
        }
        function callbck(a,b,fn)
        {
            
             let sqr1 = fn(a);
            let sqr2 = fn(b);
             

            return sqr1+sqr2;

        }

        let ans = callbck(10,20,squr);

        console.log(ans);



        const fs = require("fs");

      

        

        fs.writeFile("a.txt","this is the sample text from fs write",(err)=>{

            if(err){
              console.log(err)
            }
            else
            {
              console.log("write sucessfull");

            }
        });

        fs.readFile("a.txt","utf-8",(err,data)=>{

          console.log(data);
        })


        function newprom(){

          let p = new Promise(function(resolve){

            resolve("hiiiiii");
          })
          return p;
        }

        async function main(){

          let ans = await newprom();
          
          console.log(ans);
        }

        main();