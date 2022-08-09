import React from 'react';
import useSpeakerDigitalX from '../../../../Hooks/UseSpeakerDigitalX';
import DigitalX from './DigitalX/DigitalX';
import './DigitalXs.css';

const DigitalXs = () => {
    const [speakerDigitalXs, setSpeakerDigitalXs] = useSpeakerDigitalX([]);

    return (
        <div style={{background:'rgb(215, 219, 228)'}}>
        <div className='container-xxl'>
            <div className='ms-1 speakerDigitalXs-dev py-5'>
                {
                    speakerDigitalXs.map(speakerDigitalX => <DigitalX key={speakerDigitalX._id} speakerDigitalX={speakerDigitalX}></DigitalX>)
                }
            </div>
        </div>
    </div>
    );
};

export default DigitalXs;