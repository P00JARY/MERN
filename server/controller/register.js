const User=require('../model/userSchema')
const newRegister=async (req,res)=>{

    const {name,gender,email,cpassword,phone,address,DOB,package}=req.body;
    console.log(req.body)
    if(!name||!email||!phone||!cpassword||!gender||!address||!DOB||!package){
       return res.json({error:"error"})
    }   
    try{
        const userExists= await User.findOne({email:email});
        if(userExists){
               return res.status(422).json({error:'user exists'})
        }
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();

        let regDate = dd + '/' + mm + '/' +  yyyy;
        console.log("date :")
        console.log(regDate)
        const user=new User({name,gender,email,cpassword,phone,address,DOB,package,regDate});
          const userRegister=await user.save();
          console.log(userRegister);
          if(userRegister){
            res.status(200).json({message:'user registered !'});
          }else{
            res.status(500).json({message:'Failed to  register !'});
          }
          
    }catch(err){console.log(err);} 
}

module.exports=newRegister;