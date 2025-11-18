// const jwt = require("jsonwebtoken");

// const data = {

//     name: "pratik athare",
//     accountnumber : "12345667890"

// };


// const data2 = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicHJhdGlrIGF0aGFyZSIsImFjY291bnRudW1iZXIiOiIxMjM0NTY2Nzg5MCIsImlhdCI6MTc1MjA3MTYxNX0.ygtifx-j0FK_6HwDl7Yv9jYKOKzFNpVBwyfve-szgrg","signature")
// console.log(data2);

// const newtoken = jwt.sign(data,"signature");

// console.log(newtoken);


//create the token
const jwt = require("jsonwebtoken");

const jwtpassword = "123456";
const zod = require("zod");

const emailschema = zod.string().email();

const passwordschema = zod.string().min(6);

function signjwt(username,password){
    const usernameresponse = emailschema.safeParse(username);
    const passwordresponse = passwordschema.safeParse(password);

        if(!usernameresponse || !passwordresponse){

            return null;
        }

        const signature = jwt.sign({

            username
        },password)

        return signature;


}


    const ans = signjwt("mailmail","asdasdadasd")
    console.log(ans);


//check if the token is decoded or not 

function decodejwt(token){

    const decoded = jwt.decode(token)

    if(decoded){

        return true;
    }
    else{

        return false;
    }
}

console.log(decodejwt("asdasda"));


//check if the token is verified

function verifyjwt(token){

    let ans = true;
    try{

         const verified = jwt.verify(token,jwtpassword)

        
    }

    catch(e){

        ans = false;

    }

    return ans; 


   
}

console.log( verifyjwt("asdSAD",jwtpassword));


