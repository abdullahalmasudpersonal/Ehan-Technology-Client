import React, { useEffect, useState } from 'react';
import useAMD from '../../../../Hooks/UseAMD';
import AMD from './AMD/AMD';
import './AMDS.css';

const AMDS = () => {
    const [amds, setAmds] = useAMD([]);
    /* const [amds, setAmds] = useState([]);

    useEffect( () =>{
        fetch('processorAMD.json')
        .then(res => res.json())
        .then(data => setAmds(data))
    },[]); */

    return (
        <div style={{ background: 'rgb(215, 219, 228)' }}>
            <div className='container-xxl'>
                <div className='ms-1 amds-dev py-5'>
                    {
                        amds.map(amd => <AMD key={amd._id} amd={amd}></AMD>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AMDS;