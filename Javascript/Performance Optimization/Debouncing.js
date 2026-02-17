 
let input = document.querySelector('#inp')


function debounce(fnc,delay){

        let timer;

        return function(...args){

            clearTimeout(timer)

            timer  = setTimeout(function(){

                fnc(...args)

            },delay)    
        }
}

function throttle(fnc,delay){

    let timer = 0;

    return function(...args){

        let now = date.now();

        if(now - timer >=delay){
            timer = now;
            fnc(...args)
        }
    }

}

input.addEventListener("input",debounce(function(){

        console.log('hello debounce')

},1000))