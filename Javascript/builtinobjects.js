// math. object 

// console.log(Math.PI);

// console.log(Math.max(10,50,12));

// console.log(Math.min(10,20,1,5));

// console.log(Math.round(1.22));

// console.log(Math.floor(2.9));

// console.log(Math.ceil(1.9));

// console.log(Math.abs(-5));


// console.log(Math.round(Math.random()*9+1));


function otp(){

    let num='';
    for(let i=1; i<6; i++)
    {

       let digit =  Math.round(Math.random()*9+1);

        num =num+digit;   
        
    }

    return num;
     
}

    

  let ans =otp();
console.log('otp is ',ans); 

 

let curr = new Date(2002,26,1,7);

console.log(curr);



