import React from 'react';
import usePrinterHP from '../../../../Hooks/UsePrinterHP';
import Hp from '../HPs/HP/Hp';

const Printers = () => {
    const [printerHPs, setPrinterHPs] = usePrinterHP([]);

    return (
        <div className='container-xxl'>
            <div className='router-dev py-5'>
                {
                    printerHPs.map(printerhp => <Hp key={printerhp._id} printerhp={printerhp}></Hp>)
                }
            </div>
        </div>
    );
};

export default Printers;