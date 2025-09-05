
let obj = {

    age:12,
    wt:16,
    ht: 20
};

// console.log(obj);

// obj.name='java';

// console.log(obj);



// object cloning

//1. spread operator

    // let obj2 = {...obj};

    // obj.age =18;
    // console.log(obj);
    // console.log(obj2);

//2.using assign

    // let obj2 = Object.assign({},obj);-- we can give many objects using ","

    // console.log(obj2);

//3.iteration

    let obj2 = {};

    for(let key in obj){

        let newKey = key;
        let newValue = obj[key];

        //insert new key and val in obj2 and create clone 

        obj2[newKey] = newValue; 
    }

    console.log('obj2',obj2);



// Garbage collector


    // we have no control on it 

    //its improves performance 
    //release unused memory
    //prevent memory leak
