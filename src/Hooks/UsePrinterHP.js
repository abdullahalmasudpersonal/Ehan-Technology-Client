import { useEffect, useState } from "react"

const usePrinterHP = () =>{
    const [printerHPs, setPrinterHPs] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/printer-hps')
        .then(res => res.json())
        .then(data => setPrinterHPs(data));
    },[]);
    return [printerHPs, setPrinterHPs]
};

export default usePrinterHP;
