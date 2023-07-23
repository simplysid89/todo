# todo
a basic to do list web app to learn the basics of javascipt and MERN
with basic create read update delete CRUD functionalities

1.Intialization(considering node already installed)
 -"npm init -y" into backend directory which creates a package.json file to manage dependencies
 - install dependecies like express mongodb
**2.Express app setup**
*2.1)installing express*
 -create a server.js file in the backend folder
 -import or 'require' the express module 
 -start express app istance 'express()'
 -listen for request with app.listen(port,()=>{ console.log('livee')})
 -node server.js to run the file

 *2.2)nodemon*
 -install nodemon "npm install -g nodemon"
 -unlike node it will restart the server automatically if changes are created
 -optional=> you can change the script for nodemon <filename> in the package.json file by adding a new script as "dev" : "nodemon server.js"
 -this will allow you to run the file with "npm run dev"
 -install 'dotenv'
 -use .env file to store enviornment variables like port number and mongodb url
 -import dotenv in the server.js file and use the .config() method "require('dotenv').config()" 
 

*2.3)react to request + Express router*
 - in order to react to request we have to set route handlers
 - a route handler is a function that reacts to Http requests like GET, PUT, POST etc
 - first set up the get() route handler
 -app.get('/',(res,req)=>{
    res.send('hello') or res.json({mssg:"hello"})
 })
 - when a user visits the root url '/', this sends a get request to this url ie server, which will trigger the callback function (req,res)=>{}
 - the callback function takes in the type of request and a response object to send a msg
*2.4) API endpoints for todo app*
 - for our app(CRUD) we need the following endpoints
  1)Create a new task= POST
    - /todos
    - creates a new task item
  2)Read all tasks=GET
    -/todos
    - fetch all existing lists of tasks
  3)Read specific task =GET
    -/todos/:id
    -fetch a task with an id 
  4)Update a specific task=PATCH
    -/todos/:id
    -update a single task partially
  5) Delete a specific task=DELETE
    -/todos/:id
    -delete a task with an id
 - we can do this in the main server.js itself but it will be messy
 -to make it modular we can use the Express router
 -create a new folder routes and todos.js file to store all our routes which will keep the server.js file clean
 - create a router from the Router() method of express "const router = express.Router()". Now create any route handler like "router.get('/',()=>{})"
 - export it with "module.exports=router"

*2.5)Mongodb and mongoose*
 -open atlas and go to database 
 -click on connect, connect with native drivers. Copy the uri. Store it in the env file as MONGO_URI= copied uri
 -install mongoose and require('mongoose') in server.js
 -mongoose id an ODM lib, allows us to write methods to read and write objects, declare models and schemas
 -also mongoose helps to connect with the db inside the server
 -use the .connect() method "mongoose.connect(process.env.MONGO_URI)" to connect to the db
 -its asynchronus in nature and will return a promise
 -use .then() and .catch() to check if its complete or if any errors
 -if there is an error ".catch((error)=>{console.log(error)})" happens if uri is wrong or incorrect auth
 -**we dont want to start listening to requests before connecting to the db**, so we can move our app.listen() method inside the .then() method, so that we can start listening for req only after the db is connected
 - mongoose.connect(process.env.MONGO_URI)
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
 




