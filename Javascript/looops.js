
//         let startt = new Date();

//         let starttime = startt.toTimeString();

//         let ans=0;

//     ab = (a)=>{

//             for(let i=0 ; i<=a; i++){

//     ans = ans+i;

// }
//     return ans;
//     }


//     let c = ab(50000000);
//     console.log(c);
 

//             let endd = new Date();

//         let endtime = endd.toTimeString();

         

//         console.log(startt-endd);

    // function sq(c)
    // {
    //     return c*c;

    // }

    // function qb(d)
    // {
    //     return d*d*d;
    // }

    //     function sunsq(a,b,fn){

    //         let sq1 = fn(a);

    //         let sq2 = fn(b);

    //         return sq1+sq2;

    //     }


    //     setTimeout(()=>{sunsq(2,3,sq)},10000);
    //     console.log("hello9 world");
         


    // const fs = require("fs");

    // fs.readFile("a.txt","utf-8",function(err,data){

    //     console.log(data);


    // })



    const fs = require("fs")

    function pratreadfile(cb){

        fs.readFile("a.txt" , "utf-8", function(err,data){


            cb(data);
        })


        
    }

    function ondone(data){

        console.log(data);
    }

    pratreadfile(ondone);


