import { useEffect, useState } from "react"

const useIntel = () => {
    const [intels, setIntels] = useState([]);

    useEffect( () => {
        fetch('https://pacific-temple-58154.herokuapp.com/intels')
        .then(res => res.json())
        .then(data => setIntels(data))
    },[]);
    return[ intels, setIntels]
}

export default useIntel;