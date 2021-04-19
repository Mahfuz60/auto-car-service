import React, { useState } from 'react';
import service1 from '../../../images/service1.png';
import service2 from '../../../images/service2.png';
import service3 from '../../../images/service3.png';
import service4 from '../../../images/service4.png';
import ServicesCard from '../ServicesCard/ServicesCard';

const services= [
    {
        id: 1,
        name: 'AIR CONDITIONING',
        pic:service1,
        price: '499',
        description: 'We provide top-notch service for import and domestic car repairs. Servicing Brakes, Tune Ups, Engine Repairs. '
    },
    {
        id: 2,
        name: 'ELECTRICAL SYSTEM',
        pic:service2,
        price: '220',
        description: 'We provide top-notch service for import and domestic car repairs. Servicing Brakes, Tune Ups, Engine Rep'
    }, {
        id: 3,
        name: 'BRAKE REPAIR',
        pic:service3,
        price: '355',
        description: 'We provide top-notch service for import and domestic car repairs. Servicing Brakes, Tune Ups, Engine Rep'
    },
    {
        id: 4,
        name: 'AUTOMOTIVE FILTERS',
        pic:service4,
        price: '355',
        description: 'We provide top-notch service for import and domestic car repairs. Servicing Brakes, Tune Ups, Engine Rep'
    },
]

const Services = () => {
    const [service, setService] = useState([]);

  // data load to database
  fetch("https://whispering-caverns-51592.herokuapp.com/service")
    .then((response) => response.json())
    .then((service) => {
      
      setService(service);
    });


    return (

        <section className='services-container pt-3 mt-5'>
        <div className='text-center'>
            <h4 style={{color:'#1CC7C1',fontWeight:'700'}}>OUR SERVICES</h4>
            <p style={{color:'#3A4256',marginTop:'15px',fontSize:'20px',textAlign:'center'}}>Our professionals will perform diagnostic tests, <br/> fluid flush and fills, engine replacement, oil changes, and total vehicle overhauls.</p>
        </div>
        <div className='d-flex justify-content-center'>
        <div   className='row w-75 card-deck px-5 py-3'>
            {
                
                 services.map(service => <ServicesCard key={service.name} service={service} />)
                
            }

            {
                service.map(service =><ServicesCard service={service} key={service.name}></ServicesCard>)
            }

            
        </div>
        </div>
        
    </section>


        
    );
};

export default Services;