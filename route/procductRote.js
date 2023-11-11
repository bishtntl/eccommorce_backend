
const {createData,getData} = require("../controller/productcontroller")
const productRoute = require("express").Router();
productRoute.post("/createdata", createData);
productRoute.get("/getdata", getData);
module.exports = productRoute;
