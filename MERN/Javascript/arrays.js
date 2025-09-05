//objects stores the data in key value pairs
// let obj={

//     name:"pratik",
//     age:25,
//     weight:55,
//     height: "5feet 7inch",

//     greet: function(){

//         console.log("hello gi kaise ho sare");
//     }
// };

// console.log(obj);
// obj.greet();

//arrays------------------------------

// let arr=[1,2,3,5];
// console.log(arr);


//array constructor

// let brr = new Array('sample',1,'ok');

// console.log(brr);

//built in methods

//push pop shift unshift slice splice map filter reduce sort indexof find

let brr = new Array('sample',1,'ok');

// brr.push('good');
// brr.pop();

// brr.shift();
// brr.unshift('good morning');

// brr.push(2);
// brr.push(3);


// // console.log(brr.slice(2,4));

// // console.log(brr);
//  brr.splice(1,2,'java');
 
//  console.log(brr);

//map function
// let arr1 = [10,20,30];

// let ans = arr1.map((number)=> {

//     return number*number;
// })

// console.log(ans);

// let ans = arr1.map((number,index)=>{

//     console.log(number);
//     console.log(index);
// })

//filter method ---------------------------


// let arr3 = [10,20,1,8,7,9];


// let ansarr = arr3.filter((number)=>{

//         // if(number%2===0)

//         //     return true;
//         // else

//         //     return false;

//         return number%2===0;
// })

// console.log(ansarr);


// let arr4 = [1,2,'Good','Morning'];

//     let ansarr4 = arr4.filter((value)=>{

//         if(typeof(value)==='string'){ ///--you can give number also

//             return true;
//         }

//         else{
//         return false;
//     }
//     }
//     );

//     console.log(ansarr4);


let jv  =[2,5,6,4,9,7,8];

// let ans = sq
//         .filter(num => num%2===0)

//         .map(num => num*num);

//     console.log(ans);

  

    function anss(sq){

        let db = sq.filter(num=> num%2===0)

        return db;
    }
    
 
    let final = anss(jv);
    console.log(final);
    
//reduce

// let arr = [10,20,30];

// let ansrr = arr.reduce((acc,curr)=>{

//         return acc+curr;

// },0);

// console.log(ansrr);

// let arrt = [1,5,6,9,8,2];

// arrt.sort((a,b)=>b-a); -- sort method
// console.log(arrt);


// let ans = arrt.find(num=>num>8);
// console.log(ans);


// let length = arrt.length;

// console.log("length: ", length);


// arrt.forEach((value, index)=>{

//     console.log("number: ",value," index", index);
// })


// let sample =[10,20,30];

// let length = sample.length;

// for(let index = 0; index < length; index++)
// {

//     console.log(sample[index]);
// }

//for each
// let arr = [10,20,30,40];

// arr.forEach((value,index)=>{

//     console.log("number: ",value," index: ",index);

// })

// let length = arr.length;

// for(let index=0 ; index<length ; index++){

//     console.log(arr[index]);
// }


//for in used for objects 


// let obj = {

//     name: 'jabba',
//     age: 30,
//     gender : 'male'
// };

//     for(key in obj){

//         console.log(key," ", obj[key]);
//     }


// for of loop


// let arr = [10,20,30,40];


// for(let val of arr){

//     console.log(val);
// }

// let fname='javascript';

// for(let x of fname){

//     console.log(x);

// }



//arrays with functions 



let arr=[10,20,30,50];

// function getsum(arr){

//     let len = arr.length;
//     let sum = 0;

//     for(let index=0; index<len; index++)
//     {

//         sum = sum + arr[index];

//     }
//     return sum;

// }
// let total = getsum(arr);

// console.log(total);


function getsum(arr){


    let sum=0;

    arr.forEach(value => {
        
        sum= sum+value;
    });

    return sum;
}

let total  = getsum(arr);

console.log(total);


