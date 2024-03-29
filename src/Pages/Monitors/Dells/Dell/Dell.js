import React from 'react';
import './Dell.css';
import { useNavigate } from 'react-router-dom';

const Dell = ({monitorDell}) => {
    const { _id, img, model, price, facilities1, facilities2, facilities3, facilities4 } = monitorDell;

    const navigate = useNavigate();
    const navigateToDellDetail = _id => {
        navigate(`/monitor-dells/${_id}`);
    }

    return (
        <div className='dell-dev-bg py-1'>
                <div className='dell-dev'>
                    <img style={{ height: '230px', width: '248px' }} src={img} alt='' />
                        <h6 onClick={() => navigateToDellDetail(_id)} style={{fontSize:'14px', cursor:'pointer'}} className='mx-2 mt-2 fw-bold'>{model}</h6>
                    <small>
                        <ul>
                            <small><li>{facilities1}</li></small>
                            <small><li>{facilities2}</li></small>
                            <small><li>{facilities3}</li></small>
                            <small><li>{facilities4}</li></small>
                        </ul>
                    </small>
                    <div className='dell-btn'>
                        <p className='fw-bold text-center'>Tk {price}</p>
                        <button onClick={() => navigateToDellDetail(_id)} className=''>Buy Now</button>
                    </div>
                </div>
            </div>
    );
};

export default Dell;