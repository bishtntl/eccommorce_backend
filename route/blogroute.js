const { blogController, fashiondata, men, womenData, BeverageCoffee, BeverageTea, sportBags, premium, sportbaby, datadsport, HomeData, PearData } = require("../controller/controller");


const blogRouter =require("express").Router()


blogRouter.get('/blog',blogController)
blogRouter.get('/fashiondatas',fashiondata)
blogRouter.get("/mendress",men)
blogRouter.get("/womend ress",womenData)
blogRouter.get("/coffee",BeverageCoffee)
blogRouter.get("/tea",BeverageTea)
blogRouter.get("/sportbags",sportBags)
blogRouter.get("/premium",premium)
blogRouter.get("/toybaby",sportbaby)
blogRouter.get("/sportone",datadsport)
blogRouter.get("/home",HomeData)
blogRouter.get("/pear",PearData)


module.exports=blogRouter;

