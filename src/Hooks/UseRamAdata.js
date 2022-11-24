import { useEffect, useState } from "react"

const useRamAdata = () => {
     const [ramAdatas, setRamAdatas] = useState([]);

     useEffect( ()=>{
         fetch('https://pacific-temple-58154.herokuapp.com/ram-adatas')
         .then(res => res.json())
         .then(data => setRamAdatas(data));
     },[]);
     return [ramAdatas, setRamAdatas]
}

export default useRamAdata;