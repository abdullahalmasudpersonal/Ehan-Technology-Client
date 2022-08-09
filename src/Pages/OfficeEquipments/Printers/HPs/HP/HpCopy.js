import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hp.css';

const HpCopy = ({printerhp}) => {
    const { _id, img, model, price, facilities1, facilities2, facilities3, facilities4 } = printerhp;

    const navigate = useNavigate();
    const navigateToHikvisionDetail = _id => {
        navigate(`/printer-hps/${_id}`);
    }


    return (
        <div className='printerhp1-dev-bg py-1'>
            <div className='printerhp1-dev-copy'>
                <img style={{ height: '230px', width: '248px' }} src={img} alt='' />
                <p className='text-center fw-bold'>Printer</p>
                <h6 onClick={() => navigateToHikvisionDetail(_id)} style={{ fontSize: '14px', cursor: 'pointer' }} className='mx-2 mt-2 fw-bold'>{model}</h6>
                <small>
                  {/*   <ul>
                        <small><li>{facilities1}</li></small>
                        <small><li>{facilities2}</li></small>
                        <small><li>{facilities3}</li></small>
                        <small><li>{facilities4}</li></small>
                    </ul> */}
                </small>
                <div className='hikvision-btn'>
                    <p className='fw-bold text-center'>Tk {price}</p>
                    {/* <button onClick={() => navigateToHikvisionDetail(_id)} className=''>Buy Now</button> */}
                </div>
            </div>
        </div>
    );
};

export default HpCopy;