import React from 'react';
import img1 from '../img/carousel-1.jpg'
import img2 from '../img/carousel-2.jpg'
import { Link } from "react-router-dom";


function Carousel(){
    return (
        <div className="container-fluid p-0 wow fadeIn" data-wow-delay="0.1s">
            <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="w-100" src={img1} alt="hello" />
                        <div className="carousel-caption">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-7">
                                        <h1 className="display-2 text-light mb-5 animated slideInDown">Learn To Drive With Confidence</h1>
                                        <Link to={"/about"} className="btn btn-primary py-sm-3 px-sm-5">Learn More</Link>
                                        <Link to={"/Courses"} className="btn btn-light py-sm-3 px-sm-5 ms-3">Our Courses</Link>
                                        {/* <a href className="btn btn-light py-sm-3 px-sm-5 ms-3">Our Courses</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="w-100" src={img2} alt="image2" />
                        <div className="carousel-caption">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-7">
                                        <h1 className="display-2 text-light mb-5 animated slideInDown">Safe Driving Is Our Top Priority</h1>
                                        <Link to={"/about" } className="btn btn-primary py-sm-3 px-sm-5">Learn More</Link>
                                        <a href className="btn btn-light py-sm-3 px-sm-5 ms-3">Our Courses</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Carousel;