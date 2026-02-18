

let btn = document.querySelector('#btn')


btn.addEventListener("click",async function(){

    let heavy = await import('./heavycode.js')

    heavy.heavycode();
})