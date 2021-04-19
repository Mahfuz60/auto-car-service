import React from 'react';
import "./CompleteService.css";
import pic4 from "../../../images/pic4.png";


const CompleteServices = () => {
    return (

        <section className="mt-5 align-items-center ">
      <div className='container'>
      <div className='row d-flex pd-5   '>
        <div className="featureService col-md-6 mb-4 my-5  ">
          <img  className=' img-fluid  ' src={pic4} alt="" />
        </div>
        <div className="col-md-6  align-self-center p-5 ">
          <h2 style={{fontWeight:'700', color:'#203047'}}>
          LONG TERM WARRANTIES <br />AND COMPETITIVE PRICES
          </h2>
          <p className='text-secondary my-4 fs-6'>
          Why do we consider ourselves to be the best car garage? It’s simple, really. We know that honesty and transparency, coupled with reliable and friendly customer service, is what really builds customer trust.

          Trust the experts at our AutoService Shop for quality tune-ups. Our professionals will perform diagnostic tests, fluid flush and fills, engine replacement, oil changes, and total vehicle overhauls. We offer competitive.
          </p>
          <button className="btn btn-info ">SEE ALL OUR OFFERS</button>
        </div>
      </div>
      </div>
    </section>
        
    );
};

export default CompleteServices;
