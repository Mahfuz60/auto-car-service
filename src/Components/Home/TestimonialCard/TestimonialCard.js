import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const TestimonialCard = ({review}) => {
   
    console.log(review)

    
        
    
    return (
        <div className="col-md-4 card-group p-4 ">
        <div className="card shadow-sm  justify-content-center">
            <div className="card-body ">
            <div className=" d-flex px-3 ">
                <img className="mx-3 " width="60" src={review.pic} alt="" />
                </div>
                <div className="px-3 py-2">
                <h5 className="text-info">{review.name}</h5>
                <h5 className="text-info">{review.company}</h5>
                <p className="m-0 text-secondary">{review.position}</p>
                </div>
                
            </div>
            <div >
            <p className="card-footer ">{review.description}</p>
            <div className="mx-3 my-3">
            <Link to="#" className="text-warning"><FontAwesomeIcon icon={faStar} /></Link> 
            <Link to="#" className="text-warning"><FontAwesomeIcon icon={faStar}  /></Link>
            <Link to="#" className="text-warning"><FontAwesomeIcon icon={faStar}  /></Link>
            <Link to="#" className="text-warning"><FontAwesomeIcon icon={faStar}  /></Link>
            <Link to="#" className="text-warning"><FontAwesomeIcon icon={faStar}  /></Link>
            </div>
                
            </div>
        </div>
      </div>
    );
};

export default TestimonialCard;