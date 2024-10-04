import mongoose from "mongoose";

mongoose.connect(process.env.url,{
    
})
export const connect=async()=>{
   await mongoose.connect(process.env.url)
}