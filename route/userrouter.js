const { login, register} = require("../controller/usercontroller")
const auth =require('../middleware/auth')



const routeone=require("express").Router()

routeone.post("/register",auth,register)
routeone.post("/login",auth,login)

module.exports=routeone;