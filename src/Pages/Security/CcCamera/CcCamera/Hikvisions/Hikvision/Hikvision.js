import React from 'react';
import './Hikvision.css';

const Hikvision = ({ hikvision }) => {
    const { _id, img, Model, Price, Facilities1, Facilities2, Facilities3, Facilities4 } = hikvision;
    return (
        <div>
            <div className='hikvision-dev-bg py-1'>
                <div className='hikvision-dev'>
                    <img style={{ height: '230px', width: '248px' }} src={img} alt='' />
                        <h6 style={{fontSize:'14px'}} className='mx-2 mt-2 fw-bold'>{Model}</h6>
                    <small>
                        <ul>
                            <small><li>{Facilities1}</li></small>
                            <small><li>{Facilities2}</li></small>
                            <small><li>{Facilities3}</li></small>
                            <small><li>{Facilities4}</li></small>
                        </ul>
                    </small>
                    <div className='hikvision-btn'>
                        <p className='fw-bold text-center'>Tk {Price}</p>
                        <button className=''>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hikvision;