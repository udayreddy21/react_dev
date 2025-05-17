const express  =  require('express');
const { default: helmet } = require('helmet');
const joi = require('joi') //to validate the data
const app = express();
const morgan =require('morgan')

//middleware that process requests before they reach the final route handler.
app.use(express.json()) //to parse json data


app.use((req,res,next)=>{
    if(req.headers['authorization'] !== '1234'){
        return res.status(401).send('Unauthorized')
    }
    console.log('Request received')
    console.log('Request method:', req.method)
    next(); //to move to the next middleware or route handler
});
//Pug is a high-performance template engine for Node.js, used to generate HTML dynamically.It uses indentation-based syntax
app.set('view engine', 'pug') //to set the view engine to pug
app.use(morgan('tiny')) //to log the requests in the console

app.get('/',(req,res)=>{
    res.render('index.pug', {title: 'Hello World', message: 'Hello World'}) 
})

app.get('/api/:name',(req,res)=>{
    const {error} = validatefields({name: req.params.name}); //destructure the error from the validatefields function
    if(error){
        return res.status(400).send(error)
    }
    if(!req.params.name){
        res.status(400).send('Bad Request')
    }
    res.status(200).send(`Hello World ${req.params.name}`)
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})

function validatefields(request){
    const schema = joi.object({
        name: joi.string().min(3).max(10).required(),
    })

    return schema.validate(request);
}