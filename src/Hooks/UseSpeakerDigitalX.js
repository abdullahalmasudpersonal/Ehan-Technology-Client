import { useEffect, useState } from "react"

const useSpeakerDigitalX = () =>{
    const [speakerDigitalXs, setSpeakerDigitalXs] = useState([]);
 
    useEffect( () => {
        fetch('http://localhost:5000/speaker-digital-Xs')
        .then(res => res.json())
        .then(data => setSpeakerDigitalXs(data));
    },[]);
    return [speakerDigitalXs, setSpeakerDigitalXs]
};

export default useSpeakerDigitalX;