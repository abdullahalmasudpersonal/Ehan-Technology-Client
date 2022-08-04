import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Micropack.css';

const Micropack = ({ micropack }) => {
    const { _id, img, model, price, facilities1, facilities2, facilities3, facilities4 } = micropack;

    const navigate = useNavigate();
    const navigateToMicropackDetail = _id => {
        navigate(`/micropacks/${_id}`);
    }

    return (
        <div className='micropack-dev-bg py-1'>
            <div className='micropack-dev-copy'>
                <img style={{ height: '230px', width: '248px' }} src={img} alt='' />
                <p className='text-center fw-bold'>Keyboard</p>
                <h6 onClick={() => navigateToMicropackDetail(_id)} style={{ fontSize: '14px', cursor: 'pointer' }} className='mx-2 mt-2 fw-bold'>{model}</h6>
                <small>
                    {/* <ul>
                            <small><li>{facilities1}</li></small>
                            <small><li>{facilities2}</li></small>
                            <small><li>{facilities3}</li></small>
                            <small><li>{facilities4}</li></small>
                        </ul> */}
                </small>
                <div className='micropack-btn'>
                    <p className='fw-bold text-center'>Tk {price}</p>
                    {/*          <button onClick={() => navigateToMicropackDetail(_id)} className=''>Buy Now</button> */}
                </div>
            </div>
        </div>
    );
};

export default Micropack;