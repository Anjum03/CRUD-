const mongoose = require('mongoose');
const user = require('../models/userSchema');
const express = require('express');
const router = express.Router();

//to add or post the data --------->body

router.post('/', async(req,res)=>{
    console.log(req.body);
    const {name,email} = req.body;
    if(!name || !email){
        res.status(404).json(`plz fill the data`);
    }
    try{

        const preuser = await user.findOne({email:email});
        console.log(preuser);

        if(preuser){
            res.status(404).json(`This user is already present`)
        }
        else{
            const adduser = new user({
                name,email
            })
            
            await adduser.save();
            res.status(201).json(adduser);
            console.log(adduser);
        }
    }
    catch(error){
        res.status(404).json(error)
        console.log(error);
        res.status(500).json({
            error:error
        })
    }
})

// get userdata------------>params

router.get('/getdata', async(req,res)=>{
    try{
        const userdata = await user.find();
        res.status(201).json(userdata)
        console.log(userdata);
    }
    catch(error){
        res.status(404).json(error);
    }
})


//get by id
router.get('/getdata/:id',async(req,res)=>{
    try {
        console.log(req.params)
        const {id} = req.params;
        const userId = await user.findById({_id:id});
        res.status(201).json(userId)

    } catch (error) {
        res.status(404).json(error)
    }
})

//to update data
router.put('/updatedata/:id',async(req,res)=>{
    try {
        console.log(req.params)
        const {id} = req.params;
        const updateuser = await user.findByIdAndUpdate(id,req.body,{
            new: true
        });
        console.log(updateuser)
        res.status(201).json(updateuser)

    } catch (error) {
        res.status(404).json(error)
    }
})


//tto delete data
router.delete('/deletedata/:id',async(req,res)=>{
    try {
        console.log(req.params)
        const {id} = req.params;
        const deleteuser = await user.findByIdAndDelete({_id:id})
        console.log(deleteuser)
        res.status(201).json(deleteuser)

    } catch (error) {
        res.status(404).json(error)
    }
})

module.exports = router;