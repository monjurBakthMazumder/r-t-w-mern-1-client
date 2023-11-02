import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";


const axiosSecure = axios.create({
    baseURL: 'https://car-care-server-fawn.vercel.app',
    // baseURL: 'http://localhost:5000',
    withCredentials: true,
})
const useAxiosSecure = () => {
    const {logout} = useAuth()
    const navigate = useNavigate()

    useEffect(()=>{
        axiosSecure.interceptors.response.use( res => {
            return res
        },
        error => {
            console.log(error.response);
            if(error.response.status === 401 || error.response.status === 403){
                logout()
                .then(()=> {
                    navigate('/sing-in')
                })
            }
        })
    },[logout,navigate])
  
    return axiosSecure
};

export default useAxiosSecure;
