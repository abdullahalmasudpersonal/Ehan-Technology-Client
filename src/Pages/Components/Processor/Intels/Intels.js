import React, { useEffect, useState } from 'react';
import useIntel from '../../../../Hooks/UseIntel';
import Intel from './Intel/Intel';
import './Intels.css';

const Intels = () => {
    const [intels,setIntels] = useIntel([]);
    /* const [intels, setIntels] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/intels')
            .then(res => res.json())
            .then(data => setIntels(data));
    }, []); */

    return (
        <div style={{ background: 'rgb(215, 219, 228)' }}>
            <div className='container-xxl'>
                <div className='ms-1 intels-dev py-5'>
                    {
                        intels.map(intel => <Intel key={intel._id} intel={intel} ></Intel>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Intels;