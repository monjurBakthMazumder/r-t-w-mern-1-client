import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useLoadEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get("/employees").then((res) => setEmployees(res.data));
  }, [axiosSecure]);

  return employees;
};

export default useLoadEmployee;
