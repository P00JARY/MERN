
const bcrypt=require('bcryptjs')
const Authenticate=async (req,res,next)=>{
    console.log("inside middleware")
    next();
}

module.exports=Authenticate;