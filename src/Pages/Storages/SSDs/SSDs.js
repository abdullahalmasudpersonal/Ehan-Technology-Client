import React from 'react';
import useSSDHP from '../../../Hooks/UseSSDHP';
import SSD from './SSD/SSD';
import './SSDs.css';

const SSDs = () => {
    const [ssdhps, setSsdhps] = useSSDHP([]);

    return (
        <div style={{background:'rgb(215, 219, 228)'}}>
        <div className='container-xxl'>
            <div className='ms-1 ssdhp-dev py-5'>
                {
                    ssdhps.map(ssdhp => <SSD key={ssdhp._id} ssdhp={ssdhp}></SSD>)
                }
            </div>
        </div>
    </div>
    );
};

export default SSDs;