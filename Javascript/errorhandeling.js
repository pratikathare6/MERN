//compile time error

//syntax error
// console.log(;

//runtime error

    //reference error
    // console.log(x);

//error handeling 
// with try catch

     try {

            console.log(a)
        
     } catch (e) {
            //define what we can do with the error 
            //retry logic
            //fallback mechanism
            //logging
            //custom error

            console.log('inside catch');
            console.log('your error is here',e);
     }

     finally{

        console.log('i will run anytime');
     }

//finally block
//this will run everytime 

//if we dont use finally the code will not execute after catch block

//custome error

    //  try {
        
    //         console.log(x);
    //  } catch (err) {
        
    //     throw new Error('declare first');
    //  }


     //console.log(f);

     let errorCode = 100;

     if(errorCode == 100){

        throw new error("Invalid JSON");
     }
