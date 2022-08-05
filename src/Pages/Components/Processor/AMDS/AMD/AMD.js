import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AMD.css';

const AMD = ({ amd }) => {
    const { _id, img, model, price, facilities1, facilities2, facilities3, facilities4 } = amd;

    const navigate = useNavigate();
    const navigateToAMDDetail = _id => {
        navigate(`/amds/${_id}`);
    }

    return (
        <div className='amd-dev-bg py-1'>
            <div className='amd-dev'>
                <img style={{ height: '230px', width: '248px' }} src={img} alt='' />
                <h6 onClick={() => navigateToAMDDetail(_id)} style={{ fontSize: '14px', cursor: 'pointer' }} className='mx-2 mt-2 fw-bold'>{model}</h6>
                <small>
                    <ul>
                        <small><li>{facilities1}</li></small>
                        <small><li>{facilities2}</li></small>
                        <small><li>{facilities3}</li></small>
                        <small><li>{facilities4}</li></small>
                    </ul>
                </small>
                <div className='amd-btn'>
                    <p className='fw-bold text-center'>Tk {price}</p>
                    <button onClick={() => navigateToAMDDetail(_id)} className=''>Buy Now</button>
                </div>
            </div>

        </div>
    );
};

export default AMD;