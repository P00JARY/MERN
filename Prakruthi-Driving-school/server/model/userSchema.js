const bcrypt=require('bcryptjs')
// const jwt=require('jsonwebtoken')
const mongoose=require('mongoose')


const userschema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    gender:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    cpassword:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    DOB:{
        type:String,
        require:true
    },
    package:{
        type:String,
        require:true
    },
    regDate:{
        type:String,
        require:true
    },
    noClass:{
        type:Number,
        default:0
    },
    result:{
        type:String,
        default:""
    }
})


userschema.pre('save',async function(next){

    console.log('hie from inside ! ');
    if (this.isModified('cpassword')){
        this.cpassword=await bcrypt.hash(this.cpassword, 12);
        console.log(this.cpassword);       
    }
    next();
});

const User=mongoose.model('USER',userschema);

module.exports= User;

