import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import logo from '../../../assets/img/logo/logo&name.png'
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <div className='footer-bg '>
            <div className='container footer-dev-bg'>
                <div className='footer-dev px-4'>
                    <p className='fs-4 ' style={{ paddingTop: '30px', fontSize:'20px', color:'rgb(187, 192, 211)', letterSpacing:'5px' }}>Support</p>
                    <div className='footer-dev-1'>
                        <div className='d-flex'>
                            <div className='d-flex align-items-center'>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <p className='mb-0'><FontAwesomeIcon icon={faPhone} style={{ fontSize:'20px', color:'rgb(187, 192, 211)' }} /></p>
                                </div>
                                <hr />
                            </div>
                            <div >
                                <p className='mb-0 text-secondary fw-bold'>10AM - 8PM</p>
                                <p className='fs-5 fw-bold text-warning mb-0'>017426457771</p>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className='footer-dev-1'>
                        <div className='d-flex'>
                            <div className='d-flex align-items-center'>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <p className='mb-0'><FontAwesomeIcon icon={faPhone} style={{ fontSize:'20px', color:'rgb(187, 192, 211)' }} /></p>
                                </div>
                                <hr />
                            </div>
                            <div >
                                <p className='mb-0 text-secondary fw-bold'>10AM - 8PM</p>
                                <p className='fs-5 fw-bold text-warning mb-0'>017426457771</p>
                            </div>
                        </div>
                    </div>
                </div>

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
                    <p>&copy; {year} Ehan Technology.  All Rights Reserved.  Design, Development and Maintenance by <span ><a href='https://abdullahalmasud.netlify.app/' target="_blank" style={{ textDecoration: 'none' }}>Abdullah al masud</a></span></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;