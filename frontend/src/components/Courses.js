import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css"

import '../css/style.css'

import pic1 from '../img/courses-1.jpg'
import pic2 from '../img/courses-2.jpg'
import pic3 from '../img/courses-3.jpg'
import Navbar from "./Navbar";
import Footer from "./Footer";

function Courses() {
    return (
       <>
           <Navbar Classname={"nav-item nav-link active "}/>

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
           <Footer/>
       </>
    );
}

export default Courses;