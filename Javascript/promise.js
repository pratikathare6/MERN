

// let firstpromise = new Promise(

//     (resolve,reject)=>{

//         console.log("hello");
//         //resolve(1001);
//         reject(new Error('internal server error'));
//     }

// );


// let firstpromise = new Promise((resolve,reject)=>{


//     setTimeout(

//         function saymyname(){
    
    
//             console.log("my name is pratik");
//         },10000
    
//     );

//     resolve(1);
    

// }); 


// let newpromise1 = new Promise((resolve,reject)=>{

//         let sucess = true;

//         if(sucess){

//             resolve("promise fulfilled");

//         }
//         else{

//             reject("promise not fulfilled");
//         }

// });


// newpromise1.then((message)=>{

//     console.log("then message is "+message);//we can use multiple then 



// }).catch((error)=>{

//         console.log("Error: "+ error);
// }).finally((message)=>{


//     console.log("default msg");
// })


let promise3 = new Promise((resolve,reject)=>{

        setTimeout(resolve,100,"first");

})

let promise4 = new Promise((resolve,reject)=>{

    setTimeout(resolve,2200,"second");

})

let promise5 = new Promise((resolve,reject)=>{

    setTimeout(reject,400,"third");

})


Promise.all([promise3,promise4,promise5])

    .then((values)=>{

        console.log(values);
    })

    .catch((error)=>{

        console.log("error "+error);


    })