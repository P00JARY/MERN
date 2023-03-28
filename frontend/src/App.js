import React from 'react'
import LoginForm from './components/LoginForm'
import Registration from './components/Registration'
import AdminDashboard from "./components/Admin";
import MyProfile from "./components/userFile/myprofile";
import ErrorPage from "./components/ErrorPage";
import About from "./components/about";
import {Route,Routes } from 'react-router-dom'
// import Home from './components/Home';
import Courses from "./components/Courses";
// import ExportPdfComponent from './components/pdf';
import User from './components/user';
import Contact from './components/contact';
import WhatsAppButton from './components/what';
import ApplicationForm from './components/application';
import DrivingSchoolStatement from './components/Statement';
import UserApplicationForm from './components/user';
import Home from "./components/Home";

function App() {
  return (
    <>
     <Routes> 
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Login' element={<LoginForm/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/Registration' element={<Registration/>}/>
        <Route path='/admin' element={<AdminDashboard />} />
        <Route path='/Courses' element={<Courses />} />
        <Route path='/user' element={<User/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/Application' element={<ApplicationForm/>} />
        <Route path='/WhatsAppButton' element={<WhatsAppButton/>} />
        <Route path='/Statement' element={<DrivingSchoolStatement/>} />
        <Route path='/UserApplication' element={<UserApplicationForm/>} />
        <Route path='/MyProfile' element={<MyProfile/>} />
        <Route path='/ErrorPage' element={<ErrorPage/>} />


      </Routes>
    </>
  );
}

export default App;
