import React from 'react';

const ServicesDetails = ({service}) => {
    return (
         <div className='col-md-6  card-group p-4  text-center'>
           <div className="card shadow-sm  justify-content-center">
        <div className='card-body '>
            <img  style={{marginTop:'10px',height:'180px',width:'180px',color:'info'}} src={service.pic} alt=""/>
            <h5 className='mt-4 mb-4 text-dark fw-bold'>{service.name}</h5>
            <h3 style={{color:'green',fontWeight:'700'}}>{"$"}{service.price}</h3>
            <p className='text-dark text-center'>{service.description}</p>
            <button style={{ backgroundColor:'#012C52',color:'white',border:'none',padding:'5px'}}>Order Now</button>

        </div>
        </div>
        
      </div>
    );
};

export default ServicesDetails;