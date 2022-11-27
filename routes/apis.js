const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Mod = require('../models/api')



//GET ALL DATA
router.get('/', async(req,res) => {
    try{
           const resposne = await Mod.find();
           res.json(resposne)
    }catch(err){
        res.send('Error ' + err)
    }
})



//ADD USER DATA
router.post('/add', async(req,res) => {
    const response = new Mod({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })

    try{
        const a1 =  await response.save() 
        res.json(a1)
    }catch(err){
        res.send( err)
    }
})

module.exports = router