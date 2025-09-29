const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect(`mongodb+srv://rahul123:TXgCSortywNIkAsl
@cluster0.6wmu0ld.mongodb.net/`)

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })



}

connectDB()

module.exports = mongoose