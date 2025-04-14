//closure is a combination of function with required data



// function outerfunction(){

//     let name='javascript';

//     function innerfunction(){

//         let name='java';
//         console.log(name);

//     }

//     innerfunction();

// }


// outerfunction();


function outerfunction(){

    let name='pratik';

    function innerfunction(){

        console.log(name);
    }

    return innerfunction;

}

let inner = outerfunction();

inner();