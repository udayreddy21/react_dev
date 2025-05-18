const express =require('express');
const {getUser,createUser} =require('./mongoClient');
const app = express();

app.use(express.json())

app.post('/mongo/save',async (req,res)=>{
    if(!req.body){
        res.status(400).send("Invalid Body");
    }
    const {name,mobile} = req.body;
    const result =await createUser(name,mobile);
    console.log(result)
    if(!result){
        return res.status(404).send('No data found')
    }
    res.status(200).json(result);
})

app.get('/mongo/all',async (req,res)=>{
    const result= await getUser();
    console.log(result)
    
    if(!result){
        return res.status(404).send('No data found')
    }
    res.status(200).json(result);
})

app.listen('8080',()=>{
    console.log('server is up')
})