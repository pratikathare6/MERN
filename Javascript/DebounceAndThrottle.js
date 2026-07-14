// 1. debouncing
// run the function when action stops
//We use ...args to preserve and forward all arguments passed to the debounced or throttled function, making it reusable and flexible.

function debounce(func,delay){

    let timer;

    return function(...args){

        clearTimeout(timer)
        
        timer = setTimeout(()=>{
            
            func(...args);

        },delay)
    }

}

function searchapi(value){
    console.log('APi call: ',value)
}

const debouncedsearch = debounce(searchapi,5000);

// debouncedsearch('hi')
// debouncedsearch('hii')
// debouncedsearch('hii there')

//Throttling ensures that a function executes at most once in a specified time interval, no matter how many times it's triggered

function throttledata(func,delay=500){

     let flag = false

     return function(...args){
        if(!flag){

            func(...args);
            flag =true;
            
            setTimeout(()=>{
                flag = false
            },delay)
        }


    }
}

function apiicll(){
    console.log('api called')
}

const called = throttledata(apiicll)
called()
called()
called()
called()
called()
called()
called()



