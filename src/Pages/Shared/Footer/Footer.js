import React from 'react';
import logo from '../../../assets/img/logo/logo&name.png'
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <div className='footer-bg '>
            <div className='container footer-dev-bg'>
                <div className='footer-dev'> </div>
                <div className='footer-dev'> </div>
                <div className='footer-dev'> </div>

                <div className='footer-dev ps-4'>
                    <img src={logo} alt='' />
                    <p className='m-0 d-block '>4th floor, Sahara Tower</p>
                    <p className='m-0 d-block '>Elephant Read, Dhaka-1205</p>
                    <p className='m-0 d-block '>Phone: +880-1717420439</p>
                    <p className='m-0 d-block '>Phone: +880-1717420439</p>
                    <p className='m-0 d-block '>Email: muusm58@gmail.com</p>
                </div>
            </div>

            <div className=' footers-bottom'>
                <div className='container footers-bottom'>
                    <p>&copy; {year} Ehan Technology.  All Rights Reserved.  Design, Development and Maintenance by <span>Abdullah al masud</span></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;