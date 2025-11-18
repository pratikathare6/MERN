

class animal{

    constructor(name,age,color){

        this.name=name;
        this.age=age;
        this.color = color;

    }

    colorcode(){

        console.log(this.color);
    }
}

let dog = new animal('simbha',12,'white');

dog.colorcode();


const currentdate = new Date();

console.log(currentdate.getDate() +' '+currentdate.getMonth() +' '+currentdate.getFullYear());



const User={ 
    
            name: "json",
            age:  20
};

const finalstring = JSON.stringify(User);

console.log(finalstring);
