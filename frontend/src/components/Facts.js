import React from 'react';

function Facts() {
    return (
        <div className="container-fluid facts py-5 pt-lg-0">
            <div className="container py-5 pt-lg-0">
                <div className="row gx-0">
                    <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                        <div className="bg-white shadow d-flex align-items-center h-100 p-4" style={{minHeight: '150px'}}>
                            <div className="d-flex">
                                <div className="flex-shrink-0 btn-lg-square bg-primary">
                                    <i className="fa fa-car text-white" />
                                </div>
                                <div className="ps-4">
                                    <h5>Easy Driving Learn </h5>
                                    <span>Learn with confidence</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                        <div className="bg-white shadow d-flex align-items-center h-100 p-4" style={{minHeight: '150px'}}>
                            <div className="d-flex">
                                <div className="flex-shrink-0 btn-lg-square bg-primary">
                                    <i className="fa fa-users text-white" />
                                </div>
                                <div className="ps-4">
                                    <h5>Experienced Instructor</h5>
                                    <span>5 years of experienced instructor</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                        <div className="bg-white shadow d-flex align-items-center h-100 p-4" style={{minHeight: '150px'}}>
                            <div className="d-flex">
                                <div className="flex-shrink-0 btn-lg-square bg-primary">
                                    <i className="fa fa-file-alt text-white" />
                                </div>
                                <div className="ps-4">
                                    <h5>Get licence</h5>
                                    <span>Getting licence is now easy</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Facts;