const { login, register} = require("../controller/usercontroller")
const auth =require('../middleware/auth')



const routeone=require("express").Router()
// routeone.get("/h",auth,home)
routeone.post("/register",register)
routeone.post("/login",login)



module.exports=routeone;