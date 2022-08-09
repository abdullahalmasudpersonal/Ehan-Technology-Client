import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SSDHP.css';

const SSDHP = ({ssdhp}) => {
    const { _id, img, model, price, facilities1, facilities2, facilities3, facilities4 } = ssdhp;

    const navigate = useNavigate();
    const navigateToHikvisionDetail = _id => {
        navigate(`/ssd-hps/${_id}`);
    }

    return (
        <div className='ssdhp1-dev-bg py-1'>
            <div className='ssdhp1-dev'>
                <img style={{ height: '230px', width: '248px' }} src={img} alt='' />
                <h6 onClick={() => navigateToHikvisionDetail(_id)} style={{ fontSize: '14px', cursor: 'pointer' }} className='mx-2 mt-2 fw-bold'>{model}</h6>
                <small>
                    <ul>
                        <small><li>{facilities1}</li></small>
                        <small><li>{facilities2}</li></small>
                        <small><li>{facilities3}</li></small>
                        <small><li>{facilities4}</li></small>
                    </ul>
                </small>
                <div className='ssdhp1-btn'>
                    <p className='fw-bold text-center'>Tk {price}</p>
                    <button onClick={() => navigateToHikvisionDetail(_id)} className=''>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default SSDHP;