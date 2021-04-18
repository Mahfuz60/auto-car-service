import React from 'react';
import './header.css';
import Navbar from '../../Navbar/Navbar';
import HeaderMain from '../HeaderMain/HeaderMain';
import CompanyInfo from '../CompanyInfo/CompanyInfo';

const Header = () => {
    return (
        <div className="header-container">

            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <CompanyInfo></CompanyInfo>
            
        </div>
    );
};

export default Header;