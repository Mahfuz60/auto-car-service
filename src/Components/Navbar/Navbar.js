import React from 'react';
import logo from '../../images/logo.png';
import {Link} from "react-router-dom";


const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light ">
      <div class="container-fluid ">
          <img className='ms-2 ' style={{width:'250px',height:'60px'}} src={logo} alt=""/>
       
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse ml-3" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 fs-5">
            <li class="nav-item">
            <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
            </li>

            <li class="nav-item ">
            <Link className="nav-link active" aria-current="page" to="/home">AboutUs</Link>
                
             
            </li>
            <li class="nav-item">
            <Link className="nav-link active" aria-current="page" to="/home"> Projects</Link>
              
            </li>
            <li class="nav-item">
            <Link className="nav-link active" aria-current="page" to="/admin"> Admin</Link>

            </li>
            <li className="nav-item">
                                <Link className="nav-link active" to="/dashboard">Dashboard</Link>
                            </li>
            <li class="nav-item">
            <Link className="nav-link active" aria-current="page" to="/home"> Contact</Link>
              
            </li>
            

            <li class="nav-item  ">
              
              <button className="btn btn-info me-2" ><Link className="nav-link active " aria-current="page" to="/login" style={{ color:'white'}}>Login In</Link></button>

                 
            </li>

            
         </ul>
         
        
           
        </div>
      </div>
    </nav>
  )
    
};

export default Navbar;