import React, { useEffect, useState } from 'react';
import useTpLink from '../../../../Hooks/UseTPLink';
import TPLink from './TPLink/TPLink';
import './TPLinks.css';

const TPLinks = () => {
    const [tpLinks, setTPLinks] = useTpLink([]);
    /* const [tpLinks, setTPLinks] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/tplinks')
        .then(res => res.json())
        .then(data => setTPLinks(data));
    },[]); */

    return (
        <div style={{ background: 'rgb(215, 219, 228)' }}>
            <div className='container-xxl'>
                <div className='ms-1 tplinks-dev py-5'>
                    {
                        tpLinks.map(tplink => <TPLink key={tplink._id} tplink={tplink} ></TPLink>)
                    }
                </div>
            </div>
        </div>
    );
};

export default TPLinks;