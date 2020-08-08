const express = require('express')
const router = express.Router()
const path = require('path')
const onelaptop = require('../models/laptopdata')


router.get('/',async (req,res)=>{
    try{
        const laptops = await onelaptop.find()
        res.sendFile(path.join(__dirname + '/../views/example.html'))
    }catch(error){
        res.send(error)
    }
})

router.get('/:id',async (req,res)=>{
    try{
        const laptops = await onelaptop.findById(req.params.id)
        res.json(laptops)
        
    }catch(err){
        res.send(err)
    }
})


router.post('/',async(req,res)=>{
    const newlaptop = new onelaptop({
        brand: req.body.brand,
        processor: req.body.processor,
        instock:req.body.instock
    })
    try{
        const l1 = await newlaptop.save()
        res.json(l1)
    }catch(err){
        res.send( err)
    }
})

router.patch('/:id', async(req,res)=>{
    try{
        const laptop = await onelaptop.findById(req.params.id)
        laptop.instock = req.body.instock
        const l1 = await laptop.save()
        res.json(l1)
    }catch(err){
        res.send(err)
    }
})

router.delete('/:id',async(req,res)=>{
    try{
        const laptop = await onelaptop.findById(req.params.id) //another method: use findbyIdandDelete
        const l1 = laptop.deleteOne()
        res.send(l1)
    }catch(err){
        res.send(err)
    }
})


module.exports = router  //so that the router module can be accessed in other files as well