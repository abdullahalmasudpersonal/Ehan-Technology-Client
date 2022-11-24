import { useEffect, useState } from "react"

const useSpeakerDigitalX = () =>{
    const [speakerDigitalXs, setSpeakerDigitalXs] = useState([]);
 
    useEffect( () => {
        fetch('https://pacific-temple-58154.herokuapp.com/speakerDigitalXs')
        .then(res => res.json())
        .then(data => setSpeakerDigitalXs(data));
    },[]);
    return [speakerDigitalXs, setSpeakerDigitalXs]
};

export default useSpeakerDigitalX;