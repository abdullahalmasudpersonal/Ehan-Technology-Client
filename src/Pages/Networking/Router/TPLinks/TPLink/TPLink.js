import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TPLink.css';

const TpLink = ({ tplink }) => {
    const { _id, img, model, price, facilities1, facilities2, facilities3, facilities4 } = tplink;

    const navigate = useNavigate();
    const navigateToTPLinkDetail = _id => {
        navigate(`/tplinks/${_id}`);
    }

    return (
        <div>
            <div className='tplink-dev-bg py-1'>
                <div className='tplink-dev'>
                    <img style={{ height: '230px', width: '248px' }} src={img} alt='' />
                    <h6 onClick={() => navigateToTPLinkDetail(_id)} style={{ fontSize: '14px', cursor: 'pointer' }} className='mx-2 mt-2 fw-bold'>{model}</h6>
                    <small>
                        <ul>
                            <small><li>{facilities1}</li></small>
                            <small><li>{facilities2}</li></small>
                            <small><li>{facilities3}</li></small>
                            <small><li>{facilities4}</li></small>
                        </ul>
                    </small>
                    <div className='tplink-btn'>
                        <p className='fw-bold text-center'>Tk {price}</p>
                        <button onClick={() => navigateToTPLinkDetail(_id)} className=''>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TpLink;