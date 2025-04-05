

//code 1

// const t1  =performance.now();

//     for(let i =1; i<=100; i++){

//         let para = document.createElement('p');

//         para.textContent = 'this is para'+i;

//         document.body.appendChild(para);
//     }

//     const t2 = performance.now();

//     console.log('this is the performance of code 1 '+ (t1+t2));

//code 2


// const t3 = performance.now();

// let mydiv  = document.createElement('div');

//     for(let i=1;i<=100;i++)
//     {

//         let para = document.createElement('p');

//         para.textContent = 'the para'+i;
//         mydiv.appendChild(para);
//     }


// const t4 = performance.now();

// console.log('this is the performance of code 2 '+(t4-t3));

//reflow 
//it is a procedure to find position of the element that is rendering on a wepage 
//intensive process

//repaint 
//it is the process of displaying content or element of a web page 
//it is paint pixel by pixel 
//this is faster 

//if both are less then code performance is better


// document fragment 
//light weight DOM copy 



let fragment  = document.createDocumentFragment();

for(let i=1 ; i<=100; i++){

    let para = document.createElement('p');
    
    para.textContent = 'this is para '+ i;

    //no reflow no repaint 
    fragment.appendChild(para);
}

//the following line takes 1 reflow and 1 repaint
document.body.appendChild(fragment);

