const express= require('express')
const mongoose=require('mongoose')
const todoroutes=require('./routes/todos')
require('dotenv').config()
//start the express app instance
const app=express()

//route handlers
app.use('/api/todos',todoroutes)

//connect to mongo
mongoose.connect(process.env.MONGO_URI)
 .then(()=>{
    
const port= process.env.PORT
//listen for requests certain port number
app.listen(port, ()=>{
    console.log("ok we are live on port 4000!!")
})
 })
 .catch((error)=>{
    console.log(error)
 })
 

