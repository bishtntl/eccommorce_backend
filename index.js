const express=require("express")
const blogRouter=require("./route/blogroute")
const productRoute=require("./route/procductRote")
const app=express()
const cors=require("cors")
const  connection  = require("./config/db")
const routeone = require("./route/userrouter")
const port=4040


app.use(cors({
    origin:"*"
}))

app.use(express.json())
app.use("/api",routeone)
app.use("/api",productRoute)
app.use("/api",blogRouter)
app.listen(port,async()=>{
    try{
        await connection()
        console.log("server is runnig")
    }
    catch(err){
        console.log(err,"error")
    }
})