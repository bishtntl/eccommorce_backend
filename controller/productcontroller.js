const DataAll  = require("../dummy/dummy");
const productColletion = require("../model/productmodel");
const createData = async (req, res) => {
  const response = await productColletion.create(DataAll);
  res.send(response);
};
const getData = async (req, res) => {
  const result = await productColletion.find({});
  res.send(result);
};
module.exports = {
    createData,
    getData,
};