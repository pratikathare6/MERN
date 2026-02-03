//Q1 create an array with 3 fruits and print the second fruit 

let arr = ['apple','banana','lemon']

// console.log(arr[1]);

//Q2 Add mango at the end Pineapple at the beginning of this array 

let fruits = ['apple','banana']

fruits.push('mango')// add at the start
fruits.unshift('Pineapple') // add at the end 
// console.log(fruits)

//Q3 Replace banana with kivi in the array

let fruitss = ['apple','banana']

fruitss.pop();
fruitss.push('kivi')
// console.log(fruitss)

//Q4 whats the difference betwen push and unshift 

//push will insert an element in array at the last
//unshift removes an element in array at the start

//Q5 Remove the last element from an array using a method 

let numbers = [1,2,3,4,5]

numbers.pop()
// console.log(numbers)

//Q6 insert red and blue at the index 1 in this array 

let colors = ['green','balck'];
colors.splice(1,0,'red','blue')
//splice removes the element but if we pass the 3rd parameter it will add in it 

// console.log(colors)

//Q7 extract the middle 3 elements from array 

let items = [1,2,3,4,5,6]

let arr2 = items.slice(2,4)//removes the lement and returns new array 

// console.log(arr2)

//Q8 sort the array and do reverse 

let sarr = ['zara','arjun','meera','bhvya']

sarr.sort(); //default sort alfabetically
// console.log(sarr)

sarr.reverse(); // reverse the array
// console.log(sarr)

//we can also do sarr.sort().reverse() both changes the original array

//Q9 use .map to square each number 

let sq = [1,2,3,4]

 let newsq = sq.map(function(elem){

        return elem*elem

 })
//  console.log('Original array - ',sq)
//  console.log('squared array - ',newsq)

//Q10 use .filter to keep numbers greater than 10 

let arr3 = [1,2,20,30,50];

 let newarr3 = arr3.filter(function(elem){

       if(elem>10)  return elem
 })
//  console.log(newarr3)


//Q11 use reduce to find sum of this array 

let red = [10,20,30]

let newred = red.reduce(function(accum,elem){

        return accum+elem
},0)

// console.log(newred)

//Q12 use find to get the first number less tan 10 

let arr5 = [12,15,67,33,1,2,3]

let newarr5 = arr5.find(function(elem){ //returns the fist found element 

          return elem < 10
})

// console.log(newarr5)

//Q13 use .some to find any student has scored below 35 

let arr6 = [23,36,44,55]

let newarr6 = arr6.some(function(elem){

        return elem < 35
})
// console.log(newarr6)

//Q14 use .every to check if all the numbers are even 

//all the elemnts must be even then it will return true
let newarr7  = arr6.every(function(elem){

            return elem%2 ===0
})

// console.log(newarr7)

//Q15 destructure this array to get firstname and lastname 

let fullname = ['adam','smith']

let [firstname,lastname] = fullname;
// console.log([firstname,lastname])

// Q16 merge 2 arrays using spread operator 

    let m1 = [1,2,3]
    let m2 = [4,5,6]

    let newm = [...m1,...m2]

    // console.log(newm)

// Q17 add india at the start of this array using spread 

    let countries = ['japan','US']

    countries = ['india',...countries]

    // console.log(countries)


//Q18 clone this array properly not by reference 

let arr7 = [1,2,3]

let newarr8 = [...arr7] 
console.log(newarr8)
 