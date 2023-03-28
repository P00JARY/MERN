


const AdminPage=(req,res)=>{
    console.log(req.body)
    const{email,pass}=req.body;
    console.log(email)
    console.log(pass)
    if(!email||!pass){
        res.status(401).json({error:'ERROR in Admin!'})
    }
    res.status(200).json(req.body);
}
module.exports=AdminPage;