import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Adata.css';

const Adata = ({adata}) => {

    const { _id, img, model, price, facilities1, facilities2, facilities3, facilities4 } = adata;

    const navigate = useNavigate();
    const navigateToAdataDetail = _id => {
        navigate(`/ram-adatas/${_id}`);
    }

    return (
        <div className='ram-adata-dev-bg py-1'>
            <div className='ram-adata-dev'>
                <img style={{ height: '230px', width: '248px' }} src={img} alt='' />
                <h6 onClick={() => navigateToAdataDetail(_id)} style={{ fontSize: '14px', cursor: 'pointer' }} className='mx-2 mt-2 fw-bold'>{model}</h6>
                <small>
                    <ul>
                        <small><li>{facilities1}</li></small>
                        <small><li>{facilities2}</li></small>
                        <small><li>{facilities3}</li></small>
                        <small><li>{facilities4}</li></small>
                    </ul>
                </small>
                <div className='ram-adata-btn'>
                    <p className='fw-bold text-center'>Tk {price}</p>
                    <button onClick={() => navigateToAdataDetail(_id)} className=''>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Adata;