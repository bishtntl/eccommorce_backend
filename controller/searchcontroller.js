const productColletion = require("../model/productmodel");
const searchapi = async (req, res) => {
  const result = await productColletion.find({
    $or: [
        { name: { $regex: `.*${req.params.key}*.`,$options:"i" } },
        { category: { $regex: `.*${req.params.key}*.`,$options:"i" } },
        
    ],
  });
  res.send(result);
};

module.exports = searchapi;
