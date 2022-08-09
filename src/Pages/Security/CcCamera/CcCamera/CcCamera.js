import React from 'react';
import useHikvision from '../../../../Hooks/UseHikvision';
import Hikvision from '../Hikvisions/Hikvision/Hikvision';
import './CcCamera.css';

const CcCamera = () => {
    const [hikvisions, setHikvisions] = useHikvision([]);

    return (
        <div className='container-xxl'>
            <div className='router-dev py-5'>
                {
                    hikvisions.map(hikvision => <Hikvision key={hikvision._id} hikvision={hikvision}></Hikvision>)
                }
            </div>
        </div>
    );
};

export default CcCamera;