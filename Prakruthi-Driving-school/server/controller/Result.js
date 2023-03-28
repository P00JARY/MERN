const User = require("../model/userSchema");


const Result=async (req,res)=>{
    console.log("inside result")
    const{email,result}=req.body;
    console.log(email)
    console.log(result)

    await User.findOneAndUpdate({email:email},{result:result}).then((data)=>{
        // console.log(data)
        return res.status(200).json(data);
    }).catch(err=>{
        return res.status(400).json({error:"result not updated :"+err})
    })
}

module.exports=Result;