import React from 'react';

function Footer() {
    return (
        <div>
            <div className="container-fluid bg-dark text-light footer my-6 mb-0 py-6 wow fadeIn" data-wow-delay="0.1s">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-white mb-4">Get In Touch</h4>
                        <h2 className="text-primary mb-4"><i className="fa fa-car text-white me-2" />Prakruthi</h2>
                        <p className="mb-2"><i className="fa fa-map-marker-alt me-3" />Mudipu,Mangalore</p>
                        <p className="mb-2"><i className="fa fa-phone-alt me-3" />9876567890</p>
                        <p className="mb-2"><i className="fa fa-envelope me-3" />prakruthi@driving.com</p>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-light mb-4">Quick Links</h4>
                        <a className="btn btn-link" href>About Us</a>
                        <a className="btn btn-link" href>Contact Us</a>
                        <a className="btn btn-link" href>Our Services</a>
                        <a className="btn btn-link" href>Terms &amp; Condition</a>
                        <a className="btn btn-link" href>Support</a>
                    </div>
                    
                    
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-light mb-4">SignUp</h4>
                        
                            <div className="input-group">
                                <input type="text" className="form-control p-3 border-0" placeholder="Your Email Address" />
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                        
                        <h6 className="text-white mt-4 mb-3">Follow Us</h6>
                        <div className="d-flex pt-2">
                            <a className="btn btn-square btn-outline-light me-1" href><i className="fab fa-twitter" /></a>
                            <a className="btn btn-square btn-outline-light me-1" href><i className="fab fa-facebook-f" /></a>
                            <a className="btn btn-square btn-outline-light me-1" href><i className="fab fa-youtube" /></a>
                            <a className="btn btn-square btn-outline-light me-0" href><i className="fab fa-linkedin-in" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Footer;