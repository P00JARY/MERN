const User = require("../model/userSchema");

const Attendance=async (req,res)=>{
    console.log("inside att")
    const{email,noClass}=req.body;
    console.log(email)
    console.log(noClass)

    let n=parseInt(noClass)+1;

    await User.findOneAndUpdate({email:email},{noClass:n}).then((data)=>{
        // console.log(data)
        return res.status(200).json(data);
    }).catch(err=>{
        return res.status(400).json({error:"attendance not updated :"+err})
    })
}

module.exports=Attendance;