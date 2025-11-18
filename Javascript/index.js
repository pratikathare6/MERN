console.log("namaste");


function sal()
{

    var age = 50;
     
    let stat  = (age < 18)? 'ok' : 'Not ok';
    console.log(stat);
}

sal();

let c=3;

switch(c){

    case 1 : console.log('A');
    break;
    case 2 : console.log('B');
    break;
    case 3 : console.log('C');
    break;
}

// function sayname(num){

//      for(let i=num; i<=10; i++){

//         console.log(i);
//      }
// }

// sayname(1);

// function sayname(num1,num2){

//     let average=(num1+num2)/2;
//     console.log(average);
// }

// sayname(2,3);


//return functions

// function getsum(a,b,c){

//     let sum=a+b+c;
//     return sum;
// }

// let ans= getsum(1,2,3);

// console.log(ans);


// function getm(a,b){

//     return a*b;
// }

// console.log(getm(10,20));


// const getmult = function(a,b){

//     return a/b;
// }

// console.log(getmult(10,20));
 

let getexp = (x,y) =>{

    return x*y;
}

console.log(getexp(10,20));