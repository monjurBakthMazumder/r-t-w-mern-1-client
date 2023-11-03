import Swal from "sweetalert2";
import AllEmployeeRow from "./AllEmployeeRow";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hock/useAxiosSecure";

const AllEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get("/employees").then((res) => setEmployees(res.data));
  }, [axiosSecure]);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/employees/${id}`).then((res) => {
          if (res.data.deletedCount) {
            Swal.fire("Deleted!", "The employee has been deleted.", "success");
            const remainder = employees?.filter(
              (employee) => employee?._id !== id
            );
            setEmployees(remainder);
          }
        });
      }
    });
  };
  return (
    <div className="my-10 md:my-20 w-full">
      <h1 className="text-2xl md:text-3xl text-center text-primary underline font-bold mb-10">
        Total Employees: {employees?.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-xl text-primary">
              <th>Image</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Social link</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees?.map((employee) => (
              <AllEmployeeRow
                key={employee._id}
                employee={employee}
                handleDelete={handleDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllEmployee;
