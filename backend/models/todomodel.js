const mongoose=require('mongoose')


const Schema=mongoose.Schema

//creating new schema 
const taskschema=new Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
    },
    status:{
        type: Boolean,
        default: false,
    },
},{timestamps:true})

module.exports=mongoose.model('Task',taskschema)