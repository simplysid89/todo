const express= require('express')
const router = express.Router()

//Read all tasks=GET
router.get('/',(req,res)=>{
    res.send('Get all tasks')
})

//Read specific task =GET
router.get('/:id',(req,res)=>{
    res.send('Get single task')
})

//Create a new task= POST
router.post('/',(req,res)=>{
    res.send('create a new task')
})

//Update a specific task=PATCH
router.patch('/:id',(req,res)=>{
    res.send('update the task')
})

//Delete a specific task=DELETE
router.delete('/:id',(req,res)=>{
    res.send('delete the task')
})





module.exports=router