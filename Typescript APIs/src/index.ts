interface User{

    name: string;
    age: number;
}

function sumofage(user1: User, user2: User){

        return user1.age + user2.age;



}

const age = sumofage({name: 'pratik', age: 20},{name: 'adam',age: 30});

console.log(age);