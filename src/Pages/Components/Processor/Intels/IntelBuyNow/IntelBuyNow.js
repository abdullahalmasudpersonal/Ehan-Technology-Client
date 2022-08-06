import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './IntelBuyNow.css';

const IntelBuyNow = () => {
    const { intelId } = useParams([]);
    const [intel, setIntel] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/intels/${intelId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setIntel(data));
    }, [])

    return (
        <div className='container-xxl'>
            <div className='intel-detail-dev-main'>
                <div className='intel-detail-dev1'>
                    <img style={{ width: '100%', padding: '40px' }} src={intel.img} alt='' />
                </div>
                <div className='intel-detail-dev2'>
                    <p style={{ fontSize: '20px' }} className='fw-bold'>{intel.model}</p>
                    <div>
                        <p style={{ background: 'rgb(227, 232, 250)', display: 'inline-block', borderRadius: '45px' }} className=' px-2 p-1 me-2'><span className='fw-bold' style={{ color: 'rgb(116, 117, 121)' }}>Price:</span> <span className='fw-bold'>{intel.price} Tk</span></p>

                        <p style={{ background: 'rgb(227, 232, 250)', display: 'inline-block', borderRadius: '45px' }} className=' px-2 p-1 me-2'><span className='fw-bold' style={{ color: 'rgb(116, 117, 121)' }}>Product Id:</span> <span className='fw-bold'>{intel.productid}</span></p>

                        <p style={{ background: 'rgb(227, 232, 250)', display: 'inline-block', borderRadius: '45px' }} className=' px-2 p-1 me-2'><span className='fw-bold' style={{ color: 'rgb(116, 117, 121)' }}>Status:</span> <span className='fw-bold'>{intel.status}</span></p>

                        <p style={{ background: 'rgb(227, 232, 250)', display: 'inline-block', borderRadius: '45px' }} className=' px-2 p-1 me-2'><span className='fw-bold' style={{ color: 'rgb(116, 117, 121)' }}>Brand:</span> <span className='fw-bold'>{intel.brand}</span></p>
                    </div>
                    <p className='fw-bold mb-0'>Product Overview</p>
                    <ul>
                        <small><li>{intel.facilities1}</li></small>
                        <small><li>{intel.facilities2}</li></small>
                        <small><li>{intel.facilities3}</li></small>
                        <small><li>{intel.facilities4}</li></small>
                    </ul>
                    <p style={{ color: 'rgb(33, 73, 1)' }} className='fw-bold'>Available Product: {intel.available} Pisces</p>

                    <button class="btn btn-default"><i class="fas fa-minus"></i></button>

                    <input id='case-number' type='number' className='from-control text-center w-25' min='1' />

                    <button id='case-plus' class="btn btn-default"><i class="fas fa-plus"></i></button>
                </div>

            </div>

        </div>
    );
};

export default IntelBuyNow;