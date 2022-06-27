import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-bg '>
            <div className='container footer-dev-bg'>
                <div className='footer-dev'> </div>
                <div className='footer-dev'> </div>
                <div className='footer-dev'> </div>
                <div className='footer-dev'> </div>
            </div>

            <div className=' footer-dev-buttom'>
                <div className='container footer-div-copyright' style={{color:'white'}}>
                    <p className='my-3'>© 2022 Ehan Technology | All rights reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;