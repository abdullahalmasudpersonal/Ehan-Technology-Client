import { useEffect, useState } from "react"

const useMonitorDell = () =>{
    const [monitorDells, setMonitorDells] = useState([]);

    useEffect( ()=>{
        fetch('https://pacific-temple-58154.herokuapp.com/monitor-dells')
        .then(res => res.json())
        .then(data => setMonitorDells(data));
    },[]);
    return [monitorDells, setMonitorDells]
}

export default useMonitorDell;