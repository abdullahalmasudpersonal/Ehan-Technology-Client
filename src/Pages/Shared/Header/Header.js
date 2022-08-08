import React from 'react';
import './Header.css';
import logoName from '../../../assets/img/logo/logo&name.png';
import account from '../../../assets/img/profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

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
                                                <a>Brand PC
                                                </a>
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
                                                <a>Gaming PC</a>
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
                                                <a>All In One PC</a>
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
                                                <a>Apple PC</a>
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
                                                <a>Budget PC</a>
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
                                                <a>All Laptop</a>
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
                                                <a>Gaming Laptop</a>
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
                                                <a>Laptop Ram</a>
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
                                                <a>Laptop Battery</a>
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
                                                <a>Laptop Cooler</a>
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
                                                <a>Laptop Bag</a>
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
                                                <a>Laptop Accessories</a>
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
                                <Link style={{ textDecoration: 'none' }} to='/monitors'>
                                    <button class="dropbtn nav-link fw-bold">Monitor</button>
                                </Link>
                                <div className='dropdown-content'>
                                    <li className='dropdown2'>
                                        <Link to='/dells'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Dell</a>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Samsung</a>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>HP</a>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Asus</a>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>LG</a>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Huawei</a>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Acer</a>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Gigabite</a>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Lenovo</a>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Walton</a>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Sony</a>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Benq</a>
                                            </div>
                                        </Link>
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
                                            <Link to='/intels'>< >Intel</></Link>
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
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Casing Cooler</a>
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
                                        <Link to='/router'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Router</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/tplinks'>< >TP-Link</></Link>
                                            <Link to='/hikvisions'>< >D-Link</></Link>
                                            <Link to='/hikvisions'>< >Asus</></Link>
                                            <Link to='/hikvisions'>< >Tenda</></Link>
                                            <Link to='/hikvisions'>< >Huawei</></Link>
                                            <Link to='/hikvisions'>< >MI</></Link>
                                        </div>
                                    </li>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>LAN Card</a>
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
                                                <a>Network Cable</a>
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
                                                <a>Network Tools</a>
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
                                                <a>Network Accessories</a>
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
                                                <a>Network Switch</a>
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
                                                <a>Access Point</a>
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
                                                <a>Network Other</a>
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
                                <Link style={{ textDecoration: 'none' }} to='/officeEquipment'>
                                    <button class="dropbtn nav-link fw-bold">Office Equipment</button>
                                </Link>
                                <div className='dropdown-content'>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Printer</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/micropacks'>< >HP</></Link>
                                            <Link to='/hikvisions'>< >Cannon</></Link>
                                            <Link to='/hikvisions'>< >Samsung</></Link>
                                            <Link to='/hikvisions'>< >Epson</></Link>
                                            <Link to='/hikvisions'>< >Brother</></Link>
                                        </div>
                                    </li>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Scaner</a>
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
                                                <a>Photocopier</a>
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
                                                <a>Label Printer</a>
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
                                                <a>Projector</a>
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
                                                <a>POS Printer</a>
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
                                                <a>Card Printer</a>
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
                                                <a>Printer Paper</a>
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
                                                <a>Cartridge</a>
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
                                                <a>Toner</a>
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
                                                <a>Ribbon</a>
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
                                                <a>Mouse Pad</a>
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
                                    <li className='dropdown2'>
                                        <Link to='/security-cc-camera'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>USB Cable</a>
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
                                                <a>Sata Cable</a>
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
                                                <a>VGA Cable</a>
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
                                                <a>HDMI Cable</a>
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
                                                <a>Power Cable</a>
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
                                                <a>TV Card</a>
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
                                                <a>Power Strip</a>
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
                                                <a>Power Adapter</a>
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
                                                <a>Wireless Camera </a>
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
                                    <li class="dropdown2">
                                        <Link to='/security-cc-camera'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>Door Lock</a>
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
                                                <a>Access Control</a>
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
                                                <a>Access Control Accessories</a>
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
                                                <a>CC Camera Accessories</a>
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
                                </div>
                            </li>
                            {/* ------------end security menu--------------- */}
                            {/* ------------start IPS/Ups menu--------------- */}
                            <li class="dropdown nav-item">
                                <Link style={{ textDecoration: 'none' }} to='/'>
                                    <button class="dropbtn nav-link fw-bold">IPS & UPS</button>
                                </Link>
                                <div className='dropdown-content'>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>UPS</a>
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
                                                <a>IPS</a>
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
                                                <a>UPS Battery</a>
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
                                                <a>IPS Battery</a>
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
                                                <a>Stabilizer</a>
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
                            {/* ------------end Ups/ips menu--------------- */}
                            {/* ------------start Converter menu--------------- */}
                            <li class="dropdown nav-item">
                                <Link style={{ textDecoration: 'none' }} to='/'>
                                    <button class="dropbtn nav-link fw-bold">Converter</button>
                                </Link>
                                <div className='dropdown-content'>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>HDMI Converter</a>
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
                                                <a>VGA Converter</a>
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
                                                <a>USB Converter</a>
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
                                                <a>Type-C Converter</a>
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
                                                <a>USB HUB</a>
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
                                                <a>Audio Converter</a>
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
                                                <a>Other Converter</a>
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
                            {/* ------------end converter menu--------------- */}
                            {/* ------------start software menu--------------- */}
                            {/* <li class="dropdown nav-item">
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
                            </li> */}
                            {/* ------------end Software menu--------------- */}
                            {/* ------------start Storate menu--------------- */}
                            <li class="dropdown nav-item">
                                <Link style={{ textDecoration: 'none' }} to='/storage'>
                                    <button class="dropbtn nav-link fw-bold">Storage</button>
                                </Link>
                                <div className='dropdown-content'>
                                    <li className='dropdown2'>
                                        <Link to='/storage'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>SSD</a>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                            </div>
                                        </Link>
                                        <div class="dropdown-content2">
                                            <Link to='/micropacks'>< >HP</></Link>
                                            <Link to='/hikvisions'>< >ADATA</></Link>
                                            <Link to='/hikvisions'>< >Samsung</></Link>
                                            <Link to='/hikvisions'>< >Intel</></Link>
                                            <Link to='/hikvisions'>< >Walton</></Link>
                                            <Link to='/hikvisions'>< >PNY</></Link>
                                        </div>
                                    </li>
                                    <li className='dropdown2'>
                                        <Link to='/keyboard'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <a>HDD</a>
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
                                                <a>External SSD</a>
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
                                                <a>External HDD</a>
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
                                                <a>Pen Drive</a>
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
                                                <a>Memory Card</a>
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
                                                <a>Speaker</a>
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
                                                <a>Bluetooth Speaker</a>
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
                                                <a>Voice Recorder</a>
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
                                                <a>Radio</a>
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
                                                <a>Sound Card</a>
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