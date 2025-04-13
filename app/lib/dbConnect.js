import mongoose from "mongoose";

const dbConnect=async()=>{
    try {
        if (mongoose.connection.readyState >= 1) return;
        await mongoose.connect(process.env.MONGODB_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to MongoDB😎");
    }
     catch (error) {
        
        console.error("Error connecting to MongoDB😥:", error);
    }
}

export default dbConnect;

