
let inp = document.querySelector("input");

let span = document.querySelector("span");


inp.addEventListener('input', function(){

     

    let cnt = 25 - inp.value.length;
      span.textContent = cnt

      if(cnt< 0){

        span.style.color = 'red'
          

      }
      else{

        span.style.color = 'black'
      }



})