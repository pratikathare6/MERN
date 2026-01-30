//temporal dead zone 
//means js knows the variable is declared but js connot read its value  
//but this will not happen with the var 
console.log(a);//--this is the temporal dead zone for a 

let a = 30;



//hoisting
//when we declare a variable after that it will break into 2 parts 
//var a = 20;
// 1. var a = undefined
// 2. a = 20

//this is called as hoisting 

// var -> hoist - >undefined
// let -> hoist - > x(no value)
// const -> hoist - >x(no value)

//primitive

    //string boolean number null undefined symbol bigint

//reference

    //array objects functions 
    