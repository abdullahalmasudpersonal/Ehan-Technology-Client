import React from 'react';
import useRamAdata from '../../../../Hooks/UseRamAdata';
import Adata from './Adata/Adata';
import './Adatas.css';

const Adatas = () => {
    const [ramAdatas, setRamAdatas] = useRamAdata([]);

    return (
        <div style={{background:'rgb(215, 219, 228)'}}>
            <div className='container-xxl'>
                <div className='ms-1 ram-adatas-dev py-5'>
                    {
                        ramAdatas.map(adata => <Adata key={adata._id} adata={adata}></Adata>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Adatas;