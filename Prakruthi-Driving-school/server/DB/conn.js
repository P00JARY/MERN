
const dotenv=require("dotenv")
const mongoose=require('mongoose')

dotenv.config({path:'./config.env'});

const mongoDB=process.env.DATABASE;

mongoose.connect(mongoDB).then(()=>{
    console.log('connection done ');
}).catch(()=>{
    console.log('Connection failed');
})