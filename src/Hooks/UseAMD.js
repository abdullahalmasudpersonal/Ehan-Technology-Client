import { useEffect, useState } from "react";

const useAMD = () =>{
    const [amds, setAmds] = useState([]);

    useEffect( () =>{
        fetch('https://pacific-temple-58154.herokuapp.com/amds')
        .then(res => res.json())
        .then(data => setAmds(data))
    },[]);
    return [amds, setAmds]
}

export default useAMD;