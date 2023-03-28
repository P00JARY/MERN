
const mongoose=require('mongoose')


const packageschema=new mongoose.Schema({
    packageValue: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true
    }
})


const Package=mongoose.model('PACKAGE',packageschema);

module.exports= Package;

