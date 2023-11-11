const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserLogin = require("../model/usermodel");
const UserRegister = require("../model/registermodel");
const sycret_key = "bsb";

const register = async (req, res) => {
  const data =await req.body;
  console.log(data);

  // Use await to wait for the promise to resolve
  const details = await UserRegister.findOne({ email: `${data.email}` });

  if (details) {
    res.send({ msg: "user already registered with this email" });


  }

  const hashpassword = bcrypt.hashSync(data.password, 10);
  console.log(hashpassword);

  const tempObj = {
    email: data.email,
    password: hashpassword,
  };

  const response = UserRegister.create(tempObj);
  console.log(response);

  const token = jwt.sign({ email: data.email }, sycret_key, { expiresIn: "1y" });
  console.log(token);

  return res.send({
    msg: "user registered successfully",
    token: token,
  });
};

const login = (req, res) => {
  const data = req.body;
  const details = UserRegister.findOne((item) => {
    if (item.email === data.email) {
      return item;
    }
  });

  if (details) {
    const validate = bcrypt.compareSync(data.password, details.password);
    if (validate) {
      const token = jwt.sign({ email: data.email }, sycret_key, { expiresIn: "1y" });
      return res.send({
        msg: "user logged in successfully",
        token: token,
      });
    } else {
      return res.send({
        msg: "password is wrong",
      });
    }
  }
  return res.send({
    msg: "email wrong",
  });
};

module.exports = { login, register };
