
const mongoose=require("mongoose")

const productSchema=mongoose.Schema(
    {
        name:String,
        id:Number,
        price:Number,
        category:String,
        heading:String,
        image:String,
        images:String,
        imagess:String,
        para:String

    }


  
)
const productColletion=mongoose.model("productColletion",productSchema)

module.exports= productColletion;