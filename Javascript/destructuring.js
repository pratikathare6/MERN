
const person = {
    name: "John Doe",
    age: 30,
    email: "john@example.com",
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zipCode: "10001",
        country: "USA"
    },
    skills: ["JavaScript", "React", "Node.js", "MongoDB"],
    employment: {
        company: "Tech Corp",
        position: "Senior Developer",
        salary: 120000,
        startDate: "2020-01-15"
    },
    isActive: true,
    phone: "+1-555-0123"
};


 
//if we want to access a ZipCode again and again we can destructure it like this 

let {zipCode} = person.address;

console.log(zipCode)


//same way with array 

let [first,second] = person.skills

console.log(first,second)



//spread operator

 

let newperson = {...person}

// console.log(newperson)

//on array
let newskills = [...person.skills]
console.log(newskills)


//rest operator

    function abcd(...rest){

        console.log(rest)

    }

    abcd(1,2,3,4,5,5)


//merging arrays into a single array 

    const arr1 = ['john','smith','alex']
    const arr2 = ['jonson','williams','zander']

    const arr3 = [...arr1,...arr2]

    console.log(arr3)

//filtering an array of objects to display items based on a search query filtering products by name 

    const products = [

        {name: 'laptop',type: 'electronics'},
        {name: 'mobile',type: 'electronics'},
        {name: 'tv',type: 'electronics'},
        {name: 'shirt',type: 'clothing'},
        {name: 'pant',type: 'clothing'},
        {name: 'tshirt',type: 'clothing'},

    ]

    let filteredproducts = products.filter(function(product){

        if(product.type === 'electronics')
        {
                return true;
        }
    })

    console.log(filteredproducts)

//group product by name using map
    let mapped = products.map(function(product){

            return `<div>${product.name}</div>`
    })

    console.log(mapped)


    const users = [
        {
            id: 1,
            username: "johndoe",
            email: "johndoe@example.com",
            isActive: true
        },
        {
            id: 2,
            username: "janedoe",
            email: "janedoe@example.com",
            isActive: false
        },
        {
            id: 3,
            username: "alexsmith",
            email: "alexsmith@example.com",
            isActive: true
        }
    ];

    let user2 = users.filter(function(user){

        if(user.isActive == true){

            return user 
        } 
    })
    console.log(user2)