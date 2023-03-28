
const User = require("../model/userSchema");
const bcrypt = require("bcryptjs");
const Myprofile=async (req,res)=> {

        console.log("hello from controller Myprofile")
        const email = req.body.email;
        console.log(email);
        try {
                const data = await User.findOne({email: email});
                if (!data) {
                        console.log(data);
                        res.status(400).json({error: 'Invalid Credentials 23'})
                } else {
                        res.status(200).json(data)
                }

        }catch (err){
                res.status(400).json({error:err})
        }
        // res.send({body:userdata});
        // res.send(req.rootUser);


}


module.exports=Myprofile;