import { useEffect, useState } from "react";

const useAMD = () =>{
    const [amds, setAmds] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:5000/amds')
        .then(res => res.json())
        .then(data => setAmds(data))
    },[]);
    return [amds, setAmds]
}

export default useAMD;