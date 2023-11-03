import Swal from "sweetalert2";
import AllEmployeeRow from "./AllEmployeeRow";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hock/useAxiosSecure";

const AllEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const [count, setCount] = useState(null);
  const [itemPerPage, setItemPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get("/employees-count").then((res) => setCount(res.data.count));
    axiosSecure
      .get(`/employees?page=${currentPage}&size=${itemPerPage}`)
      .then((res) => setEmployees(res.data));
  }, [axiosSecure, currentPage, itemPerPage]);
  const numberOfPages = Math.ceil(count / itemPerPage);
  const pages = [...Array(numberOfPages).keys()];
  console.log(pages);
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
  const handleItemParPageChange = (e) => {
    setItemPerPage(Number(e.target.value));
    setCurrentPage(0);
  };
  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <div className="my-10 md:my-20 w-full">
      <h1 className="text-2xl md:text-3xl text-center text-primary underline font-bold mb-10">
        Total Employees: {count}
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
      <div className="flex flex-wrap justify-center items-center gap-2 my-10">
        <button
          onClick={handlePrevPage}
          className={`px-2 py-1 border border-primary flex justify-center items-center gap-2 hover:bg-primary hover:text-white text-primary bg-transparent`}
        >
          Prev
        </button>
        {pages?.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-2 py-1 border border-primary flex justify-center items-center gap-2 hover:bg-primary hover:text-white ${
              currentPage === page
                ? "bg-primary text-white"
                : "text-primary bg-transparent"
            }`}
          >
            {page}
          </button>
        ))}
        <button
          onClick={handleNextPage}
          className={`px-2 py-1 border border-primary flex justify-center items-center gap-2 hover:bg-primary hover:text-white text-primary bg-transparent`}
        >
          Next
        </button>
        <select
          value={itemPerPage}
          onChange={handleItemParPageChange}
          className="select select-primary w-fit text-primary"
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>
    </div>
  );
};

export default AllEmployee;
