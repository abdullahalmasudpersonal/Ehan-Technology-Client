import { useEffect, useState } from "react";

const useHikvision = () =>{
    const [hikvisions, setHikvisions] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:5000/hikvisions')
        .then(res => res.json())
        .then(data => setHikvisions(data));
    },[]);
    return [hikvisions, setHikvisions]
}

export default useHikvision;