import React from 'react';
import './Dells.css';
import useMonitorDell from '../../../Hooks/UseMonitorDell';
import Dell from './Dell/Dell';

const Dells = () => {
    const [monitorDells, setMonitorDells] = useMonitorDell([]);

    return (
        <div style={{background:'rgb(215, 219, 228)'}}>
            <div className='container-xxl'>
                <div className='ms-1 dells-dev py-5'>
                    {
                        monitorDells.map(monitorDell => <Dell key={monitorDell._id} monitorDell={monitorDell}></Dell>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Dells;