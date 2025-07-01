//arrow function


// app.get('/',(req,res)=>{


// })

//multiply this array by 2 [1,2,3,4,5]

//with basic logic
const input = [1,2,3,4,5];
// const nrearr = [];

// for(let i = 0 ; i< input.length; i++){

//     nrearr.push(input[i]*2);

// }

// console.log(nrearr);



//another way to solve 


function transform(i){

    return i*2;
}

const newarr = input.map(transform);

console.log(newarr);


//filter function 

// const arr2 = [2,3,4,5,6,7];

// const arrans = [];


// for(i=0 ; i<arr2.length; i++){

//     if(arr2[i] %2==0){

//         arrans.push(arr2[i]);

//     }
// }

// console.log(arrans);


    const arr5 = [1,2,3,4];


    function filterfn(i){

        if(i %2 ==0)
        {
            return true;

        }    
        else{

            return false;
        }

    }


    const answerr = arr5.filter(filterfn)
    console.log(answerr);