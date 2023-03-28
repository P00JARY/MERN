import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import pic1 from "../../img/courses-1.jpg";
import pic2 from "../../img/courses-2.jpg";
import pic3 from "../../img/courses-3.jpg";

function MyProfile(props) {

    const [userdata,setdata]=useState([]);
    const url = "http://localhost:5000/myprofile"
    const navigate=useNavigate()
    useEffect((req)=>{
        console.log("inside effect")
        const email=localStorage.getItem('userToken')

        console.log("email",email)
        if(!email){
            navigate('/login')
        }else{
            const val = email.trim()
            console.log(val)
            axios.post(url,{
                email:val
            }).then((res)=>{
                console.log("inside effect then")
                console.log(res.data)
                setdata(res.data)
            }).catch((err)=>{
                console.log(err)
            });
        }
    },[])



        const routeChange = () => {
        localStorage.clear()
            navigate('/Login')
        }


        return (
            <>
                <section style={{backgroundColor: "#eee"}}>
                    <div className="container py-5">
                        <div className="row">
                            <div className="col">
                                <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-5">
                                    <ol className="breadcrumb mb-0 ml-auto ">
                                        <li className="breadcrumb-item ">
                                            Prackruthi Driving school

                                        </li>
                                        <li className="breadcrumb-item ">
                                            User Page
                                        </li>
                                        <li className="breadcrumb-item" onClick={routeChange} style= {{cursor: "pointer"}}>
                                            Logout
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-4">
                                <div className="card mb-4">
                                    <div className="card-body text-center">
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                            alt="avatar"
                                            className="rounded-circle img-fluid"
                                            style={{width: 150}}
                                        />
                                        <h5 className="my-3">Student</h5>
                                        <p className="text-muted mb-1">Prakruthi Draiving School </p>
                                        <p className="text-muted mb-4">Mudipu , Kurnad , DK.</p>
                                        <div className="d-flex justify-content-center mb-2">
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-8">
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Full Name</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <p className="text-muted mb-0">{userdata.name}</p>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Email</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <p className="text-muted mb-0">{userdata.email}</p>
                                            </div>
                                        </div>
                                        <hr/>

                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Mobile</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <p className="text-muted mb-0">{userdata.phone}</p>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Address</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <p className="text-muted mb-0">{userdata.address}</p>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Gender</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <p className="text-muted mb-0">{userdata.gender}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="card mb-4 mb-md-0">
                                            <div className="card-body">
                                                <div className="col-sm-10">
                                                    <p className="mb-1 fa-bolder">My Course</p>
                                                        My Package: {userdata.package}<br/>
                                                        Total Classes:  21

                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-md-6">
                                        <div className="card mb-4 mb-md-0">
                                            <div className="card-body">


                                               Number of Classes Attended : {userdata.noClass} <br/>

                                                Remaining : {21-userdata.noClass}<br/>


                                                Result : {userdata.result}

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                <div className="container-xxl py-6">
                    <div className="container">
                        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '500px'}}>
                            <h6 className="text-primary text-uppercase mb-2">Trending Courses</h6>
                            <h1 className="display-6 mb-4">Our Courses Upskill You With Driving Training</h1>
                        </div>
                        <div className="row g-4 justify-content-center">
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="courses-item d-flex flex-column bg-light overflow-hidden h-100">
                                    <div className="text-center p-4 pt-0">
                                        <div className="d-inline-block bg-primary text-white fs-5 py-1 px-4 mb-4"> ₹3000</div>
                                        <h5 className="mb-3">Two Wheeler Driving class With/Without Gear</h5>
                                        <p>2 wheeler per day 4km ride</p>

                                        <ol className="breadcrumb justify-content-center mb-0">
                                            <li className="breadcrumb-item small"><i className="fa fa-signal text-primary me-2" />Beginner</li>
                                            <li className="breadcrumb-item small"><i className="fa fa-calendar-alt text-primary me-2" />3 Week</li>
                                        </ol>
                                    </div>
                                    <div className="position-relative mt-auto">
                                        <img className="img-fluid" src={pic1} alt="" />
                                        <div className="courses-overlay">
                                            <a className="btn btn-outline-primary border-2" href='user'>Apply</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="courses-item d-flex flex-column bg-light overflow-hidden h-100">
                                    <div className="text-center p-4 pt-0">
                                        <div className="d-inline-block bg-primary text-white fs-5 py-1 px-4 mb-4"> ₹4000</div>
                                        <h5 className="mb-3">Four Wheeler Driving class With/Without Gear</h5>
                                        <p>4 wheeler drive per day 4km ride</p>
                                        <ol className="breadcrumb justify-content-center mb-0">
                                            <li className="breadcrumb-item small"><i className="fa fa-signal text-primary me-2" />Beginner</li>
                                            <li className="breadcrumb-item small"><i className="fa fa-calendar-alt text-primary me-2" />3 Week</li>
                                        </ol>
                                    </div>
                                    <div className="position-relative mt-auto">
                                        <img className="img-fluid" src={pic2} alt="" />
                                        <div className="courses-overlay">
                                            <a className="btn btn-outline-primary border-2" href='user'>Apply</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="courses-item d-flex flex-column bg-light overflow-hidden h-100">
                                    <div className="text-center p-4 pt-0">
                                        <div className="d-inline-block bg-primary text-white fs-5 py-1 px-4 mb-4"> ₹6500</div>
                                        <h5 className="mb-3">All in one package</h5>
                                        <p>Two wheeler & Four wheeler with and without gear 4km a day</p>
                                        <ol className="breadcrumb justify-content-center mb-0">
                                            <li className="breadcrumb-item small"><i className="fa fa-signal text-primary me-2" />Beginner</li>
                                            <li className="breadcrumb-item small"><i className="fa fa-calendar-alt text-primary me-2" />3 Week</li>
                                        </ol>
                                    </div>
                                    <div className="position-relative mt-auto">
                                        <img className="img-fluid" src={pic3} alt="" />
                                        <div className="courses-overlay">
                                            <a className="btn btn-outline-primary border-2" href='user'>Apply</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
}

export default MyProfile;