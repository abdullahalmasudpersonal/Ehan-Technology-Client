import React from 'react';
import useAMD from '../../../Hooks/UseAMD';
import useHikvision from '../../../Hooks/UseHikvision';
import useIntel from '../../../Hooks/UseIntel';
import useMicropack from '../../../Hooks/useMicropack';
import useRamAdata from '../../../Hooks/UseRamAdata';
import useTpLink from '../../../Hooks/UseTPLink';
import useMonitorDell from '../../../Hooks/UseMonitorDell';
import MicropackCopy from '../../Accessories/Keyboard/Micropacks/Micropack/MicropackCopy';
import AMDCopy from '../../Components/Processor/AMDS/AMD/AMDCopy';
import IntelCopy from '../../Components/Processor/Intels/Intel/IntelCopy';
import AdataCopy from '../../Components/Rams/Adatas/Adata/AdataCopy';
import TpLinkCopy from '../../Networking/Router/TPLinks/TPLink/TPLinkCopy';
import HikvisionCopy from '../../Security/CcCamera/Hikvisions/Hikvision/HikvisionCopy';

import './HomeProduct.css';
import DellCopy from '../../Monitors/Dells/Dell/DellCopy';
import usePrinterHP from '../../../Hooks/UsePrinterHP';
import HpCopy from '../../OfficeEquipments/Printers/HPs/HP/HpCopy';
import useSSDHP from '../../../Hooks/UseSSDHP';
import SSDCopy from '../../Storages/SSDs/SSD/SSDCopy';
import useSpeakerDigitalX from '../../../Hooks/UseSpeakerDigitalX';
import DigitalXCopy from '../../SoundSystem/Speakers/DigitalXs/DigitalX/DigitalXCopy';

const HomeProduct = () => {
    const [hikvisions, setHikvisions] = useHikvision([]);
    const [micropacks, setMicropacks] = useMicropack([]);
    const [amds, setAmds] = useAMD([]);
    const [intels, setIntels] = useIntel([]);
    const [tpLink, setTpLink] = useTpLink([]);
    const [ramAdatas, setRamAdatas] = useRamAdata([]);
    const [monitorDells, setMonitorDells] = useMonitorDell([]);
    const [printerHPs, setPrinterHPs] = usePrinterHP([]);
    const [ssdhps, setSsdhps] = useSSDHP([]);
    const [speakerDigitalXs, setSpeakerDigitalXs] = useSpeakerDigitalX([]);
 
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
                    {
                        ramAdatas.slice(2, 3).map(adata => <AdataCopy key={adata._id} adata={adata}></AdataCopy>)
                    }
                    {
                        monitorDells.slice(2, 3).map(monitorDell => <DellCopy key={monitorDell._id} monitorDell={monitorDell}></DellCopy>)
                    }
                    {
                        printerHPs.slice(2, 3).map(printerhp => <HpCopy key={printerhp._id} printerhp={printerhp}></HpCopy>)
                    }
                    {
                        ssdhps.slice(2, 3).map(ssdhp => <SSDCopy key={ssdhp._id} ssdhp={ssdhp}></SSDCopy>)
                    }
                    {
                        speakerDigitalXs.slice(2, 3).map(speakerDigitalX => <DigitalXCopy key={speakerDigitalX._id} speakerDigitalX={speakerDigitalX}></DigitalXCopy>)
                    }
                </div>
            </div>
        </div>
    );
};

export default HomeProduct;