let progress = document.querySelector('.progress')
let count = 0;
let percent = document.querySelector('#percent');
let status = document.querySelector('.status');

    progress.style.width = `${20}%`;

   let c =  setInterval(function(){

        if(count<=99){

            count++;
            progress.style.width = `${count}%`;
            percent.textContent = `${count}%`
            

        }
        else{
              status.textContent = 'Download Completed'
            clearInterval(c)
        }

    },5000/100)

let sp = document.querySelector('#sp')

    setTimeout(function(){

        sp.style.display = 'none'

    },3000)