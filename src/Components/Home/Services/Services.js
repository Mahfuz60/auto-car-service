import React from 'react';
import service1 from '../../../images/service1.png';
import service2 from '../../../images/service2.png';
import service3 from '../../../images/service3.png';
import service4 from '../../../images/service4.png';
import ServicesDetails from '../ServicesDetails/ServicesDetails';


const servicesData=[
    {
        name:'AIR CONDITIONING',
        pic:service1,
        price:'300',
        description:'We provide top-notch service for import and domestic car repairs. Servicing Brakes, Tune Ups, Engine Repairs. '
    },
    {
        name:'ELECTRICAL SYSTEM',
        pic:service2,
        price:'200',
        description:'We provide top-notch service for import and domestic car repairs. Servicing Brakes, Tune Ups, Engine Repairs. '
    },
    {
        name:'BRAKE REPAIR',
        pic:service3,
        price:'500',
        description:'We provide top-notch service for import and domestic car repairs. Servicing Brakes, Tune Ups, Engine Repairs.'
    },
    {
        name:'AUTOMOTIVE FILTERS',
        pic:service4,
        price:'150',
        description:'We provide top-notch service for import and domestic car repairs. Servicing Brakes, Tune Ups, Engine Repairs.'
    }
]

const Services = () => {
    return (
        <section className='services-container pt-3 mt-5'>
        <div className='text-center'>
            <h4 style={{color:'#1CC7C1',fontWeight:'700'}}>OUR SERVICES</h4>
            <p style={{color:'#3A4256',marginTop:'15px',fontSize:'20px',textAlign:'center'}}>Our professionals will perform diagnostic tests, <br/> fluid flush and fills, engine replacement, oil changes, and total vehicle overhauls.</p>
        </div>
        <div className='d-flex justify-content-center'>
        <div   className='row w-75 card-deck px-5 py-3'>
            {
                servicesData.map(service=><ServicesDetails key={service.key} service={service}></ServicesDetails>)
                
            }
        </div>
        </div>
        
    </section>
    );
};

export default Services;