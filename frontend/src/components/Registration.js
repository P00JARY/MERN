import React, {useState} from 'react'
import Axios from 'axios'
import {NavLink, useNavigate} from "react-router-dom";

function Registration() {
    const navigate=useNavigate();

    const url = "http://localhost:5000/Register"
    const [data, setData] = useState({
        name:"",
        gender:"",
        email: "",
        phone:"",
        password: "",
        confirmPassword: "",
        address:"",
        DOB:"",
        package:""
    })
    const [dataError, setDataError] = useState({
        name:"",
        gender:"",
        email: "",
        phone:"",
        password: "",
        confirmPassword: "",
        address:"",
        DOB:"",
        package:""
    })
    // const navigate = useNavigate()

    const handle = (e) => {
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

    function submit() {
        console.log("heiieiei")

        if (data.name.length === 0) {
            setDataError((prevState) => {
                return {...prevState, name: "Name cant be empty"}
            })
        } else {
            setDataError((prevState) => {
                return {...prevState, name: ""}
            })
        }


        if (data.gender.length === 0) {
            setDataError((prevState) => {
                return {...prevState, email: "cant be empty"}
            })
        } else {
            setDataError((prevState) => {
                return {...prevState, gender: ""}
            })
        }

        if (data.email.length === 0) {
            setDataError((prevState) => {
                return {...prevState, email: "Email cant be empty"}
            })
        } else {
            setDataError((prevState) => {
                return {...prevState, email: ""}
            })
        }

        if (data.phone.length <10||data.phone.length >10) {
            setDataError((prevState) => {
                return {...prevState, phone: "Error ! Enter Phone number correctly !"}
            })
        } else {
            setDataError((prevState) => {
                return {...prevState, phone: ""}
            })
        }



        if (data.password.length === 0){
            setDataError((prevState)=>{
                return {...prevState,password: "Password cant be empty"}
            })
        }else{
            setDataError((prevState )=>{
                return{...prevState,password: ""}
            })
        }


        if(data.confirmPassword!==data.password){
            setDataError((prevState)=>{
                return{...prevState,confirmPassword: "Password dose not match!"}
            })
        }else {
            setDataError((prevState)=>{
                return{...prevState,confirmPassword: ""}
            })
        }

        if (data.address.length === 0){
            setDataError((prevState)=>{
                return {...prevState,password: " cant be empty"}
            })
        }else{
            setDataError((prevState )=>{
                return{...prevState,address: ""}
            })
        }
        if (data.DOB.length === 0){
            setDataError((prevState)=>{
                return {...prevState,password: " cant be empty"}
            })
        }else{
            setDataError((prevState )=>{
                return{...prevState,DOB: ""}
            })
        }

        if (data.package.length === 0){
            setDataError((prevState)=>{
                return {...prevState,password: " cant be empty"}
            })
        }else{
            setDataError((prevState )=>{
                return{...prevState,package: ""}
            })
        }

            if (data.password === data.confirmPassword) {
                Axios.post(url, {
                    name:data.name,
                    gender:data.gender,
                    email: data.email,
                    cpassword: data.confirmPassword,
                    phone:data.phone,
                    address: data.address,
                    DOB: data.DOB,
                    package: data.package,

                }).then(res => {
                    console.log(res.data)
                    if(res.status===200){
                        navigate('/login')
                    }

                }).catch((err) => {
                    setDataError((prevState) => {
                        return {...prevState, username: err["response"]["data"].error}
                    })
                })
            }

            }

    return (
                <section className="vh-100" style={{ backgroundColor: "#eee" }}>
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-lg-12 col-xl-11">
                                <div className="card text-black" style={{ borderRadius: 25 }}>
                                    <div className="card-body p-md-5">
                                        <div className="row justify-content-center">
                                            <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                                                    Sign up
                                                </p>
                                                <form className="mx-1 mx-md-4">
                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fas fa-user fa-lg me-3 fa-fw" />
                                                        <div className="form-outline flex-fill mb-0">
                                                            <label className="form-label" htmlFor="form3Example1c">
                                                                Your Name
                                                            </label>
                                                            <input
                                                                onChange={(e)=>{handle(e)}}
                                                                value={data.name}
                                                                type="text"
                                                                id="name"
                                                                className="form-control"
                                                            />
                                                            <span>{dataError.name}</span>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fas fa-user fa-lg me-3 fa-fw" />
                                                        <div className="form-outline flex-fill mb-0">
                                                            <label className="form-label" htmlFor="form3Example1c">
                                                                Gender
                                                            </label>
                                                            <select
                                                                id="gender"
                                                                value={data.gender}
                                                                onChange={(event) => handle(event)}
                                                                className="form-control"
                                                            >
                                                                <option value="">-- Select  --</option>
                                                                <option value="male">male</option>
                                                                <option value="female">female</option>
                                                            </select>
                                                            <span>{dataError.gender}</span>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                                                        <div className="form-outline flex-fill mb-0">
                                                            <label className="form-label" htmlFor="form3Example3c">
                                                                Your Email
                                                            </label>
                                                            <input
                                                                onChange={(e)=>{handle(e)}}
                                                                value={data.email}
                                                                type="email"
                                                                id="email"
                                                                className="form-control"
                                                            />
                                                            <span>{dataError.email}</span>

                                                        </div>
                                                    </div>

                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fas fa-lock fa-lg me-3 fa-fw" />
                                                        <div className="form-outline flex-fill mb-0">
                                                            <label className="form-label" htmlFor="form3Example4c">
                                                                Password
                                                            </label>
                                                            <input
                                                                onChange={(e)=>{handle(e)}}
                                                                value={data.password}
                                                                type="password"
                                                                id="password"
                                                                required
                                                                className="form-control"

                                                            />
                                                            <span>{dataError.password}</span>

                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fas fa-key fa-lg me-3 fa-fw" />
                                                        <div className="form-outline flex-fill mb-0">
                                                            <label className="form-label" htmlFor="form3Example4cd">
                                                                Repeat your password
                                                            </label>
                                                            <input
                                                                onChange={(e)=>{handle(e)}}
                                                                value={data.confirmPassword}
                                                                type="password"
                                                                id="confirmPassword"
                                                                className="form-control"
                                                            />
                                                            <span>{dataError.confirmPassword}</span>

                                                        </div>
                                                    </div>

                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                                                        <div className="form-outline flex-fill mb-0">
                                                            <label className="form-label" htmlFor="form3Example3c">
                                                                phone
                                                            </label>
                                                            <input
                                                                onChange={(e)=>{handle(e)}}
                                                                value={data.phone}
                                                                type="number"
                                                                id="phone"
                                                                className="form-control"
                                                            />
                                                            <span>{dataError.phone}</span>

                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                                                        <div className="form-outline flex-fill mb-0">
                                                            <label className="form-label" htmlFor="form3Example3c">
                                                                Address
                                                            </label>
                                                            <input
                                                                onChange={(e)=>{handle(e)}}
                                                                value={data.address}
                                                                type="text"
                                                                id="address"
                                                                className="form-control"
                                                            />
                                                            <span>{dataError.address}</span>

                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                                                        <div className="form-outline flex-fill mb-0">
                                                            <label className="form-label" htmlFor="form3Example3c">
                                                                Date of Birth
                                                            </label>
                                                            <input
                                                            type="date"
                                                            id="DOB"
                                                            value={data.DOB}
                                                            onChange={(e) =>{handle(e)}}
                                                            className="form-control"
                                                        />
                                                            <span>{dataError.DOB}</span>

                                                        </div>
                                                    </div>

                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                                                        <div className="form-outline flex-fill mb-0">
                                                            <label className="form-label" htmlFor="form3Example3c">
                                                                Package :
                                                            </label>
                                                            <select
                                                                id="package"
                                                                value={data.package}
                                                                onChange={(event) => handle(event)}
                                                                className="form-control"
                                                                >
                                                            <option value="">-- Select Package  --</option>
                                                            <option value="2 wheeler with gear">2 wheeler with gear</option>
                                                            <option value="2 wheeler without gear">2 wheeler without gear</option>
                                                            <option value="4 wheeler with gea">4 wheeler with gear</option>
                                                            <option value="2 wheeler and 4 wheeler">2 wheeler and 4 wheeler</option>
                                                            </select>
                                                            <span>{dataError.package}</span>

                                                        </div>
                                                    </div>

                                                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                        <button onClick={submit} type="button" className="btn btn-primary btn-lg">
                                                            Register
                                                        </button>

                                                    </div>
                                                    <div className="d-flex justify-content-center">
                                                        <NavLink to={'/login'}>already have registered !</NavLink>
                                                        <NavLink to={'/'}>Go Home  !</NavLink>
                                                    </div>
                                                </form>


                                            </div>
                                            <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                                <img
                                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                    className="img-fluid"
                                                    alt="Sample"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

    );
}


export default Registration
