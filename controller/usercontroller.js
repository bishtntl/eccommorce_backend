const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const UserLogin = require("../model/usermodel");
const UserRegister = require("../model/registermodel");
const sycret_key = "bsb";

const register = async (req, res) => {
  // const mobileno=req.body.phone
  // console.log("7500654236>>>..................",req.body.phone)
  const data = req.body;
  console.log(data)
  // Use await to wait for the promise to resolve
  
    const details = await UserRegister.findOne({ email:data.email });
    // `${data.email}`
    // `${data.email}`
    if (details) {
      res.send({ msg: "user already registered with this email" });
    }
    const hashpassword = bcrypt.hashSync(data.password, 10);
    console.log(hashpassword);
    const tempObj = {
      email: data.email,
      password: hashpassword,
      name:data.name,
      phone:data.phone
    };
    const response =await UserRegister.create(tempObj);
    console.log(response);
    const token = jwt.sign({ email: data.email }, sycret_key, { expiresIn: "1y" });
    console.log(token);
    // localStorage.setItem("token",token)
    return res.send({
      msg: "user registered successfully",
      token: token,
    });
  
  
  
};
const login = async(req, res) => {
  const data = req.body;
  if(req.body.password && req.body.email){
    const details =await UserRegister.findOne({email:`${data.email}`});

    if (details) {
      const validate = bcrypt.compareSync(data.password, details.password);
      if (validate) {
        const token = jwt.sign({ email: data.email }, sycret_key, { expiresIn: "1y" },(err)=>{
          if(err){
            res.send("jwt token error")
          }
        });
        return res.send({
          msg: "user logged in successfully",
          token: token,
          name:details.name
        });
      } else {
        return res.send({
          msg: "password is wrong",
        });
      }
    }
  }
  
  return res.send({
    msg: "data not found",
  });
};

// const home=((req,res)=>{
//   res.send("this is home page")
// })




// const register=async(req,res)=>{
//    const details=await UserRegister.findOne({email:req.body.email})
//    if(details){
//    return res.send({
//       msg:"user is already regiter this mail"
//     })
//    }
//    details= new UserRegister({
//      name:req.body.name,
//      email:req.body.email,
//      password:bcrypt.hash(req.body.password,10)

//   }).save()
//   const token = jwt.sign({ email: data.email }, sycret_key, { expiresIn: "1y" })
//   console.log(token)
//   res.send({
//     msg:"user regiter successfully",
//     token:token
//   })
// }


// const login=async (req,res)=>{
//         if(req.body.email && req.body.password){
//           let user=await UserRegister.findOne(req.body).select("-password")
//           if(user){
//            const token= jwt.sign({email:user.email},sycret_key,{expiresIn:"1y"},(err)=>console.log(err,"token expired"))
//            console.log(token);
//             req.send({msg:"user login successfully",
//             token:token})
//           }else{
//             res.send("something went wrong")
//           }
//         }
//         else{
//           res.send({msg:"email is wrong"})
//         }
// }
module.exports = { login, register };