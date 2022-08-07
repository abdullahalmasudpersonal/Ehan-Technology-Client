import { useEffect, useState } from "react";

const useTpLink = () => {
    const [tpLink, setTpLink] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/tplinks')
        .then(res => res.json())
        .then(data => setTpLink(data));
    },[]);
    return [tpLink, setTpLink]
};

export default useTpLink;