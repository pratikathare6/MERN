//Q1 what is the difference between the function decleration and expression in terms of hoisting?


//decleration hoisting 

abc();


function abc(){

    console.log('hello');
}


//expression hoisting 

     a(); //here we cant do hoisting with the function expression 

     let a = function(){

        console.log('hello')
     }



//Q2 convert this into arrow function 

function multiply(a,b){
    return a* b;
}

//ans

    let multiply = (a,b)=>{

        return a*b;
    }

    multiply(12,12)


//Q3 what is the parameters and arguments in this code

    function welcome(name){  //this is the parameter 'name'

        console.log(name)
    }

    welcome('hello'); //this is the argument 'hello'


//Q4 what does the ... operator means in the parameters 
//ans - the ... operator is called the rest in the parameters used to pass all the parameters in single value 

//ex:

    function abcde(...val){

            console.log(val) //will return a array 
    }

    abcde(1,2,3,4,5)


//Q5 use rest parameter to accept any number and return the total


    function score(...val){

        let total = 0;
            val.forEach(function(value){

                total = total + value;

            })

        return total;
        
    }

    let s = score(1,2,3)
    console.log(s)


//Q6 fix this function using early return 

function checkage(age){

    if(age< 18){

        console.log('too young')

    }
    else{

        console.log("allowed")
    }

}

//ans

    function checkagea(age){

        if(age< 18) return 'too young'
        else 
            return 'allowed'
    }

    let answer  = checkagea(23);
    console.log(answer)


//Q7 what it means when we say functions are first class citizens 

//ans  - we can store the functions in a variable and also we can pass the functions 
//in the arguments 

//Q8 pass a function into another function and execute it inside 


    function parent(val){

            val();

    }

    parent(function(){

        console.log(12)
    })

//Q9 what is the higher order function 

//ans it must be return a function or accept a function as a parameter 

//return a function 

    function abcdss(){

        return function frd(){

        }
    }

// accept a funtion as a parameter 

    function para(val){

        val();
    }

    para(function(){
        console.log('hello from inside')
    })
 

//Q10 what is closure when it is created 

//closure function is the function which returns another function 
//and uses the variable from the parent function

    function abcdfh(){

        let val = 10;

        return function(){

            console.log(val)
        }
    }

//Q11 convert this normal function to IIFE

function init(){

    console.log('initiated')
}


//ans--

(function init(){

    console.log('initiated')
})()


//Q13 closure example 

    function closer(){

        let cnt = 0;

        return function(){

            cnt++;
            return cnt;
        };
    }


    let aa = closer();

    console.log(aa());
    console.log(aa());

    let bb = closer();

    console.log(bb());



  