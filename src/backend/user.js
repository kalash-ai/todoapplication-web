
const express = require('express')
const mongoose = require ('mongoose')
const { connectingtodatabase, User } = require('./db/user.db');
const app = express()
app.use(express.json())


// CONNECTING TO DATABSE
connectingtodatabase()
.then(()=>{
  console.log("Connection successful")
}).catch((Error)=>{
  console.log("Some problem occured", Error)
})


// route 
app.post('/signup',async (req,res)=>{
   
      const Name = req.body.Name
      const username = req.body.username
      const email = req.body.email
      const password = req.body.password
       const newUser = await User.create({
       Name,
       username,
       email,
       password
          
      })
      if(!newUser){
        res.json({message : "user Creation failed"})
        
     }
      res.json({message : "New User created"})
      console.log("New User Created Successfully")
     
   
 })
 app.post('/todo', async (req,res)=>{
    const { title, description} = req.body
    
      
      const newTasks = {
          title ,
          description
        }    
        const addingtodo  = User.todo.push(newTasks)
        await User.save()
        if(addingtodo){
            return res.json({ message: `Task added for user`});
        }
        else{

        res.json({message : "couldnot push"})
        }
    })
      
      app.listen(3000, ()=>{
          console.log("Server Started")
        })

       
    
    
