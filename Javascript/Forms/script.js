
let form  = document.querySelector('form')
let email = document.querySelector('#email')
let password = document.querySelector('#password')

form.addEventListener('submit',function(elem){

        elem.preventDefault();
        document.querySelector('#emailMsg').textContent = '';
        document.querySelector('#passwordMsg').textContent = '';
        

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let emailans = emailRegex.test(email.value);

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        let passwordans = passwordRegex.test(password.value);

        let final = true;

        if(!emailans){

            document.querySelector('#emailMsg').textContent = 'Not a valid Email';
            document.querySelector('#emailMsg').style.display = 'initial';
            final=false;
        }

        if(!passwordans){

            document.querySelector('#passwordMsg').textContent = 'Not a valid Password';
            document.querySelector('#passwordMsg').style.display = 'initial';
            final = false;

        }
          
        if(final){

            document.querySelector('#finalmsg').textContent = 'Everything is fine'
           
        }
})