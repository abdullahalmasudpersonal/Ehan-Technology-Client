import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DigitalX.css';

const DigitalXCopy = ({speakerDigitalX}) => {
    const { _id, img, model, price, facilities1, facilities2, facilities3, facilities4 } = speakerDigitalX;

    const navigate = useNavigate();
    const navigateToSpeakerDigitalXDetail = _id => {
        navigate(`/speakerDigitalXs/${_id}`);
    }

    return (
        <div className='speakerDigitalx-dev-bg py-1'>
            <div className='speakerDigitalx-dev-copy'>
                <img style={{ height: '230px', width: '248px' }} src={img} alt='' />
                <p className='text-center fw-bold'>Sound System</p>
                <h6 onClick={() => navigateToSpeakerDigitalXDetail(_id)} style={{ fontSize: '14px', cursor: 'pointer' }} className='mx-2 mt-2 fw-bold'>{model}</h6>
                <small>
                  {/*   <ul>
                        <small><li>{facilities1}</li></small>
                        <small><li>{facilities2}</li></small>
                        <small><li>{facilities3}</li></small>
                        <small><li>{facilities4}</li></small>
                    </ul> */}
                </small>
                <div className='speakerDigitalx-btn'>
                    <p className='fw-bold text-center'>Tk {price}</p>
                   {/*  <button onClick={() => navigateToSpeakerDigitalXDetail(_id)} className=''>Buy Now</button> */}
                </div>
            </div>
        </div>
    );
};

export default DigitalXCopy;