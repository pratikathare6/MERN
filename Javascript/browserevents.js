//add event listner
// function getevent(){


//     let fpara = document.getElementById('fpara');

//     fpara.textContent= 'heelo form john';
// }

//  let fpara = document.getElementById('fpara');
//  fpara.addEventListener('click',getevent);

//   fpara.removeEventListener('dblclick',getevent);


//event object 
  
// function getevent(event){

//         console.log(event); //here we are getting event object 

//     let fpara = document.getElementById('fpara');

//     fpara.textContent= 'heelo form john';
// }

//  let fpara = document.getElementById('fpara');
//  fpara.addEventListener('click',getevent);
 

 // default action 


// function clickevent(event){

//     event.preventDefault();
//     anchele.textContent = 'click done';

// }

//  let anchele = document.getElementById('anch');

//  anchele.addEventListener('click',clickevent);

//  let paras = document.querySelectorAll('p');

//  for(let i = 0 ; i<paras.length; i++){

//     let para = paras[i];

//     para.addEventListener('click', function(){

//         alert("you have clicked on para: "+ (i));
//     })
//  }
    
//  let paras = document.querySelectorAll('p');

//  for(let i = 0 ; i<paras.length; i++){

//     let para = paras[i];

//     para.addEventListener('click', function(){

//         alert("you have clicked on para: "+ event.target.textContent);
//     })
//  }


//listner on div

// let paras = document.querySelectorAll('p');

// for(let i = 0 ; i<paras.length; i++){

//    let para = paras[i];

//    para.addEventListener('click', function(){

//        alert("you have clicked on para: "+ event.target.textContent);
//    })
// }

function alertpara(event){

    if(event.target.nodeName === 'SPAN'){//only alert on span 

    alert("you have clicked on "+ event.target.textContent);
    }
}

let mydiv = document.getElementById('mydiv');

document.addEventListener('click',alertpara);