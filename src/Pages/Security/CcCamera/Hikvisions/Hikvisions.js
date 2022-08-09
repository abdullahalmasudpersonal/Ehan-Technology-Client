import React, { useEffect, useState } from 'react';
import useHikvision from '../../../../Hooks/UseHikvision';
import Hikvision from './Hikvision/Hikvision';
import './Hikvisions.css';

const Hikvisions = () => {
    const [hikvisions, setHikvisions] = useHikvision([]);

    return (
        <div style={{background:'rgb(215, 219, 228)'}}>
            <div className='container-xxl'>
                <div className='ms-1 hikvisions-dev py-5'>
                    {
                        hikvisions.map(hikvision => <Hikvision key={hikvision._id} hikvision={hikvision}></Hikvision>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Hikvisions;