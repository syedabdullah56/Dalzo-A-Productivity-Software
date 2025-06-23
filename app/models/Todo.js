import mongoose from "mongoose"

const TodoSchema=new mongoose.Schema({
    userId:{type:String,required:true},
    userEmail:{type:String,required:true},
    userName:{type:String,required:true},
    title:{type:String,required:true},
    description:{type:String},
    date:{type:Date,required:true},
    priority:{type:String,enum:["low","medium","high"],default:"medium"},
    status:{type:String,enum:["pending","completed"],default:"pending"}
    },
     {timestamps:true}
)
 
export default mongoose.models.Todo || mongoose.model("Todo", TodoSchema);