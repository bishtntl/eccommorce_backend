const express=require("express")
const blogRouter=require("./route/blogroute")
const app=express()
const cors=require("cors")
const port=4040


app.use(cors({
    origin:"*"
}))
app.use("/api",blogRouter)
app.listen(port,()=>{
    try{
        console.log("server is runnig")
    }
    catch(err){
        console.log(err,"error")
    }
})