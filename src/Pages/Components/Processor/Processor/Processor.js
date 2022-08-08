import React from 'react';
import useAMD from '../../../../Hooks/UseAMD';
import useIntel from '../../../../Hooks/UseIntel';
import AMD from '../AMDS/AMD/AMD';
import Intel from '../Intels/Intel/Intel';
import './Processor.css';

const Processor = () => {
    const [intels, setIntels] = useIntel([]);
    const [amds, setAmds] = useAMD([]);

    return (
        <div className='container-xxl'>
            <div className='router-dev py-5'>
                {
                    intels.map(intel => <Intel key={intel._id} intel={intel} ></Intel>)
                }
                {
                    amds./* slice(3, 4). */map(amd => <AMD key={amd._id} amd={amd}></AMD>)
                }
            </div>
        </div>
    );
};

export default Processor;