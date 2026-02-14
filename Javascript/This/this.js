//global scope

    console.log(this)
    
//functional scope

    function gb(){

        console.log(this)
    }    


//EventHandler scope

    let h1 = document.querySelector('#h1')

    h1.addEventListener('click',function(){

            this.style.color = 'red'
            console.log(this)

    })


//class scope

    class Abcd{

        constructor(){

            console.log('hey')
            this.a=12; //here a=12 becomes an object 

        }
    }

    let val = new Abcd();
    console.log(val);

//call

 let obj = {

    name:'pratik',
    age: 12,

 }

 function abcd(){
    console.log(this) //here this refering to the object obj
 }

abcd.call(obj);

//apply

let obj2 = {

    name: 'html',
    age: 30
}

function dcba(a,b,c){

    console.log(this,a,b,c) //here we can pass 2 values 

}

dcba.apply(obj,[1,2,3])//but while passing it must be in the array[]

//bind same as apply but returns a function 

let obj3 = {

        name: 'CSS',
        age: 50
    
}

    function zxy(a,b,c){

        console.log(this,a,b,c);


    }

    let z = zxy.bind(this,[6,4,5])
    console.log(z)

