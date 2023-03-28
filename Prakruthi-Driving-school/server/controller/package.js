const Package=require('../model/packageschema')

const newPackage=async (req,res)=>{
    console.log(req)
    const{packageValue,price}=req.body;
    try{

        const package =new Package({packageValue,price});
        const newPackage=await package.save();
        console.log(newPackage);
        if(newPackage){
            res.status(200).json({message:'package added !'});

        }else{
            res.status(400).json({message:'Failed to  add !'});
        }

    }catch(err){console.log(err);}
}

module.exports=newPackage;