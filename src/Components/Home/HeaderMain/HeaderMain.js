import React from 'react';
import "./HeaderMain.css"
import picMain from '../../../images/picMain.png';


const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="header-main row d-flex align-items-center">
           <div className="col-md-5 offset-md-1 ">
               <h1 style={{color:'#3A4256',fontWeight:'700'}}>HONEST,QUALITY WORK <br/> AT AFFORDABLE PRICES</h1>
               <p className='text-dark pt-3'>We provide top-notch service for import and domestic car repairs.  Servicing Brakes Exhaust, Tune Ups, Engine Repairs, Electrical and A.C Systems. </p>
              <button style={{color:'white',fontWeight:'600'}} className="btn btn-info pt-3">GET FREE QUOTES</button>


           </div>
           <div className=" col-md-6">
              <img src={picMain} alt=""className=" header-main img-fluid "/>
           </div>

       </main>
    );
};

export default HeaderMain;