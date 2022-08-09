import React from 'react';
import usePrinterHP from '../../../../Hooks/UsePrinterHP';
import Hp from './HP/Hp';
import './HPs.css';

const HPs = () => {
    const [printerHPs, setPrinterHPs] = usePrinterHP([]);

    return (
        <div style={{background:'rgb(215, 219, 228)'}}>
            <div className='container-xxl'>
                <div className='ms-1 hikvisions-dev py-5'>
                    {
                        printerHPs.map(printerhp => <Hp key={printerhp._id} printerhp={printerhp}></Hp>)
                    }
                </div>
            </div>
        </div>
    );
};

export default HPs;