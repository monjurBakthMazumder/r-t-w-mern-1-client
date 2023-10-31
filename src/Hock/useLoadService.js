import axios from "axios";
import { useEffect, useState } from "react";

const useLoadService = () => {
    const [services, setServices] = useState([])
    useEffect(()=> {
        axios.get('http://localhost:5000/services')
        .then(res=> setServices(res.data))
    },[])
    return services
};

export default useLoadService;