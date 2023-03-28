import React from 'react'
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css"
// import Footer from "./Footer";
// import Courses from "./Courses";

function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
            <Link to={"/"} className="navbar-brand d-flex align-items-center border-end px-4 px-lg-5">
                <h2 className="m-0"><i className="fa fa-car text-primary me-2" />Prakruthi</h2>
            </Link>
            <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto p-4 p-lg-0">


                    <Link to={"/"} className="nav-item nav-link ">Home</Link>
                    <Link to={"/about"} className="nav-item nav-link">About</Link>

                    <Link to={"/Courses"} className="nav-item nav-link">Courses</Link>
                    <div className="nav-item dropdown">
                        <a href="www" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                        <div className="dropdown-menu bg-light m-0">
                            <a href="feature.html" className="dropdown-item">Features</a>
                            <a href="appointment.html" className="dropdown-item">Appointment</a>
                            <Link to={"/our-team"} className="dropdown-item">Our Team</Link>
                            <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                            <a href="404.html" className="dropdown-item">404 Page</a>
                        </div>
                    </div>
                    <Link to={"/Contact"} className="nav-item nav-link">Contact</Link>
                    <Link to={"/Login"} className="nav-item nav-link">Login</Link>
                <Link to={"/Login"} className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Get Started</Link>
            </div>
            </div>
        </nav>
        {/*<Courses/>*/}

    </>
  )
}

export default Navbar
