import mongoose from 'mongoose'
import express from 'express';
const connection= async(url)=>{
    
    try{
   await mongoose.connect(url,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify:false
       
   })
   console.log("successfully connected to database")
    }
   catch(error)
   {
console.log(`error while connecting to mongodb ${error.message}`)
   }

}
export default connection
