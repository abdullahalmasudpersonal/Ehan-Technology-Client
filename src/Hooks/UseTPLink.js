import { useEffect, useState } from "react";

const useTpLink = () => {
    const [tpLinks, setTpLinks] = useState([]);

    useEffect( () => {
        fetch('https://pacific-temple-58154.herokuapp.com/tplinks')
        .then(res => res.json())
        .then(data => setTpLinks(data));
    },[]);
    return [tpLinks, setTpLinks]
};

export default useTpLink;