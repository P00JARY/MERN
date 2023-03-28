const express=require('express')
const cors = require('cors');

const dotenv=require("dotenv")
dotenv.config({path:'./config.env'});
const PORT=process.env.PORT;


const app=express();
app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}));

// require('./DB/conn')
// // const user=require('./model/userSchema')

app.use(express.json())

app.use(require('./Router/auth'))

app.listen(PORT,()=>{
    console.log("server is running in port :"+PORT);
})