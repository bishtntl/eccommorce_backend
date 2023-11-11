const mongoose =require("mongoose")

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobileno:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})





const UserRegister=mongoose.model("UserRegister",userSchema)

module.exports=UserRegister