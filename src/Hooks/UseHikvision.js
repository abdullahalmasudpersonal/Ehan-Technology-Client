import { useEffect, useState } from "react";

const useHikvision = () =>{
    const [hikvisions, setHikvisions] = useState([]);

    useEffect( () =>{
        fetch('https://pacific-temple-58154.herokuapp.com/hikvisions')
        .then(res => res.json())
        .then(data => setHikvisions(data));
    },[]);
    return [hikvisions, setHikvisions]
}

export default useHikvision;