import React from 'react';

function Topbar() {
    return (
        <div className="container-fluid bg-dark text-light p-0">
            <div className="row gx-0 d-none d-lg-flex">
                <div className="col-lg-7 px-5 text-start">
                    <div className="h-100 d-inline-flex align-items-center me-4">
                        <small className="fa fa-map-marker-alt text-primary me-2" />
                        <small> Mudipu,Karnataka</small>
                    </div>
                    <div className="h-100 d-inline-flex align-items-center">
                        <small className="far fa-clock text-primary me-2" />
                        <small>Mon - Fri : 09.00 AM - 06.00 PM</small>
                    </div>
                </div>
                <div className="col-lg-5 px-5 text-end">
                    <div className="h-100 d-inline-flex align-items-center me-4">
                        <small className="fa fa-phone-alt text-primary me-2" />
                        <small>+9876567890</small>
                    </div>
                    <div className="h-100 d-inline-flex align-items-center mx-n2">
                        <a className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href><i className="fab fa-facebook-f" /></a>
                        <a className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href><i className="fab fa-twitter" /></a>
                        <a className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href><i className="fab fa-linkedin-in" /></a>
                        <a className="btn btn-square btn-link rounded-0" href><i className="fab fa-instagram" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Topbar;