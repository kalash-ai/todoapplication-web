const mongoose = require('mongoose')
const express = require('express')

const connectingtodatabase = (async (req, res, next) => {

    // connectiong with database
        try {
          await mongoose.connect('mongodb+srv://kalashharode761:0H7Ivua6Ngq80p2D@cluster0.b336tct.mongodb.net/todoapplication')
          console.log("Database connected");
        } catch (error) {
          console.error("Error connecting to database:", error);
          throw new Error("Database connection failed");
        }
      })
      
    const userSchema = new mongoose.Schema({
      Name:{
        type: String,
        required: true
      },
      username: {
            type: String,
            required: true
        },
        email :{
          type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        todo: [{
            title: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            }
        }]
    })
   

const User = mongoose.model('User', userSchema)

module.exports ={
  connectingtodatabase,
  User

}
