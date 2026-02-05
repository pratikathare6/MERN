//Q1 create an object for a student with name , age and isEnrolled

let Student = {

    Name: 'sam',
    age: 12,
    isEnrolled: 'No' 
}

//Q2 can an object key be a number or boolean 

const obj = {

    true: 'yes',
    42: 'answer'
}

console.log(obj[42])

//so yes it can be number or a boolean 

//Q3 Access the value of first name from this object 

const user = {

    'fist-name' : 'harsh',
    name : ''

}
user.name 
user["fist-name"]//if the key is string we access like this 

//Q4 Given a dynamic key  = age how will you access it 

let key = 'age'

const user2 = {

    age: 12
}

    let a = user2[key]
    console.log(a)

//Q5 from the object below print the latitude

const location = {
    city: 'bhopal',
    coordinates: {

        lat: 12.12,
        long: 23.23
    }
}

console.log(location.coordinates.lat);

//Q6 Destructure the city and lat from the location object above 

 let {city} = location;
 let {lat} = location.coordinates;

 console.log(city,lat)

//Q7 Destructre the key firstname as a variable called firstName

 const user3 = {

        "frist-name": 'pratik'
 }

 let {"first-name" : firstName} = user3;
//here the firstName is the variable 

//Q8 use for in loop to log all keys in this object 

const course = {

    title: 'javascript',
    duration: '4 weeks'
};

console.log('All keys are -----')
    for(let key in course){

        
        console.log(key)
    }

//Q9 use object.entries() to print all key-value pairs as :
//title: javascript 
//duration: 4 weeks 

const course2 = {

    title: "javascript",
    duration : '4 weeks'
}

Object.entries(course2).forEach(function(elem){

    console.log(elem[0]+": "+elem[1]);


})

//Q10 what is wrong in this 

const obj1 = {info: {score: 80}};

const clone  = {...obj1};

clone.info.score = 100;

// console.log(obj1.info.score);
// console.log(obj1)

//here the problem is when we clone a nested object and modify the cloned object 
//it will also modify the original object 
//to overcome that we need to deepclone the object with JSON Stringify and parse 

    let clone4 = JSON.parse(JSON.stringify(obj1))

    clone4.info.score=50;

    console.log(clone4.info.score)
    console.log(obj1)


// Q11 Rewrite using optional chaining 

const person = {}

console.log(person.profile?.name);



//Q12 use a variable to dynamically assign a property 
{
const keyy = "role";

let obj = {

    name: "pratik",
    [keyy]: 'admin'

}; 

}