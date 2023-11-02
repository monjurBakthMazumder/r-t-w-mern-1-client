import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useLoadService = () => {
    const axiosSecure =  useAxiosSecure()
    const [services, setServices] = useState([])
    useEffect(()=> {
        axiosSecure.get('/services')
        .then(res=> setServices(res.data))
    },[axiosSecure])
    return services
};

export default useLoadService;