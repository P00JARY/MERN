import React from 'react'
import Navbar from './Navbar';
import Topbar from "./Topbar";
import Carousel from "./Carousel";
import Footer from "./Footer";
import Facts from "./Facts";

function Home() {
    return (
        <>
            <Topbar/>
            <Navbar/>
            <Carousel/>
            <Facts/>
            <Footer/>

        </>
    );
}
export default Home
