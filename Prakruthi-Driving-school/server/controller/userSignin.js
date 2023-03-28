const User = require("../model/userSchema");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const dotenv = require("dotenv")
dotenv.config({path: './config.env'});
const ADMIN = process.env.ADMIN;
const PASS = process.env.PASS;


const userSignin = async (req, res) => {


    const {email, cpassword} = req.body;

    // console.log(email);
    // console.log(cpassword);

    if (!email || !cpassword) {
        return res.status(400).json({error: 'Enter the data !'})
    }
    if (email === ADMIN && cpassword === PASS) {
        try {
            console.log("hello admin 123322213")
            const data = await User.find({});
            // console.log(data)
            if (data) {
                return res.status(200).json(data);
            } else {
                return res.status(422).json({error: 'Not Found !'})
            }
        } catch (err) {
            console.log(err)
        }
    } else {

        const data = await User.findOne({email: email})
        if (data) {
            return res.status(200).json({
                loggedIn: true,
                data: data
            })
        } else {
            return res.status(200).json({
                loggedIn: false,
            })
        }
    }


}
module.exports = userSignin;