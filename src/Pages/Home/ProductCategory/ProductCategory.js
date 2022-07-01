import React from 'react';
import './ProductCategory.css';
import { Link } from 'react-router-dom';
import Desktop from '../../../assets/img/Product-category/pc.png';
import Laptop from '../../../assets/img/Product-category/laptop.png';
import Monitor from '../../../assets/img/Product-category/monitor.png';
import Camera from '../../../assets/img/Product-category/web-cam.png';
import Router from '../../../assets/img/Product-category/wifi-router.png';
import Processor from '../../../assets/img/Product-category/cpu.png';
import Storage from '../../../assets/img/Product-category/ssd.png';
import Speaker from '../../../assets/img/Product-category/sound-system.png';
import HeadPhone from '../../../assets/img/Product-category/headphones.png';
import Ram from '../../../assets/img/Product-category/ram.png';
import Keybord from '../../../assets/img/Product-category/keyboard.png';
import Converter from '../../../assets/img/Product-category/converter.png';
import Software from '../../../assets/img/Product-category/software.png';
import GPU from '../../../assets/img/Product-category/graphics-card.png';
import EthernetCable from '../../../assets/img/Product-category/ethernet-cable.png';
import Casing from '../../../assets/img/Product-category/casing.png';

const ProductCategory = () => {
    return (
        <div className='pro-category-bg'>
            <div className='container pb-5'>
                <div className='catagory-head pt-5 pb-5'>
                    <div className=' catagory-head-h5'>
                        <h5 className=' fw-bold text-center'>Porduct catagory</h5>
                    </div>
                </div>
                <div>
                    <hr className='category-hr rounded mx-5' />
                </div>
                <div className='pro-category-flex'>
                    <Link to="">
                        <div className='pro-category-dev'>
                            <div className='pro-category-font py-3'>
                                <img src={Desktop} width='50px' alt='' />
                            </div>
                            <div>
                                <h5 className='text-center'>Desktop</h5>
                            </div>
                        </div>
                    </Link>
                    <div className='pro-category-dev'>
                        <div className='pro-category-font py-3'>
                            <img src={Laptop} width='50px' alt='' />
                        </div>
                        <div>
                            <h5 className='text-center'>Laptop</h5>
                        </div>
                    </div>
                    <div className='pro-category-dev'>
                        <div className='pro-category-font py-3'>
                            <img src={Monitor} width='50px' alt='' />
                        </div>
                        <div>
                            <h5 className='text-center'>Monitor</h5>
                        </div>
                    </div>
                    <div className='pro-category-dev'>
                        <div className='pro-category-font py-3'>
                            <img src={Camera} width='50px' alt='' />
                        </div>
                        <div>
                            <h5 className='text-center'>Camera</h5>
                        </div>
                    </div>
                    <div className='pro-category-dev'>
                        <div className='pro-category-font py-3'>
                            <img src={Router} width='50px' alt='' />
                        </div>
                        <div>
                            <h5 className='text-center'>Router</h5>
                        </div>
                    </div>
                    <div className='pro-category-dev'>
                        <div className='pro-category-font py-3'>
                            <img src={Processor} width='50px' alt='' />
                        </div>
                        <div>
                            <h5 className='text-center'>Processor</h5>
                        </div>
                    </div>
                    <div className='pro-category-dev'>
                        <div className='pro-category-font py-3'>
                            <img src={Storage} width='50px' alt='' />
                        </div>
                        <div>
                            <h5 className='text-center'>Storage</h5>
                        </div>
                    </div>
                    <div className='pro-category-dev'>
                        <div className='pro-category-font py-3'>
                            <img src={Speaker} width='50px' alt='' />
                        </div>
                        <div>
                            <h5 className='text-center'>Speaker</h5>
                        </div>
                    </div>
                    <div className='pro-category-dev'>
                        <div className='pro-category-font py-3'>
                            <img src={HeadPhone} width='50px' alt='' />
                        </div>
                        <div>
                            <h5 className='text-center'>HeadPhone</h5>
                        </div>
                    </div>
                    <div className='pro-category-dev'>
                        <div className='pro-category-font py-3'>
                            <img src={Ram} width='50px' alt='' />
                        </div>
                        <div>
                            <h5 className='text-center'>Ram</h5>
                        </div>
                    </div>
                    <div className='pro-category-dev'>
                        <div className='pro-category-font py-3'>
                            <img src={Keybord} width='50px' alt='' />
                        </div>
                        <div>
                            <h5 className='text-center'>Keybord</h5>
                        </div>
                    </div>
                    <div className='pro-category-dev'>
                        <div className='pro-category-font py-3'>
                            <img src={Converter} width='50px' alt='' />
                        </div>
                        <div>
                            <h5 className='text-center'>Converter</h5>
                        </div>
                    </div>
                    <div className='pro-category-dev'>
                        <div className='pro-category-font py-3'>
                            <img src={Software} width='50px' alt='' />
                        </div>
                        <div>
                            <h5 className='text-center'>Software</h5>
                        </div>
                    </div>
                    <div className='pro-category-dev'>
                        <div className='pro-category-font py-3'>
                            <img src={GPU} width='50px' alt='' />
                        </div>
                        <div>
                            <h5 className='text-center'>GPU</h5>
                        </div>
                    </div>
                    <div className='pro-category-dev'>
                        <div className='pro-category-font py-3'>
                            <img src={EthernetCable} width='50px' alt='' />
                        </div>
                        <div>
                            <h5 className='text-center'>Cable</h5>
                        </div>
                    </div>
                    <div className='pro-category-dev'>
                        <div className='pro-category-font py-3'>
                            <img src={Casing} width='50px' alt='' />
                        </div>
                        <div>
                            <h5 className='text-center'>Casing</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCategory;