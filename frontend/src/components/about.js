// import "../img/"
import "../css/style.css"
import "owl.carousel"
import 'animate.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import pic1 from '../img/about-1.jpg'
import pic2 from '../img/about-2.jpg'


import React from 'react';
import {Link} from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function About() {
    return (
        <>
            <Navbar/>
            <div className="container-xxl py-6">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="position-relative overflow-hidden ps-5 pt-5 h-100" style={{minHeight: '400px'}}>
                                <img className="position-absolute w-100 h-100" src={pic1} alt="" style={{objectFit: 'cover'}}/>
                                <img className="position-absolute top-0 start-0 bg-white pe-3 pb-3" src={pic2}
                                     alt="" style={{width: '200px', height: '200px'}}/>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="h-100">
                                <h6 className="text-primary text-uppercase mb-2">About Us</h6>
                                <h1 className="display-6 mb-4">We Help Students To Pass Test &amp; Get A License On The
                                    First Try</h1>
                                <p>Getting licence on your first attempt now is easy</p>
                                <p className="mb-4">Get trained with world class friendly instructor</p>
                                <div className="row g-2 mb-4 pb-2">
                                    <div className="col-sm-6">
                                        <i className="fa fa-check text-primary me-2"/>Fully Licensed
                                    </div>
                                    <div className="col-sm-6">
                                        <i className="fa fa-check text-primary me-2"/>Online Attendence
                                    </div>
                                    <div className="col-sm-6">
                                        <i className="fa fa-check text-primary me-2"/>Afordable Fee
                                    </div>
                                    <div className="col-sm-6">
                                        <i className="fa fa-check text-primary me-2"/>Best Trainers
                                    </div>
                                </div>
                                <div className="row g-4">
                                    <div className="col-sm-6">
                                        <Link className="btn btn-primary py-3 px-5" type={"text/css"} to={""}>Read More</Link>
                                    </div>
                                    <div className="col-sm-6">
                                        <a className="d-inline-flex align-items-center btn btn-outline-primary border-2 p-2"
                                           href="tel:9663160830">
                      <span className="flex-shrink-0 btn-square bg-primary">
                        <i className="fa fa-phone-alt text-white"/>
                      </span>
                                            <span className="px-3">9663160830</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>

    );
}

export default About;