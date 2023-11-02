import { useEffect, useState } from 'react';
import useAxiosSecure from './useAxiosSecure';

const useLoadEmployee = () => {
    const [employees, setEmployees] = useState([])
    const axiosSecure = useAxiosSecure()
    useEffect(()=> {
        // fetch('http://localhost:5000/employees')
        // .then(res=> res.json())
        // .then(data=> setEmployees(data))

        axiosSecure.get('/employees')
        .then(res=> setEmployees(res.data))

    },[axiosSecure])

    return employees
};

export default useLoadEmployee;