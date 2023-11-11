
const jwt=require("jsonwebtoken")
const sycret_key="bsb"
const auth=((req,res,next)=>{
   const BearerToken= req.header("authoriation")
   console.log(BearerToken)

   if(BearerToken){
    const token=BearerToken.split(" ")[1]
   const validate=jwt.verify(token,sycret_key)

   if(validate){
   return next()
   }
   else{
    return res.send({msg:"password is wrong"})
   }

   }

   return res.send({
    msg:"not authorized"
   })


})

module.exports=auth