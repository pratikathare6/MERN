//global scope -- we avoid this 

    // var age=20;

// function scope

        function say(){

            var fname='hello';

            console.log('good morning',fname)
        }

        say();

        //console.log(fname);--cannot access

// block scope


{

    var height = 105;
}

console.log(height);


{

    let jname = 'okok';
    const kname='jkjk';
}

// console.log(jname); -- not allowed
// console.log(kname); -- not allowed


// Temporal dead zone 

    // console.log(jk);-- temporal dead zone
    // console.log('hi'); --temporal dead zone
    // console.log('hello');---temporal dead zone
    let jk= 'sample'; //temporal dead zone
    console.log('jk');