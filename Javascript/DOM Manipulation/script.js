let texth1  = document.querySelector("h1")

texth1.innerHTML = "javascript DOM";

let img = document.querySelector("img")

// img.setAttribute("src","https://plus.unsplash.com/premium_photo-1738779001856-61660b4ebeec?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")

let h3 = document.createElement('h3');

h3.textContent = 'hello ji'
document.querySelector('body').appendChild(h3)
document.querySelector('body').prepend(h3) 

document.querySelector('body').removeChild(h3)

// Q1 select the heading of a page by ID and chnage its text to "welcome to mac"

let heading = document.querySelector("#mach1");
heading.textContent = 'Welcome to mac'

//Q2 select all LI elements and print their text using a loop.

let list = document.querySelectorAll('li');
 console.log(list)
 
    list.forEach(function(elem){

            console.log(elem.innerText)
    })

//Q3 select a link and update its href to point to google.com 

let linkk = document.querySelector("a")
    
linkk.href = 'https://www.google.com'

//Q4 add a title attribute to the div 

let divv = document.querySelector("#diiv");
console.log(divv)
divv.setAttribute("title","name");

//Q5 remove the disabled attribute from a button

let btn = document.querySelector("button")
console.log(btn)
btn.removeAttribute('disabled')

// Q6 create a new list item <li>new Task</li> and add it to end of a ul

let newlistitem  = document.createElement('li')
newlistitem.textContent = 'hwllo'

let ull = document.querySelector('ul')

ull.append(newlistitem)

//Q7 create a new image elemnt with a placeholder source and add it at the top of a div 

let newelem = document.createElement('img')
newelem.setAttribute('placeholder','sample image..')

let divi = document.querySelector('#diiv')

// divi.prepend(newelem)

//Q8 add the css class to every even li

let addclass = document.querySelectorAll("ul li:nth-child(2n)")

 addclass.forEach(function(elem){

    elem.classList.add('heighlight')
 })

 //Q9 toggle a class active on abutton when clicked use classList.toggle()

 let btntg = document.querySelector('#btn')
 console.log(btntg)

//  btntg.onClick(disabled)

 //Q10 set the font size of all <p> elements to 18px using style 

    let pgdiv = document.querySelector('#pgdiv')
    let pgdivchild = pgdiv.querySelectorAll('p')
    
    pgdivchild.forEach(function(elem){

        elem.style.fontSize ='38px';
    })
 

    divi.addEventListener('mouseover',function(){

         divi.style.backgroundColor = 'green'
    })
     divi.addEventListener('mouseout',function(){

         divi.style.backgroundColor = 'red'
    })

   let md  = document.querySelector('.mousediv')
    window.addEventListener('dblclick',function(elem){

      md.style.top = elem.clientY + "px";
      console.log(elem.clientX)
      md.style.left = elem.clientX + "px";


    })

// Event bubbling 

    let eb = document.querySelector('#pgdiv')
    console.log(eb)

    eb.addEventListener('click',function(elem){

      elem.target.classList.toggle("pgidiv")

    })