import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Intel.css';

const IntelCopy = ({ intel }) => {
    const { _id, img, model, price, facilities1, facilities2, facilities3, facilities4 } = intel;

    const navigate = useNavigate();
    const navigateToIntelDetail = _id =>{
        navigate(`/intels/${_id}`);
    }

    return (
        <div className='intel-dev-bg py-1'>
            <div className='intel-dev-copy'>
                <img style={{ height: '230px', width: '248px' }} src={img} alt='' />
                <p className='text-center fw-bold'>Processor</p>
                <h6 onClick={() => navigateToIntelDetail(_id)}  style={{ fontSize: '14px', cursor: 'pointer' }} className='mx-2 mt-2 fw-bold'>{model}</h6>
                <small>
                    <ul>
                        {/* <small><li>{facilities1}</li></small>
                        <small><li>{facilities2}</li></small>
                        <small><li>{facilities3}</li></small>
                        <small><li>{facilities4}</li></small> */}
                    </ul>
                </small>
                <div className='hikvision-btn'>
                    <p className='fw-bold text-center'>Tk {price}</p>
                    {/* <button onClick={() => navigateToIntelDetail(_id)} className=''>Buy Now</button> */}
                </div>
            </div>
        </div>
    );
};

export default IntelCopy;