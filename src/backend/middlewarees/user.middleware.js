const express = require('express')


const app = express()
app.use(express.json())
function userMiddleware(req,res,next){

    const username = req.headers.username 
    const password= req.headers.password
    
    const findingUser = User.findOne({
        username : username ,
        password : password
    })
    if(!findingUser){
        res.json({message:" User with the Folllowing Name does not Exist"})
        console.log("User not found")
    }
}
module.exports  = userMiddleware