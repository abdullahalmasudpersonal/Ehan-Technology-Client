import React, { useEffect, useState } from 'react';
import useMicropack from '../../../../Hooks/useMicropack';
import Micropack from './Micropack/Micropack';
import './Micropacks.css';

const Micropacks = () => {
    const [micropacks, setMicropacks] = useMicropack([]);
   /*  const [micropacks, setMicropacks] = useState([]);

    useEffect(() => {
        fetch('https://pacific-temple-58154.herokuapp.com/micropacks')
            .then(res => res.json())
            .then(data => setMicropacks(data));
    }, []); */

    return (
        <dvi style={{background:'rgb(215, 219, 228)'}}>
            <div className='container-xxl'>
                <div className='ms-1 micropacks-dev py-5'>
                    {
                        micropacks.map(micropack => <Micropack key={micropack._id} micropack={micropack}></Micropack>)
                    }
                </div>
            </div>
        </dvi>
    );
};

export default Micropacks;