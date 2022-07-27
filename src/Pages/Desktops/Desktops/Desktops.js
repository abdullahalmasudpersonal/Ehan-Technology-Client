import React, { useEffect, useState } from 'react';
import Hikvision from '../../Security/CcCamera/CcCamera/Hikvisions/Hikvision/Hikvision';
import './Desktops.css';

const Desktops = () => {
    const [hikvisions, setHikvisions] = useState([]);

    useEffect(() => {
        fetch('Hikvision.json')
            .then(res => res.json())
            .then(data => setHikvisions(data));
    }, []);
    return (
       /*  <div className='container-xxl '>
            <div className='ms-1'>
            <h3>Desktops</h3>

            </div>
        </div> */


        <div className='container-xxl'>
            <div className='ms-1 hikvisions-dev'>
                {
                    hikvisions.map(hikvision => <Hikvision key={hikvision._id} hikvision={hikvision}></Hikvision>)
                }
            </div>
        </div>
    );
};

export default Desktops;