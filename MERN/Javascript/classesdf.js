class human{
    //properties

    #age = 10;//private - accessible only in the class
    wt = 80; //public -default 
    ht = 180;


    //behaviours

    walking(){

        console.log('i am walking ',this.#age); // aceesing private properties within class
    }

    running(){

        console.log('i am running');

    }
}

let obj = new human();

// console.log(obj.age); // access properties
console.log(obj.ht);

obj.running(); // acess behaviours
obj.walking();


//getters and setters

class person{

    #color= 'red';
    htt = 130;

    get fetchcolor(){

        return this.#color;
    }

    set modifycolor(val){

        this.#color = val;

    }

    constructor(newhtt,newcolor){ // constructor 

        this.htt = newhtt;
        this.#color = newcolor;
    }



}

let obj2=new person(110,'orange');

 console.log(obj2.fetchcolor);

 obj2.modifycolor='green';

 console.log(obj2.fetchcolor);

 console.log(obj2.htt);
 obj2.fetchcolor;


//default parameters in functions 

function myname(fname = 'okok', lname= 'love'){

    console.log(fname,' ', lname);
}

myname('java');

// default as object

    function solve(value = {age:10,fname:'sample'}) // we an pass [array] also
    {

        console.log(value);
    }

    solve();


// default as function 

function getage(){

    return 100;
}

function myage(name,age=getage()){

    console.log('name is',name ,'and age is',age);
}

myage('"love"');
 