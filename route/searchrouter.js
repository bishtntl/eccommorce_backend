const searchapi=require("../controller/searchcontroller")
const searchroute=require("express").Router()
searchroute.get("/search/:key",searchapi)

module.exports=searchroute