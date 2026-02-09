

let inputbox = document.querySelector('input');

    inputbox.addEventListener("input",function(data){

        console.log(data.data)

    })


let device = document.querySelector('select')
    let selecteddevice = document.querySelector('h3')


   device.addEventListener('change',function(data){

    selecteddevice.textContent=data.target.value

   })

 
let h6= document.querySelector("h6");

   window.addEventListener("keypress",function(data){

            console.log(data.key)

        if(data.key === ' '){
            h6.textContent = 'space'
        }
        else{
            h6.textContent = data.key   

        }
   })
    

let fileinp = document.querySelector('#fileinp')

let btn = document.querySelector('#btn')

   btn.addEventListener("click",function(){

        fileinp.click();
   })

   fileinp.addEventListener("change",function(data){

     let file = data.target.files[0]

         if(file){

            btn.textContent = file.name
   
         }

   })

   //