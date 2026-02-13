let btn = document.querySelector('#btn')
btn.className = 'bg-red-200 p-2 rounded m-2 active:scale-95 transition-all duration-300'
 function createtoaster(config){
        
        return function(msg){

            let div = document.createElement("div")
            div.className =`fixed ${config.theme==="light" ? "bg-green-600 text-white rounded m-2 p-2" : "bg-red-600 text-white"} top-2 right-2` 
            div.textContent = msg;
            document.body.appendChild(div)

            setTimeout(function(){

                document.body.removeChild(div)

            },config.duration*1000)

             
        }
 }  

 let c = createtoaster({

    theme: 'light',
    duration: 10,
 })

    btn.addEventListener('click',function(){

        c('Toast updated..');

    })

 


