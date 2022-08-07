import React from 'react';
import useTpLink from '../../../../Hooks/UseTPLink';
import TpLink from '../TPLinks/TPLink/TPLink';
import './Router.css';

const Router = () => {
    const [tpLink, setTpLink] = useTpLink([]);

    return (
        <div className='container-xxl'>
            <div className='router-dev py-5'>
                {
                    tpLink./* slice(3, 4). */map(tplink => <TpLink key={tplink._id} tplink={tplink}></TpLink>)
                }
            </div>
        </div>
    );
};

export default Router;