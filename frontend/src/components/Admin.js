import React, {useState} from 'react';
import {useEffect} from 'react';
import '../css/table.css';
import '../css/admnav.css'
import axios from "axios";
// import {useNavigate} from "react-router-dom";/



const AdminDashboard = () => {
  const [activePage, setActivePage] = React.useState('manage-packages');

  // const navigate=useNavigate();
    let [users, setUsers] = useState([]);
    let [allpackages,setallpackages] = useState([]);


    const url = "http://localhost:5000/signin";

    useEffect(() => {
            console.log("inside effect");
            const email = localStorage.getItem("user");
            const pass = localStorage.getItem("pass");

            axios.post(url, {
                email: email,
                cpassword: pass // corrected typo
            }).then((res) => {
                console.log("inside effect then");
                console.log(res.data);
                setUsers(res.data);
            }).catch((err) => {
                console.log(err);
            });

            axios.get("http://localhost:5000/allPackages").then((res)=>{
                console.log("all packages")
                console.log(res)
                setallpackages(res.data)
            }).catch((err)=>{
                console.log(err)})
        }
    , []);
    const handlePageClick = (page) => {
    setActivePage(page);
  };

    const attendance=async (email,count)=>{
        console.log(email)
        console.log(count)
        console.log("attendace fun")
        await axios.post("http://localhost:5000/attendance",{
            email:email,
            noClass:count
        }).then((res)=>{
            console.log("inside attendance react")
            console.log(res)
            refresh()

        }).catch(err=>{
            console.log("not updated !"+err)
        })
    }

    const onPass=async (email)=>{
        console.log("passs :"+email)
        await axios.post("http://localhost:5000/result",{
            email:email,
            result:"pass"
        }).then((res)=>{
            console.log("inside result react")
            console.log(res)
            refresh()

        }).catch(err=>{
            console.log("not updated !"+err)
        })


    }
    const onfail=async (email)=>{
        console.log("fail :"+email)
        await axios.post("http://localhost:5000/result",{
            email:email,
            result:"fail"
        }).then((res)=>{
            console.log("inside result react")
            console.log(res)
            refresh()

        }).catch(err=>{
            console.log("not updated !"+err)
        })


    }




    const refresh = () => window.location.reload(true)
    const card=(item)=>{
        return(
            <>
                <div className="col-lg-8">
                    <div className="card mb-4">
                        <div className="card-body">
                            <div className="row fw-bolder">
                                <div className="col-sm-3 ">
                                    <p className="mb-0 ">Full Name</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className=" mb-0">{item.name}</p>
                                </div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Email</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">{item.email}</p>
                                </div>
                            </div>
                            <hr/>

                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Mobile</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">{item.phone}</p>
                                </div>
                            </div>

                            <hr/>

                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Address</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">{item.address}</p>
                                </div>
                            </div>
                            <hr/>

                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">My Course</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">{item.package}</p>
                                </div>
                            </div>
                            <hr/>

                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Total Classes</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">21</p>
                                </div>
                            </div>
                            <hr/>

                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">remaining Classes :</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">{21-item.noClass}</p>
                                </div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0"> Number of Classes Attended : </p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">{item.noClass}</p>
                                </div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0"> Give Attendance: </p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0"><button className="btn btn-default text-bg-primary" onClick={()=>{attendance(item.email,item.noClass)}}>Present</button></p>
                                </div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0"> result: </p>
                                </div>
                                <div className="col-sm-9" >
                                    <p className="mb-0">{item.result}</p>
                                    <button className="btn btn-default text-bg-primary " onClick={()=>{onPass(item.email)}}>pass</button>

                                    <button className="btn btn-default " onClick={()=>{onfail(item.email)}} style={{background:"red"} }>fail</button>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </>


        )
    }


    const AllPack=(pack)=>{
        return(

        <div className="container">
            <div className="card col-lg-8"  style={{padding:50}}>

        Package Discription :{pack.packageValue}<br/>
                <hr/>
        Price {pack.price}
    </div>
    </div>)
    }

    const [packages,setpackage]=useState({
        packageValue:"",
        price:""
    })

    const handle=(e)=>{
        const newdata={...packages}
        newdata[e.target.id]=e.target.value;
        setpackage(newdata)
        console.log(newdata)
    }


    const submitPackage=()=>{
        console.log("inside : ")
        console.log(packages)

        axios.post("http://localhost:5000/newpackage",{
            packageValue:packages.packageValue,
            price:packages.price
        }).then((res)=>{
            alert(res.data.message)
            setpackage({
                packageValue: "",
                price: ""
            })
            refresh()

        }).catch((err)=>{
            console.log(err)
        })

    }


  return (
    <>
        <div className="admin-dashboard">
            <div className="sidebar">
                <h2>Prakruthi Driving School</h2>
                <nav>
                    <ul>

                        <li className={activePage === 'manage-customers' ? 'active' : ''} onClick={() => handlePageClick('manage-customers')}>Customers</li>
                        <li className={activePage === 'manage-packages' ? 'active' : ''} onClick={() => handlePageClick('manage-packages')} >Packages </li>
                        <li className={activePage === 'set-reminder' ? 'active' : ''} onClick={() => handlePageClick('set-reminder')}> Reminder</li>
                        <li className={activePage === 'chat' ? 'active' : ''} onClick={() => handlePageClick('chat')}>Chat</li>
                        <li className={activePage === 'attendance' ? 'active' : ''} onClick={() => handlePageClick('attendance')}>add Package</li>
                        <li><a style={{color:"black"}} href='/'>Main Page</a></li>
                        <li><a style={{color:"black"}} href='application'>Add Application</a></li>

                    </ul>
                </nav>
            </div>


            <div className="middle-page">

                {activePage === 'manage-customers' && (
                    <div className="container">
                        <h2>Manage Customers</h2>
                        {users.map(item => (
                            card(item)
                        ))}
                    </div>
                )}
                <div>


                {activePage === 'manage-packages' && (

                    <div className="container">
                        {allpackages.map(pack=>(
                            AllPack(pack)
                        ))}
                    </div>



                )}
                </div>




                {activePage === 'set-reminder' && (
                    <table border={2}>
                        <div>

                            <h2>Set Reminder</h2>
                            <form>
                                <tr>

                                    <label>
                                        <td>
                                            Customer:
                                        </td>
                                        <td>
                                            <select>
                                                <option value="">Select Customer</option>
                                                <option value="john.doe@example.com">John Doe</option>
                                                <option value="jane.smith@example.com">Jane Smith</option>
                                            </select>
                                        </td>
                                    </label>
                                </tr>
                                <br />

                                <tr>
                                    <td>
                                        <label>
                                            Reminder Date:
                                            <input type="date" />
                                        </label>
                                    </td>
                                </tr>
                                <br />

                                <tr>
                                    <label>
                                        <td>
                                            Reminder Time:
                                        </td>
                                        <td>
                                            <input type="time" />
                                        </td>
                                    </label>
                                </tr>
                                <br />

                                <tr>
                                    <td>
                                        Enter Text :<input type="text"></input><br/>
                                    </td>
                                    <br/>
                                    <button type="submit" id='setrem'>Set Reminder</button>
                                </tr>
                            </form>
                        </div>

                    </table>
                )}
                {activePage === 'chat' && (
                    <div>
                        <h2>Chat</h2>
                        <p>Coming soon...</p>
                    </div>
                )}

            </div>

            {activePage === 'attendance' && (
                <div>

                    <div className="container justify-content-center">
                        <h2>Add Package</h2>
                        <div className="card col-lg-5"  style={{padding:50}}>

                            Enter the Discription<textarea id="packageValue" onChange={(e)=>handle(e)}></textarea>
                            <hr/>
                            Price <input type="text" id="price" onChange={(e)=>handle(e)}/>
                            <hr/>
                            <button className="text-bg-primary" onClick={()=>submitPackage()}>ADD</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </>
  )}
                 
export default AdminDashboard;