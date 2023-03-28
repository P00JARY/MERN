import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import 'jquery/dist/jquery.min'
import {NavLink} from "react-router-dom";

function ErrorPage(props) {
    return (
        <>
            <section className="vh-100" style={{ backgroundColor: "#eee" }}>
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div >
                            <h1>Oops!</h1>
                            <h2>404 Not Found</h2>
                            <div>Sorry, an error has occured, Requested page not found!</div>
                            <NavLink className="btn btn-primary btn-lg" to={'/Login'}>Take me Home</NavLink>

                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default ErrorPage;