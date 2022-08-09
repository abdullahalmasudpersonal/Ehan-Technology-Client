import React from 'react';
import useSSDHP from '../../../../Hooks/UseSSDHP';
import SSDHP from './SSDHP/SSDHP';
import './SSDHPS.css';

const SSDHPS = () => {
    const [ssdhps, setSsdhps] = useSSDHP([]);

    return (
        <div style={{background:'rgb(215, 219, 228)'}}>
        <div className='container-xxl'>
            <div className='ms-1 ssdhp-dev py-5'>
                {
                    ssdhps.map(ssdhp => <SSDHP key={ssdhp._id} ssdhp={ssdhp}></SSDHP>)
                }
            </div>
        </div>
    </div>
    );
};

export default SSDHPS;