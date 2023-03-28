const express=require('express')

const dotenv=require("dotenv");
const { json } = require('express');
const router=express.Router();
require('../DB/conn')
const User=require('../model/userSchema');
const Authenticate=require('../middleware/Authenticate');

const myprofile = require('../controller/myprofile');
const newRegister = require('../controller/register');
const userSignin = require('../controller/userSignin');
const AdminPage=require('../controller/adminPage')
const Attendance=require('../controller/attendance')
const Result=require('../controller/Result')
const newPackage=require('../controller/package')
const Allpackages=require('../controller/allPackages')


// router.get('/admin',adminPage)
router.post('/myprofile',myprofile)

router.post('/newpackage',newPackage)
router.get('/allPackages',Allpackages)

router.post('/register',newRegister);
router.post('/admin',AdminPage);


router.post('/attendance',Attendance);

router.post('/result',Result);



router.post('/signin',Authenticate,userSignin)




module.exports=router;