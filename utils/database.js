import mongoose from "mongoose";

let isConnected= false;

export const connectToDB = async ()=>{
    mongoose.set("strictQuery", true);

    if(isConnected){

    console.log("Mongodb is Already Connected");
    return;
    }
    try {
       await mongoose.connect(process.env.MONGODB_URI,{
        dbName:"share_prompt",
        useNewUrlParser:true,
        UseUnifiedTopology:true,
       }) 
       isConnected=true;

       console.log("Mongodb connected")
    } catch (error) {
        console.log(error);

    
    }
}