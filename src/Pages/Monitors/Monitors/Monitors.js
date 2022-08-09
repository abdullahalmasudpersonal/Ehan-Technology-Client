import React from 'react';
import useMonitorDell from '../../../Hooks/UseMonitorDell';
import Dell from '../Dells/Dell/Dell';
import './Monitors.css';

const Monitors = () => {
    const [monitorDells, setMonitorDells] = useMonitorDell([]);

    return (
        <div className='container-xxl'>
            <div className='router-dev py-5'>
                {
                    monitorDells.map(monitorDell => <Dell key={monitorDell._id} monitorDell={monitorDell}></Dell>)
                }
            </div>
        </div>
    );
};

export default Monitors;