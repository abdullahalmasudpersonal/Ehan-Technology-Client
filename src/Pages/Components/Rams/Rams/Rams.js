import React from 'react';
import useRamAdata from '../../../../Hooks/UseRamAdata';
import Adata from '../Adatas/Adata/Adata';

const Rams = () => {
    const [ramAdatas, setRamAdatas] = useRamAdata([]);

    return (
        <div className='container-xxl'>
            <div className='router-dev py-5'>
                {
                    ramAdatas.map(adata => <Adata key={adata._id} adata={adata} ></Adata>)
                }
            </div>
        </div>
    );
};

export default Rams;