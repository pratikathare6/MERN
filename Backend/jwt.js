

const jwt = require('jsonwebtoken')


const secreate = 'ABCD'

let username = 'abc@123'

let token = jwt.sign(username,secreate)

console.log('this is the token ',token)

let data = jwt.verify(token,secreate);

console.log('this is the data ',data)