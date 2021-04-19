import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../images/logo.png"
import { userContext } from '../../../App';

const Navbar = () => {
    // use Context 
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    return (
        <div className="">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                <img className='ms-2 ' style={{width:'250px',height:'60px'}} src={logo} alt=""/>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav px-5 fs-5  ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/admin ">Admin</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/customerDashboard">Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#"  >Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Contact Us</a>
                            </li>
                        </ul>
                        <div className="">
                            <button className="btn btn-info text-light me-2 "><Link to="/login" style={{ textDecoration: 'none' }}>Sign In</Link></button>
                        </div>
                       
                        <div className="">
                            <img style={{width:'25px'}} src={loggedInUser.photoURL} alt="user" />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;