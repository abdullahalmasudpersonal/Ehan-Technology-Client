import { useEffect, useState } from "react"

const usePrinterHP = () =>{
    const [printerHPs, setPrinterHPs] = useState([]);

    useEffect( ()=>{
        fetch('https://pacific-temple-58154.herokuapp.com/printer-hps')
        .then(res => res.json())
        .then(data => setPrinterHPs(data));
    },[]);
    return [printerHPs, setPrinterHPs]
};

export default usePrinterHP;
