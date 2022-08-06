import { useEffect, useState } from "react"

const useIntel = () => {
    const [intels, setIntels] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/intels')
        .then(res => res.json())
        .then(data => setIntels(data))
    },[]);
    return[ intels, setIntels]
}

export default useIntel;