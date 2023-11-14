const mongoose =require("mongoose")

const userSchema=mongoose.Schema({
    
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})


const UserLogin=mongoose.model("userLogin",userSchema)

module.exports=UserLogin