import { useEffect, useState } from "react"

const useSSDHP = ()=>{
    const [ssdhps, setSsdhps] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:5000/ssd-hps')
        .then(res => res.json())
        .then(data => setSsdhps(data));
    },[]);
    return [ssdhps, setSsdhps]
};

export default useSSDHP;