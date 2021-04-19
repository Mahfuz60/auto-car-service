import React from 'react';
import pic2 from '../../../images/pic2.jpg';
import './CompanyInfo.css'

const CompanyInfo = () => {
    return (
        <section className="mt-5 align-items-center ">
      <div className='container'>
      <div className='row d-flex pd-5 '>
        <div className="company-img col-md-5 mb-4 my-5 mx-2 ">
          <img  className=' img-fluid  ms-5 ' src={pic2} alt="" />
        </div>
        <div className="col-md-6  align-self-center p-5 ">
          <h2 style={{fontWeight:'700', color:'#203047'}}>
            Why Choose Us, <br />Our Company
          </h2>
          <p className='text-secondary my-4 fs-6'>
          Our commitment to you is to provide honest, friendly, and on-time service. Visit a locally owned and operated business that has been serving the community since 1992.We believe in giving you the very best service for auto repair that you can find. That’s why we seek out and hire the very best auto repair technicians. We look for technicians that have strong experience with the brands of vehicles we service. 
          </p>
          <button className="btn btn-info ">Learn More</button>
        </div>
      </div>
      </div>
    </section>
    );
};

export default CompanyInfo;