import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './HikvisionsBuyNow.css';
const HikvisionsBuyNow = () => {

    const [quantity, setQuantity] = useState(1);
    console.log(quantity)
    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prevCount => prevCount - 1);
        }
    }
    const handleIncrement = () => {
        if (quantity < 10) {
            setQuantity(prevCount => prevCount + 1);
        }
    }

    const { hikvisionId } = useParams();
    const [hikvision, setHikvision] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/hikvisions/${hikvisionId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setHikvision(data));
    }, []);

    return (
        <div className='container-xxl'>
            <div className='hikvision-detail-dev-main'>
                <div className='hikvision-detail-dev1'>
                    <img style={{ width: '100%', padding: '40px' }} src={hikvision.img} alt='' />
                </div>
                <div className='hikvision-detail-dev2'>
                    <p style={{ fontSize: '20px' }} className='fw-bold'>{hikvision.model}</p>
                    <div>
                        <p style={{ background: 'rgb(227, 232, 250)', display: 'inline-block', borderRadius: '45px' }} className=' px-2 p-1 me-2'><span className='fw-bold' style={{ color: 'rgb(116, 117, 121)' }}>Price:</span> <span className='fw-bold'>{hikvision.price} Tk</span></p>

                        <p style={{ background: 'rgb(227, 232, 250)', display: 'inline-block', borderRadius: '45px' }} className=' px-2 p-1 me-2'><span className='fw-bold' style={{ color: 'rgb(116, 117, 121)' }}>Product Id:</span> <span className='fw-bold'>{hikvision.productid}</span></p>

                        <p style={{ background: 'rgb(227, 232, 250)', display: 'inline-block', borderRadius: '45px' }} className=' px-2 p-1 me-2'><span className='fw-bold' style={{ color: 'rgb(116, 117, 121)' }}>Status:</span> <span className='fw-bold'>{hikvision.status}</span></p>

                        <p style={{ background: 'rgb(227, 232, 250)', display: 'inline-block', borderRadius: '45px' }} className=' px-2 p-1 me-2'><span className='fw-bold' style={{ color: 'rgb(116, 117, 121)' }}>Brand:</span> <span className='fw-bold'>{hikvision.brand}</span></p>
                    </div>

                    <p className='fw-bold mb-0'>Product Overview</p>
                    <ul>
                        <small><li>{hikvision.facilities1}</li></small>
                        <small><li>{hikvision.facilities2}</li></small>
                        <small><li>{hikvision.facilities3}</li></small>
                        <small><li>{hikvision.facilities4}</li></small>
                    </ul>
                    <p style={{ color: 'rgb(33, 73, 1)' }} className='fw-bold'>Available Product: {hikvision.available} Pisces</p>
                    <div className='row'>
                        <div className='col-md-3 mt-3'>
                            <div className='input-group'>
                                <button onClick={handleDecrement} type='button' className='input-group-text'>-</button>
                                <div className='form-control text-center'>{quantity}</div>
                                <button onClick={handleIncrement} type='button' className='input-group-text'>+</button>
                            </div>
                        </div>
                        <div className='col-md-3 mt-3'>
                            <Link to={`/checkout/${hikvisionId}`}>
                            <button type='text' className='btn btn-primary w-100'>Order Now</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HikvisionsBuyNow;