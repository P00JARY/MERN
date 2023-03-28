
const Package=require('../model/packageschema')

const AllPackages=async (req,res)=>{
    const allpackages=await Package.find({});
    if(allpackages){
       return  res.status(200).json(allpackages);
    }else{
      return   res.status(400).json({error:"no data found"})
    }
}
module.exports=AllPackages;