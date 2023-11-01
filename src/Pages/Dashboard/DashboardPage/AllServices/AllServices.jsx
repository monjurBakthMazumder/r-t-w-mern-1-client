import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import AllServicesRow from "./AllServicesRow";

const AllServices = () => {
    const [services, setServices] = useState([])
    useEffect(()=> {
      fetch('http://localhost:5000/services')
          .then(res=> res.json())
          .then(data=> setServices(data))
    },[])
    console.log(services);
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
          fetch(`http://localhost:5000/services/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount) {
                Swal.fire(
                  "Deleted!",
                  "The service has been deleted.",
                  "success"
                );
                const remainder = services?.filter(
                  (employee) => employee?._id !== id
                );
                setServices(remainder);
              }
            });
        }
      });
    };
    return (
        <div className="my-10 md:my-20 w-full">
          <h1 className="text-2xl md:text-3xl text-center text-primary underline font-bold mb-10">
            Total Services: {services?.length}
          </h1>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="text-xl text-primary">
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {services?.map((service) => (
                  <AllServicesRow key={service._id} service={service} handleDelete={handleDelete}/>
                ))}
              </tbody>
            </table>
          </div>
        </div>
    );
};

export default AllServices;