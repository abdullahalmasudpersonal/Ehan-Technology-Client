import React from 'react';
import useAMD from '../../../Hooks/UseAMD';
import useHikvision from '../../../Hooks/UseHikvision';
import useIntel from '../../../Hooks/UseIntel';
import useMicropack from '../../../Hooks/useMicropack';
import useTpLink from '../../../Hooks/UseTPLink';
import MicropackCopy from '../../Accessories/Keyboard/Micropacks/Micropack/MicropackCopy';
import AMDCopy from '../../Components/Processor/AMDS/AMD/AMDCopy';
import IntelCopy from '../../Components/Processor/Intels/Intel/IntelCopy';
import TpLinkCopy from '../../Networking/Router/TPLinks/TPLink/TPLinkCopy';
import HikvisionCopy from '../../Security/CcCamera/Hikvisions/Hikvision/HikvisionCopy';
import './HomeProduct.css';

const HomeProduct = () => {
    const [hikvisions, setHikvisions] = useHikvision([]);
    const [micropacks, setMicropacks] = useMicropack([]);
    const [amds, setAmds] = useAMD([]);
    const [intels, setIntels] = useIntel([]);
    const [tpLink, setTpLink] = useTpLink([]);

    return (
        <div className='homeProductBg'>
            <div className='container-xxl'>
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
                    {
                        amds.slice(3, 4).map(amd => <AMDCopy key={amd._id} amd={amd}></AMDCopy>)
                    }
                    {
                        intels.slice(3, 4).map(intel => <IntelCopy key={intel._id} intel={intel}></IntelCopy>)
                    }
                    {
                        tpLink.slice(3, 4).map(tplink => <TpLinkCopy key={tplink._id} tplink={tplink}></TpLinkCopy>)
                    }
                </div>
            </div>
        </div>
    );
};

export default HomeProduct;