import React from 'react';
import useHikvision from '../../../Hooks/UseHikvision';
import useMicropack from '../../../Hooks/useMicropack';
import MicropackCopy from '../../Accessories/Keyboard/Micropacks/Micropack/MicropackCopy';
import HikvisionCopy from '../../Security/CcCamera/Hikvisions/Hikvision/HikvisionCopy';
import './HomeProduct.css';

const HomeProduct = () => {
    const [hikvisions, setHikvisions] = useHikvision([]);
    const [micropacks, setMicropacks] = useMicropack([]);

    return (
        <div className='homeProductBg'>
            <div className='container'>
                <div className='d-flex justify-content-center p-5'>
                    <div className='homePorductHeading'>
                        <h4 className='text-center fw-bold'>Product Collections</h4>
                        <h6 className='text-center'>Click & get your desired porduct</h6>
                    </div>
                </div>
                <div  className='ms-1 hikvisions-dev pb-5'>
                    {
                        hikvisions.slice(3, 4).map(hikvision => <HikvisionCopy key={hikvision._id} hikvision={hikvision}></HikvisionCopy>)
                    }
                    {
                        micropacks.slice(3, 4).map(micropack => <MicropackCopy key={micropack._id} micropack={micropack}></MicropackCopy>)
                    }
                </div>
            </div>
        </div>
    );
};

export default HomeProduct;