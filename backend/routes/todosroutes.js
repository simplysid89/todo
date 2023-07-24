const express= require('express')
const Task=require('../models/todomodel')
const router = express.Router()

//Read all tasks=GET
router.get('/',(req,res)=>{
    res.json({mssg:'Get all tasks'})
})

//Read specific task =GET
router.get('/:id',(req,res)=>{
    res.json({mssg:'Get single task'})
})

//Create a new task= POST
router.post('/',async(req,res)=>{
    const{title,description,status}=req.body
    try{
        const task= await Task.create({title,description,status})
        res.status(200).json(task)
    }catch(error){
        res.status(400).json({error:error.message})
    }
    res.json({mssg:'create a new task'})
})

//Update a specific task=PATCH
router.patch('/:id',(req,res)=>{
    res.json({mssg:'update the task'})
})

//Delete a specific task=DELETE
router.delete('/:id',(req,res)=>{
    res.json({mssg:'delete the task'})
})





module.exports=router