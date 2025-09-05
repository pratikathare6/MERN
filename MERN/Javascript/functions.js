//call stack and hoisting 


const obj= {

    age: 20
};



console.log(obj);
 

// functions are first class citizens 

//  assign to variable

        let funct = function print(){

            console.log('good morning')
        }

        funct();

//as arguments




        function greet(greetme,fname){

            console.log(fname);

            greetme();
        }

        function greetme(){

            console.log('hello good morning');
        }

        greet(greetme,'Pratik');

// return function


            function solve(number){

                return function(number){

                    return number*number;
                }
            }


            let sm = solve();

            let finalans = sm(5);
            console.log(finalans);

// use as property


            const arr = [

                function(a,b){

                    return a+b;
                },
                function(a,b){

                    return a-b;
                },
                function(a,b){

                    return a/b;
                }
            ];

            let first = arr[1];

            let ans = first(10,20);
            console.log(ans);

// as object 


            let obj1 = {

                age:20,

                greet: ()=>{

                    console.log('good morning');
                }
            }

            console.log(obj1.age);

            obj1.greet();

// as expression

            

