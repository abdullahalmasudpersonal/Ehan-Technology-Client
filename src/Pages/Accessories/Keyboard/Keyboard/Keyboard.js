import React from 'react';
import useMicropack from '../../../../Hooks/useMicropack';
import Micropack from '../Micropacks/Micropack/Micropack';
import './Keyboard.css';

const Keyboard = () => {
    const [micropacks, setMicropacks] = useMicropack([]);

    return (
        <div className='container-xxl'>
            <div className='router-dev py-5'>
                {
                    micropacks.map(micropack => <Micropack key={micropack._id} micropack={micropack}></Micropack>)
                }
            </div>
        </div>
    );
};

export default Keyboard;