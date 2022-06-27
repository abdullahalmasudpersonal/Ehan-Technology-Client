import React from 'react';
import './Header.css';
import logo from '../../../assets/img/logo/EHAN LOGO.JPEG';
import logoName from '../../../assets/img/logo/logo&name.png';
import account from '../../../assets/img/profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import SearchBer from './Sherchber/SearchBer';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div className='header-top'>
                <div className='container-fluid container-xxl py-3 header-top-flex'>
                    <div className='ms-0'>
                        <Link  to='/'>
                        <img className='' src={logoName} height='50px' alt='' /> </Link>
                    </div>
                    {/* <SearchBer/> */}
                    {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
                    <div className='search-ber'>
                        <form class="d-flex" role="search">
                            <input style={{ height: '45px' }} class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                    <div className='cardProfile'>
                        <div >
                            <FontAwesomeIcon icon={faShoppingCart} style={{ color: 'white', fontSize: '23px' }} />
                        </div>
                        <div className='me-1'>
                            <img  style={{color:'red'}} src={account} height='30px' alt='' />
                        </div>
                    </div>
                </div>
            </div>

            <nav class="navbar sticky-top navbar-expand-xl navber-bg">
                <div class="container-fluid container-xxl">
                    <button class="navbar-toggler ms-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    {/* <a class="navbar-brand header-none" href="#">
                        <img src={logoName} height='40px' alt='' /> </a> */}
                    <div className='search-ber-top header-none'>
                        <form class="d-flex" role="search">
                            <input style={{ height: '45px' }} class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                    {/* <a class="navbar-brand header-none" href="#">Navbar</a> */}
                    <div className='cardProfile header-none'>
                        <div className=''>
                            <FontAwesomeIcon icon={faShoppingCart} style={{ color: 'black', fontSize: '23px' }} />
                        </div>
                        <div className='me-1'>
                            <img src={account} height='30px' alt='' />
                        </div>
                    </div>

                    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            {/*  <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li> */}
                            <li class="nav-item fw-bold">
                                <a class="nav-link disabled">Dasktop</a>
                            </li>
                            <li class="nav-item fw-bold">
                                <a class="nav-link disabled">Laptop</a>
                            </li>
                            <li class="nav-item fw-bold">
                                <a class="nav-link disabled">Monitor</a>
                            </li>
                            <li class="nav-item fw-bold">
                                <a class="nav-link disabled">Camera</a>
                            </li>
                            <li class="nav-item fw-bold">
                                <a class="nav-link disabled">Networking</a>
                            </li>
                            <li class="nav-item fw-bold">
                                <div><a class="nav-link disabled">Office Equipment</a></div>
                            </li>
                            <li class="nav-item fw-bold">
                                <a class="nav-link disabled">Accessories</a>
                            </li>
                            <li class="nav-item fw-bold">
                                <a class="nav-link disabled">Security</a>
                            </li>
                            <li class="nav-item fw-bold">
                                <a class="nav-link disabled">Ups</a>
                            </li>
                            <li class="nav-item fw-bold">
                                <a class="nav-link disabled">Components</a>
                            </li>
                            <li class="nav-item fw-bold">
                                <a class="nav-link disabled">Software</a>
                            </li>
                            <li class="nav-item fw-bold">
                                <a class="nav-link disabled">Storage</a>
                            </li>
                            <li class="nav-item fw-bold">
                                <a class="nav-link disabled">Sound System</a>
                            </li>
                        </ul>
                        {/*      <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;