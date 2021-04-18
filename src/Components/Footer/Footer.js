import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import FooterDetails from '../FooterDetails/FooterDetails';

const Footer = () => {
    const noNamed = [
        {name: "Emergency service" , link: "/emergency"},
        {name: "Home Service" , link: "/carwash"},
        {name: "Weekly Service" , link: "/service"},
        {name: "Yearly Service" , link: "/service"},
        {name: "Monthly Service" , link: "/carwash"},
    ]
    const ourAddress = [
        {name: "Brooklyn, NY-10036,USA" , link: "//google.com/map"},
        {name: "Yards" , link: "//google.com/map"},
       
    ]
    const CompanyOffer= [
        {name: "Emergency service" , link: "/emergency"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Home Service" , link: "/home service"},
        {name: "Car Parts Change" , link: "/carPart"},
        {name: "Car Maintenance" , link: "/car Maintenance"},
        {name: "Car Maintenance" , link: "/car Maintenance"},
        {name: "Car Maintenance" , link: "/car Maintenance"}
    ]
    const services = [
        {name: "Emergency service" , link: "/emergency"},
        {name: "Car Wash" , link: "/car Maintenance"},
        {name: "Home Service" , link: "/home service"},
        {name: "Car Parts Change" , link: "/carPart"},
        {name: "Car Wash" , link: "/car maintain"},
        {name: "Car Wash" , link: "/car Maintenance"},
        {name: "Car Wash" , link: "/carwash"}
    ]

    
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterDetails key={1} menuTitle="Our Facilities" menuItems={noNamed}/>
                    <FooterDetails key={2} menuTitle="Services" menuItems={services}/>
                    <FooterDetails key={3} menuTitle="Company Offer" menuItems={CompanyOffer}/>
                    <FooterDetails key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-info">+2025550295</button>
                        </div>
                    </FooterDetails>
                </div>
                <div className="copyRight text-white text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;