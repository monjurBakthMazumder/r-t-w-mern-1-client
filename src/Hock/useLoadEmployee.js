import { useEffect, useState } from 'react';

const useLoadEmployee = () => {
    const [employees, setEmployees] = useState([])
    useEffect(()=> {
        fetch('http://localhost:5000/employees')
        .then(res=> res.json())
        .then(data=> setEmployees(data))
    },[])
    return employees
};

export default useLoadEmployee;