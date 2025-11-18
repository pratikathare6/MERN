// {
//     const str='hello world';

// console.log(str.replace('world','java'));
// }
// {

// function newrep(str,old,neww){

//     return str.replace(old,neww);

     
// }



// const str1='same thing';
// let ans = newrep(str1,'same','java');
// console.log(ans);
// }


// const str11 = 'java,name,ok,ios';


// let c = str11.split(',');
//  console.log(c);

// const str22 = '    hello    ';

// let cc = str22.trim();

// console.log(str22.toLocaleUpperCase());


// console.log(parseInt('4544'));

// let array=[1,2,3,4];

// let arr2 = [111,222,33];

// console.log(array.concat(arr2));


// function logth(str){
//     console.log(str);
// }

// array.forEach(logth);

//Call back function
// function call1(){

//     console.log('call to 1');
// }

// function call2(){

//     console.log('call to 2');
// }

// function calltowhat(fn){

//     fn();
// } 

// calltowhat(call2);

const cat = {

    name: 'the cat',
    age :15,
    voice: 'maow'
}

const dog ={

    name: 'the dog',
    age:16,
    voice:'bhow'
}

    function calltheanimal(fn)
    {
    console.log('name is '+fn.name+' age is '+fn.age+' voice is '+fn.voice);
}

calltheanimal(cat);