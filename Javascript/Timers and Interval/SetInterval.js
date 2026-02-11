// setInterval(function(){

//     console.log('Hello from 2 sec interval')
// },2000)

let count =10 

    let c = setInterval(function(){
        
       
        console.log(count)
         count--;
        if(count<=0){
            clearInterval(c);
        }

    },1000)