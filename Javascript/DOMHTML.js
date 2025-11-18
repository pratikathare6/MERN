// document.getElementById('fpara');
// document.getElementsByClassName('fpara');
// document.getElementsByTagName('fpara');
// document.querySelectorAll('#fpara');


// let elem = document.querySelector('#fpara');

// let fheading = document.createElement('h1');

// fheading.textContent='hello ji';

// let bodyTag  = document.querySelector('body');

// bodyTag.appendChild(fheading);

// let mydiv = document.querySelector('#mydiv');
// let newelement = document.createElement('span');
// newelement.textContent='my name is john'
// mydiv.insertAdjacentHTML('beforebegin', newelement);
// mydiv.insertAdjacentele('beforebegin', newelement);
// mydiv.insertAdjacentElement('beforebegin', newelement);
// let bodyTag  = document.querySelector('body');
// bodyTag.appendChild(fheading);


let parent = document.querySelector('#mydiv');
let child = document.querySelector('#p1');

// parent.removeChild(child);

let parentofch = child.parentElement;

console.log(parentofch);
