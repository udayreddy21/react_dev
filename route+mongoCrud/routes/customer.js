const express = require('express');
const Joi=require('joi');
const mongoose = require('mongoose');
const router= express.Router();
const Customer = mongoose.model('customer',{
    name:{
        type:String,
        required:true,
        minlength: 3,
        maxlength: 10
    },
    isGold:{
        type:Boolean,
        default:true
    },
    phone:{
        type:String,
        required:true,
        validate:{
            validator:function(v){
                return v.length===10 
            },
            message:'phone should be 10 digits'
        },
        
    }
})


router.get('/:id',async(req,res)=>{
    const response =await Customer.findById(req.params.id); 
      if (!response) return res.status(404).send('The genre with the given ID was not found.');
    res.status(200).send(response);
})

router.post('/',async(req,res)=>{
    try{
    const customer = new Customer({name:req.body.name,isGold:req.body.isGold,phone:req.body.phone
    })
    const result = await customer.save()
      if (!result) return res.status(404).send('The genre with the given ID was not found.');
    res.status(200).send(result);
}
catch(err){
    console.log(err)
    res.status(400).send(err)
}
})

router.put('/:id',async(req,res)=>{
    const response =await Customer.findByIdAndUpdate(req.params.id,{
        name:req.body.name,isGold:req.body.isGold,phone:req.body.phone
    },{new:true})
      if (!response) return res.status(404).send('The genre with the given ID was not found.');
    res.status(200).send(response);
})

router.delete('/:id',async(req,res)=>{
    const response = await Customer.findByIdAndDelete(req.params.id);
      if (!response) return res.status(404).send('The genre with the given ID was not found.');
    res.status(200).send(response);
})



module.exports=router;
