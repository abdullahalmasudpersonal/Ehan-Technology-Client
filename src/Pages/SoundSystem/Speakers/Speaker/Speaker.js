import React from 'react';
import useSpeakerDigitalX from '../../../../Hooks/UseSpeakerDigitalX';
import DigitalX from '../DigitalXs/DigitalX/DigitalX';

const Speaker = () => {
    const [speakerDigitalXs, setSpeakerDigitalXs] = useSpeakerDigitalX([]);

    return (
        <div className='container-xxl'>
            <div className='router-dev py-5'>
            {
                    speakerDigitalXs.map(speakerDigitalX => <DigitalX key={speakerDigitalX._id} speakerDigitalX={speakerDigitalX}></DigitalX>)
                }
            </div>
        </div>
    );
};

export default Speaker;