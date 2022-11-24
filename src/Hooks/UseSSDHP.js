import { useEffect, useState } from "react"

const useSSDHP = ()=>{
    const [ssdhps, setSsdhps] = useState([]);

    useEffect( () =>{
        fetch('https://pacific-temple-58154.herokuapp.com/ssd-hps')
        .then(res => res.json())
        .then(data => setSsdhps(data));
    },[]);
    return [ssdhps, setSsdhps]
};

export default useSSDHP;