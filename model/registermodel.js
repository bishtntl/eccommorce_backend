// const mongoose =require("mongoose")

// const userSchema=mongoose.Schema({

  
    // name : {
    //     type:String,
    //     required:true
    // },
    // email : {
    //     type:String,
    //     required:true,
    //     unique:true
    // },
    // phone : {
    //     type:Number,
    //     required:true,
    //     unique:true
    // },
    // password : {
    //     type:String,
    //     required:true
    // }
// })





// const UserRegister=mongoose.model("UserRegister",userSchema)

// module.exports=UserRegister











const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,"name is required"],
        unique:true,
    },
    email: {
        type: String,
        required: [true,"enter your email"],
        unique: true,
        trim: true,
        lowercase: true,
    },
    phone: {
        type: String,
        required:[ true,"enter your number"],
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: [true,"enter your password"],
        minlength: 6
    },
});



const UserRegister = mongoose.model("UserRegister", userSchema);

module.exports = UserRegister;
