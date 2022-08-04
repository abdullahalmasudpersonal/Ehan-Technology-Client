import { useEffect, useState } from "react";

const useMicropack = () => {
    const [micropacks, setMicropacks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/micropacks')
        .then(res => res.json())
        .then(data => setMicropacks(data));
    }, []);
    return [micropacks, setMicropacks]
}

export default useMicropack;