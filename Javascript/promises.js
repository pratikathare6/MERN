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


    function promisefun(){

        let p = new Promise(function(resolve){

            setTimeout(function(){

                resolve("hii there");
                
            },3000)
            
        })

        return p;
    }

    async function main(){

        let val = await promisefun();
         console.log(val);
        console.log('hello there');
       
    }

    main();

    console.log('after main');


    async function fetchData() {
  try {
    const response = await fetch('https://fake-json-api.mock.beeceptor.com/users');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(JSON.stringify(data));
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Call the function
fetchData();