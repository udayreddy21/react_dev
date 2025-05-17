const express = require('express') //class
//import express from 'express' //es6
const app = express() //object
require('dotenv').config() //to use enviroment variables


app.get('/app',(req,res)=>{
    console.log('triggered')
    res.send('Hello World')
    console.log('sent') ;
})


//http://localhost:3000/app/1/3?q=wdw
app.get('/app/:name/:year',(req,res)=>{
    console.log(req.query.q)
    res.send(`Hello World ${req.params.name}`)
})


const port = process.env.PORT || 8080 //process is a global variable in node.js
//to add PORT variable in enviroment need to use dotenv package or set PORT = 3000 in terminal
app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})


function uday(){
    console.log('uday')
}



//console.log(module)
//module.exports.u = uday
module.exports = {
    uday: uday
}
/*
Use require/module.exports for CommonJS (default in Node.js).
Use import/export and "type": "module" in package.json for ES modules.
Pick one style and use it consistently.


No { } for default exports:
imoport express from 'express
Use { } for named exports:
import { uday } from './script.js'


*/



// in express it is lightweight framweowrk and easy to use and maintain express is a web framework for node.js, featuring a robust set of features for building web and mobile applications. It facilitates the rapid development of Node-based web applications.
// it is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
// in express we can use middleware to handle the requests and responses
 //So, that's when a framework comes into the picture. A framework gives our application a proper structure, so we can easily add more routes, while keeping our application code maintainable.

