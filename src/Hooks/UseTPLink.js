import { useEffect, useState } from "react";

const useTpLink = () => {
    const [tpLinks, setTpLinks] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/tplinks')
        .then(res => res.json())
        .then(data => setTpLinks(data));
    },[]);
    return [tpLinks, setTpLinks]
};

export default useTpLink;