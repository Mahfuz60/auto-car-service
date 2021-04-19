import React from 'react';
import Footer from '../../Share/Footer/Footer';
import Navbar from '../../Share/Navbar/Navbar';
import CompanyInfo from '../CompanyInfo/CompanyInfo';
import CompleteServices from '../CompleteServices/CompleteServices';
import Contact from '../Contact/Contact';
import HeaderMain from '../HeaderMain/HeaderMain';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <CompanyInfo></CompanyInfo>
            <Services></Services>
            <CompleteServices></CompleteServices>
            <Testimonial></Testimonial>
            <Contact></Contact>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;