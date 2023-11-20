
const jwt=require("jsonwebtoken")
const sycret_key="bsb"
const auth=((req,res,next)=>{
   const BearerToken= req.headers["authoriation"]
   console.log("bareer..........................",BearerToken)  
   if(BearerToken){
    const token=BearerToken.split(" ")[1]
    console.log("middleare call...........................",token)
   const validate=jwt.verify(token,sycret_key)
   if(validate){
   return next()
   }
   else{
    return res.status(401).send({msg:"password is wrong"})
   }
   }
   else{
      return res.status(403).send({
         msg:"not authorized"
        })
   }
})

module.exports=auth


















   // const token = authorization && authorization.split(" ")[1];
   // const token=BearerToken

//  let BearerToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imtsb0BnbWFpbC5jb20iLCJpYXQiOjE3MDAzMDM2OTcsImV4cCI6MTczMTg2MTI5N30.ojjyKmzc23ZPWJ7lkiwK6RNjqWXhrup5P0dx5OlCJDc";