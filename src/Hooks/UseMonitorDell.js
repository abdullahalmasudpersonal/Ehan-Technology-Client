import { useEffect, useState } from "react"

const useMonitorDell = () =>{
    const [monitorDells, setMonitorDells] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/monitor-dells')
        .then(res => res.json())
        .then(data => setMonitorDells(data));
    },[]);
    return [monitorDells, setMonitorDells]
}

export default useMonitorDell;