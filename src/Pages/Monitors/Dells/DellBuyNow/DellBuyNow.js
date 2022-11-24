import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './DellBuyNow.css';

const DellBuyNow = () => {
    const {dellId} = useParams();
    const [dell, setDell] = useState({});
    useEffect( ()=>{
        const url =`https://pacific-temple-58154.herokuapp.com/monitor-dells/${dellId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setDell(data));
    },[]);

    return (
        <div className='container-xxl'>
            <div className='dell-detail-dev-main'>
                <div className='dell-detail-dev1'>
                    <img style={{ width: '100%', padding: '40px' }} src={dell.img} alt='' />
                </div>
                <div className='dell-detail-dev2'>
                    <p style={{ fontSize: '20px' }} className='fw-bold'>{dell.model}</p>
                    <div>
                        <p style={{ background: 'rgb(227, 232, 250)', display: 'inline-block', borderRadius: '45px' }} className=' px-2 p-1 me-2'><span className='fw-bold' style={{ color: 'rgb(116, 117, 121)' }}>Price:</span> <span className='fw-bold'>{dell.price} Tk</span></p>

                        <p style={{ background: 'rgb(227, 232, 250)', display: 'inline-block', borderRadius: '45px' }} className=' px-2 p-1 me-2'><span className='fw-bold' style={{ color: 'rgb(116, 117, 121)' }}>Product Id:</span> <span className='fw-bold'>{dell.productid}</span></p>

                        <p style={{ background: 'rgb(227, 232, 250)', display: 'inline-block', borderRadius: '45px' }} className=' px-2 p-1 me-2'><span className='fw-bold' style={{ color: 'rgb(116, 117, 121)' }}>Status:</span> <span className='fw-bold'>{dell.status}</span></p>

                        <p style={{ background: 'rgb(227, 232, 250)', display: 'inline-block', borderRadius: '45px' }} className=' px-2 p-1 me-2'><span className='fw-bold' style={{ color: 'rgb(116, 117, 121)' }}>Brand:</span> <span className='fw-bold'>{dell.brand}</span></p>
                    </div>

                    <p className='fw-bold mb-0'>Product Overview</p>
                    <ul>
                        <small><li>{dell.facilities1}</li></small>
                        <small><li>{dell.facilities2}</li></small>
                        <small><li>{dell.facilities3}</li></small>
                        <small><li>{dell.facilities4}</li></small>
                    </ul>
                    <p style={{ color: 'rgb(33, 73, 1)' }} className='fw-bold'>Available Product: {dell.available} Pisces</p>

                    <button class="btn btn-default"><i class="fas fa-minus"></i></button>

                    <input id='case-number' type='number' className='from-control text-center w-25' min='1' />

                    <button id='case-plus' class="btn btn-default"><i class="fas fa-plus"></i></button>
                </div>
            </div>
        </div>
    );
};

export default DellBuyNow;