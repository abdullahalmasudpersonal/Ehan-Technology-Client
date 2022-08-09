import React from 'react';
import useSSDHP from '../../../../Hooks/UseSSDHP';
import SSDHP from '../SSDHPS/SSDHP/SSDHP';

const SSD = () => {
    const [ssdhps, setSsdhps] = useSSDHP([]);

    return (
        <div className='container-xxl'>
            <div className='router-dev py-5'>
                {
                    ssdhps.map(ssdhp => <SSDHP key={ssdhp._id} ssdhp={ssdhp}></SSDHP>)
                }
            </div>
        </div>
    );
};

export default SSD;