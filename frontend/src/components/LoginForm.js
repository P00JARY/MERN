import React, {useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import '../css/simple.css'


import axios from "axios";

function LoginForm() {

    const navigate=useNavigate();

    const[data,setdata]=useState({
        email:"",
        password:""
    });

    const handle=(e)=>{
        const newdata={...data}
        newdata[e.target.id]=e.target.value;
        setdata(newdata)
        console.log(newdata)
    }
    const[errordata,seterror]=useState({
        email:"",
        password:""
    })
  async function Login() {
      if (data.email.length === 0) {
          seterror((prevState) => {
              return {...prevState, email: "Enter the email !"}
          })
      } else {
          seterror((prevState) => {
              return {...prevState, email: ""}
          })
      }
      if (data.password.length === 0) {
          seterror((prevState) => {
              return {...prevState, password: "Enter the password !"}
          })
      } else {
          seterror((prevState) => {
              return {...prevState, password: ""}
          })
      }
      const url = "http://localhost:5000/signin"

      if(data.email.length>0&&data.password.length>0){
          console.log("inside axios")
          console.log(data.email)
          console.log(data.password)
         localStorage.setItem('user','prakruthiadmin@gmail.com');
         localStorage.setItem('userToken',data.email);
         localStorage.setItem('pass','admin');

          axios.post(url,{
              email:data.email,
              cpassword:data.password
          }).then((res)=>{
              console.log("data from server")
              const userdata=res.data;
              console.log(userdata)
              const info=localStorage.getItem('user')
              localStorage.setItem('userToken',userdata.email);
              console.log(localStorage.getItem("userToken"))
              if(userdata.length>1){
                  navigate('/admin')
              }else{
                  if (res.data.loggedIn) {
                       localStorage.setItem('userToken',data.email)
                      console.log("rootuser :" + info)
                      navigate('/MyProfile')
                  }else{
                      seterror((prevState)=>{
                          return  {...prevState,password:"Credentials do not match "}
                      })
                  }
              }
              }).catch(err=>{
                  console.log("error",err)
              })
      }





  }
  return (
      <>

      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
          <div className="container h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                  <div className="col-lg-12 col-xl-11">
                      <div className="card text-black" style={{ borderRadius: 25 }}>
                          <div className="card-body p-md-5">
                              <div className="row justify-content-center">
                                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                                          Login
                                      </p>
                                      <form className="mx-1 mx-md-4">
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
                                                  <span>{errordata.email}</span>

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
                                                  <span>{errordata.password}</span>

                                              </div>

                                          </div>



                                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                              <button onClick={Login} type="button" className="btn btn-primary btn-lg">
                                                  login
                                              </button>

                                          </div>
                                          <div className="d-flex justify-content-center">
                                              <NavLink to={'/registration'}>new here  !</NavLink>

                                          </div>
                                          <div className="d-flex justify-content-center">
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
      </>
  );
}

export default LoginForm;
