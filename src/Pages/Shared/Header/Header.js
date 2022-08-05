import React from 'react';
import './Header.css';
import logoName from '../../../assets/img/logo/logo&name.png';
import account from '../../../assets/img/profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { Link} from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div className='header-top'>
                <div className='container-fluid container-xxl py-3 header-top-flex'>
                    <div className='ms-0'>
                        <Link to='/'>
                            <img className='' src={logoName} height='50px' alt='' /> </Link>
                    </div>
                    {/* <SearchBer/> */}
                    {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
                    <div className='search-ber'>
                        <form class="d-flex" role="search">
                            <input style={{ height: '40px' }} class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                    <div className='cardProfile'>
                        <div >
                            <FontAwesomeIcon icon={faShoppingCart} style={{ color: 'orange', fontSize: '20px' }} />
                        </div>
                        <div className='me-1'>
                            <img src={account} height='25px' alt='' />
                        </div>
                    </div>
                </div>
            </div>

            <nav class="navbar sticky-top navbar-expand-xl navber-bg">
                <div class="container-fluid container-xxl">
                    <button class="navbar-toggler ms-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    {/* <a class="navbar-brand header-none" href="#">
                        <img src={logoName} height='40px' alt='' /> </a> */}
                    <div className='search-ber-top header-none'>
                        <form class="d-flex" role="search">
                            <input style={{ height: '40px' }} class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                    {/* <a class="navbar-brand header-none" href="#">Navbar</a> */}
                    <div className='cardProfile header-none'>
                        <div className=''>
                            <FontAwesomeIcon icon={faShoppingCart} style={{ color: 'orange', fontSize: '20px' }} />
                        </div>
                        <div className='me-4'>
                            <img src={account} height='25px' alt='' />
                        </div>
                    </div>

                    <div class="collapse navbar-collapse collapse-margin" id="navbarTogglerDemo03">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* ------------start Desktops menu--------------- */}
                            <li class="dropdown nav-item">
                                <Link style={{ textDecoration: 'none' }} to='/'>
                                    <button class="dropbtn nav-link fw-bold">Desktop</button>
                                </Link>
                                <div className='dropdown-content'>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Keyboard</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/micropacks'>< >Micropack</></Link>
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                        </div>
                                    </li>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Keyboard</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/micropacks'>< >Micropack</></Link>
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                        </div>
                                    </li>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Keyboard</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/micropacks'>< >Micropack</></Link>
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                        </div>
                                    </li>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Keyboard</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/micropacks'>< >Micropack</></Link>
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                        </div>
                                    </li>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Keyboard</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/micropacks'>< >Micropack</></Link>
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                        </div>
                                    </li>
                                </div>
                            </li>
                            {/* ------------end Desktops menu--------------- */}
                            {/* ------------start Laptops menu--------------- */}
                            <li class="dropdown nav-item">
                                <Link style={{ textDecoration: 'none' }} to='/'>
                                    <button class="dropbtn nav-link fw-bold">Laptop</button>
                                </Link>
                                <div className='dropdown-content'>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Keyboard</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/micropacks'>< >Micropack</></Link>
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                        </div>
                                    </li>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Keyboard</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/micropacks'>< >Micropack</></Link>
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                        </div>
                                    </li>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Keyboard</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/micropacks'>< >Micropack</></Link>
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                        </div>
                                    </li>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Keyboard</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/micropacks'>< >Micropack</></Link>
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                        </div>
                                    </li>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Keyboard</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/micropacks'>< >Micropack</></Link>
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                        </div>
                                    </li>
                                </div>
                            </li>
                            {/* ------------end Laptops menu--------------- */}
                            {/* ------------start Monitor menu--------------- */}
                            <li class="dropdown nav-item">
                                <Link style={{ textDecoration: 'none' }} to='/'>
                                    <button class="dropbtn nav-link fw-bold">Monitor</button>
                                </Link>
                                <div className='dropdown-content'>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Keyboard</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/micropacks'>< >Micropack</></Link>
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                        </div>
                                    </li>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Keyboard</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/micropacks'>< >Micropack</></Link>
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                        </div>
                                    </li>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Keyboard</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/micropacks'>< >Micropack</></Link>
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                        </div>
                                    </li>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Keyboard</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/micropacks'>< >Micropack</></Link>
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                        </div>
                                    </li>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Keyboard</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/micropacks'>< >Micropack</></Link>
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                        </div>
                                    </li>
                                </div>
                            </li>
                            {/* ------------end Monitors menu--------------- */}
                            {/* ------------start component menu--------------- */}
                            <li class="dropdown nav-item">
                                <Link style={{ textDecoration: 'none' }} to='/components'>
                                    <button class="dropbtn nav-link fw-bold">Components</button>
                                </Link>
                                <div className='dropdown-content'>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Motherboard</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/micropacks'>< >Micropack</></Link>
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                        </div>
                                    </li>
                                    <li className='dropdown2'>
                                        <Link to='/porcessors'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Processor</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/micropacks'>< >Intel</></Link>
                                            <Link to='/amds'>< >AMD</></Link>
                                        </div>
                                    </li>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Ram</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/micropacks'>< >Micropack</></Link>
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                        </div>
                                    </li>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Graphics Card</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/micropacks'>< >Micropack</></Link>
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                        </div>
                                    </li>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>DVD Driver</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/micropacks'>< >Micropack</></Link>
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                        </div>
                                    </li>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Power Supply</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/micropacks'>< >Micropack</></Link>
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                        </div>
                                    </li>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Casing</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/micropacks'>< >Micropack</></Link>
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                        </div>
                                    </li>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>CPU Cooler</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/micropacks'>< >Micropack</></Link>
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                        </div>
                                    </li>
                                </div>
                            </li>
                            {/* ------------end component menu--------------- */}
                            {/* ------------start Networking menu--------------- */}
                            <li class="dropdown nav-item">
                                <Link style={{ textDecoration: 'none' }} to='/'>
                                    <button class="dropbtn nav-link fw-bold">Networking</button>
                                </Link>
                                <div className='dropdown-content'>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Keyboard</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/micropacks'>< >Micropack</></Link>
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                        </div>
                                    </li>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Keyboard</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/micropacks'>< >Micropack</></Link>
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                        </div>
                                    </li>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Keyboard</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/micropacks'>< >Micropack</></Link>
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                        </div>
                                    </li>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Keyboard</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/micropacks'>< >Micropack</></Link>
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                        </div>
                                    </li>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Keyboard</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/micropacks'>< >Micropack</></Link>
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                        </div>
                                    </li>
                                </div>
                            </li>
                            {/* ------------end Networking menu--------------- */}
                            {/* ------------start Office Equipment menu--------------- */}
                            <li class="dropdown nav-item">
                                <Link style={{ textDecoration: 'none' }} to='/'>
                                    <button class="dropbtn nav-link fw-bold">Office Equipment</button>
                                </Link>
                                <div className='dropdown-content'>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Keyboard</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/micropacks'>< >Micropack</></Link>
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                        </div>
                                    </li>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Keyboard</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/micropacks'>< >Micropack</></Link>
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                        </div>
                                    </li>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Keyboard</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/micropacks'>< >Micropack</></Link>
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                        </div>
                                    </li>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Keyboard</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/micropacks'>< >Micropack</></Link>
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                        </div>
                                    </li>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Keyboard</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/micropacks'>< >Micropack</></Link>
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                        </div>
                                    </li>
                                </div>
                            </li>
                            {/* ------------end Office Equipment menu--------------- */}
                            {/* ------------start Accessories menu--------------- */}
                            <li class="dropdown nav-item">
                                <Link style={{ textDecoration: 'none' }} to='/accessories'>
                                    <button class="dropbtn nav-link fw-bold">Accessories</button>
                                </Link>

                                <div className='dropdown-content'>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Keyboard</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/micropacks'>< >Micropack</></Link>
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                        </div>
                                    </li>
                                    <li className='dropdown2'>
                                        <Link to='/mouse'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Mouse</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                        </div>
                                    </li>
                                    <li className='dropdown2'>
                                        <Link to='/security-cc-camera'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Microphone</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                        </div>
                                    </li>
                                    <li className='dropdown2'>
                                        <Link to='/security-cc-camera'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Pen Drive</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                        </div>
                                    </li>
                                    <li className='dropdown2'>
                                        <Link to='/security-cc-camera'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Webcam</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                        </div>
                                    </li>
                                    <li className='dropdown2'>
                                        <Link to='/security-cc-camera'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Headphone</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                        </div>
                                    </li>
                                </div>
                            </li>
                            {/* ------------end Accessories menu--------------- */}
                            {/* ------------start security menu--------------- */}
                            <li class="dropdown nav-item">
                                <Link style={{ textDecoration: 'none' }} to='/security'>
                                    <button class="dropbtn nav-link fw-bold">Security</button>
                                </Link>


                                <div class="dropdown-content">

                                    <li class="dropdown2">
                                        <Link to='/security-cc-camera'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Cc Camera </a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                            <Link to='/security/ccCamera/hikvisions'>< >Dahua</></Link>
                                            <Link to='/security/ccCamera/hikvisions'>< >TVT</></Link>
                                            <Link to='/security/ccCamera/hikvisions'>< >Jovision</></Link>
                                            <Link to='/security/ccCamera/hikvisions'>< >Armor</></Link>
                                        </div>
                                    </li>

                                    <li class="dropdown2">
                                        <Link to='/security-cc-camera'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>IP Camera </a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                            <Link to='/security/ccCamera/hikvisions'>< >Dahua</></Link>
                                            <Link to='/security/ccCamera/hikvisions'>< >TVT</></Link>
                                            <Link to='/security/ccCamera/hikvisions'>< >Jovision</></Link>
                                            <Link to='/security/ccCamera/hikvisions'>< >Armor</></Link>
                                        </div>
                                    </li>

                                    <li class="dropdown2">
                                        <Link to='/security-cc-camera'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>DVR</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                            <Link to='/security/ccCamera/hikvisions'>< >Dahua</></Link>
                                            <Link to='/security/ccCamera/hikvisions'>< >TVT</></Link>
                                            <Link to='/security/ccCamera/hikvisions'>< >Jovision</></Link>
                                            <Link to='/security/ccCamera/hikvisions'>< >Armor</></Link>
                                        </div>
                                    </li>

                                    <li class="dropdown2">
                                        <Link to='/security-cc-camera'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>XVR</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                            <Link to='/security/ccCamera/hikvisions'>< >Dahua</></Link>
                                            <Link to='/security/ccCamera/hikvisions'>< >TVT</></Link>
                                            <Link to='/security/ccCamera/hikvisions'>< >Jovision</></Link>
                                            <Link to='/security/ccCamera/hikvisions'>< >Armor</></Link>
                                        </div>
                                    </li>

                                    <li class="dropdown2">
                                        <Link to='/security-cc-camera'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>NVR</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                            <Link to='/security/ccCamera/hikvisions'>< >Dahua</></Link>
                                            <Link to='/security/ccCamera/hikvisions'>< >TVT</></Link>
                                            <Link to='/security/ccCamera/hikvisions'>< >Jovision</></Link>
                                            <Link to='/security/ccCamera/hikvisions'>< >Armor</></Link>
                                        </div>
                                    </li>

                                    <a href="#">Link 2</a>
                                    <a href="#">Link 3</a>
                                </div>
                            </li>
                            {/* ------------end security menu--------------- */}
                              {/* ------------start Ups menu--------------- */}
                              <li class="dropdown nav-item">
                                <Link style={{ textDecoration: 'none' }} to='/'>
                                    <button class="dropbtn nav-link fw-bold">Ups</button>
                                </Link>
                                <div className='dropdown-content'>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Keyboard</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/micropacks'>< >Micropack</></Link>
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                        </div>
                                    </li>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Keyboard</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/micropacks'>< >Micropack</></Link>
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                        </div>
                                    </li>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Keyboard</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/micropacks'>< >Micropack</></Link>
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                        </div>
                                    </li>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Keyboard</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/micropacks'>< >Micropack</></Link>
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                        </div>
                                    </li>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Keyboard</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/micropacks'>< >Micropack</></Link>
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                        </div>
                                    </li>
                                </div>
                            </li>
                            {/* ------------end Ups menu--------------- */}
                              {/* ------------start Camera menu--------------- */}
                              <li class="dropdown nav-item">
                                <Link style={{ textDecoration: 'none' }} to='/'>
                                    <button class="dropbtn nav-link fw-bold">Office Equipment</button>
                                </Link>
                                <div className='dropdown-content'>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Keyboard</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/micropacks'>< >Micropack</></Link>
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                        </div>
                                    </li>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Keyboard</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/micropacks'>< >Micropack</></Link>
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                        </div>
                                    </li>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Keyboard</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/micropacks'>< >Micropack</></Link>
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                        </div>
                                    </li>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Keyboard</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/micropacks'>< >Micropack</></Link>
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                        </div>
                                    </li>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Keyboard</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/micropacks'>< >Micropack</></Link>
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                        </div>
                                    </li>
                                </div>
                            </li>
                            {/* ------------end Camera menu--------------- */}
                              {/* ------------start software menu--------------- */}
                              <li class="dropdown nav-item">
                                <Link style={{ textDecoration: 'none' }} to='/'>
                                    <button class="dropbtn nav-link fw-bold">Software</button>
                                </Link>
                                <div className='dropdown-content'>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Keyboard</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/micropacks'>< >Micropack</></Link>
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                        </div>
                                    </li>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Keyboard</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/micropacks'>< >Micropack</></Link>
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                        </div>
                                    </li>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Keyboard</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/micropacks'>< >Micropack</></Link>
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                        </div>
                                    </li>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Keyboard</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/micropacks'>< >Micropack</></Link>
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                        </div>
                                    </li>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Keyboard</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/micropacks'>< >Micropack</></Link>
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                        </div>
                                    </li>
                                </div>
                            </li>
                            {/* ------------end Software menu--------------- */}
                              {/* ------------start Storate menu--------------- */}
                              <li class="dropdown nav-item">
                                <Link style={{ textDecoration: 'none' }} to='/'>
                                    <button class="dropbtn nav-link fw-bold">Storate</button>
                                </Link>
                                <div className='dropdown-content'>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Keyboard</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/micropacks'>< >Micropack</></Link>
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                        </div>
                                    </li>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Keyboard</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/micropacks'>< >Micropack</></Link>
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                        </div>
                                    </li>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Keyboard</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/micropacks'>< >Micropack</></Link>
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                        </div>
                                    </li>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Keyboard</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/micropacks'>< >Micropack</></Link>
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                        </div>
                                    </li>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Keyboard</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/micropacks'>< >Micropack</></Link>
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                        </div>
                                    </li>
                                </div>
                            </li>
                            {/* ------------end Storate menu--------------- */}
                              {/* ------------start Sound System menu--------------- */}
                              <li class="dropdown nav-item">
                                <Link style={{ textDecoration: 'none' }} to='/'>
                                    <button class="dropbtn nav-link fw-bold">Sound System</button>
                                </Link>
                                <div className='dropdown-content'>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Keyboard</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/micropacks'>< >Micropack</></Link>
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                        </div>
                                    </li>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Keyboard</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/micropacks'>< >Micropack</></Link>
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                        </div>
                                    </li>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Keyboard</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/micropacks'>< >Micropack</></Link>
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                        </div>
                                    </li>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Keyboard</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/micropacks'>< >Micropack</></Link>
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                        </div>
                                    </li>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Keyboard</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/micropacks'>< >Micropack</></Link>
                                            <Link to='/hikvisions'>< >HikVision</></Link>
                                        </div>
                                    </li>
                                </div>
                            </li>
                            {/* ------------end Sound System menu--------------- */}
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