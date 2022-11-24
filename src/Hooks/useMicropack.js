import { useEffect, useState } from "react";

const useMicropack = () => {
    const [micropacks, setMicropacks] = useState([]);

    useEffect(() => {
        fetch('https://pacific-temple-58154.herokuapp.com/micropacks')
        .then(res => res.json())
        .then(data => setMicropacks(data));
    }, []);
    return [micropacks, setMicropacks]
}

export default useMicropack;