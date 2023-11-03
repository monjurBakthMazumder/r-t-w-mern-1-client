import { useEffect, useState } from "react";
import useAuth from "../../Hock/useAuth";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hock/useAxiosSecure";
import LoadingRow from "../../Component/Loading/LoadingRow";

const Booking = () => {
  const [bookings, setBookings] = useState();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  
  // const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [countLoading, setCountLoading] = useState(true);
  const [count, setCount] = useState(null);
  const [itemPerPage, setItemPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  useEffect(() => {
    setLoading(true);
    axiosSecure.get("/bookings-count").then((res) => {
      setCount(res.data.count);
      setCountLoading(false)
    });
    axiosSecure
      .get(`/bookings?email=${user?.email}&page=${currentPage}&size=${itemPerPage}`)
      .then((res) => {
        setBookings(res.data);
        setLoading(false);
      });
  }, [axiosSecure, currentPage, itemPerPage,user?.email]);
  const numberOfPages = Math.ceil(count / itemPerPage);
  const pages = [...Array(numberOfPages).keys()];

  // useEffect(() => {
  //   axiosSecure
  //     .get(`/bookings?email=${user?.email}`)
  //     .then((res) => setBookings(res.data));
  // }, [axiosSecure, user?.email]);

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
        axiosSecure.delete(`/bookings/${id}`).then((res) => {
          if (res.data.deletedCount) {
            Swal.fire(
              "Deleted!",
              "Your booked service has been deleted.",
              "success"
            );
            const remainder = bookings?.filter(
              (booking) => booking?._id !== id
            );
            setBookings(remainder);
            setCount(count-1)
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
    <div className="my-10 md:my-20 px-[5%] sm:px-[10%]">
      <h1 className="text-2xl md:text-3xl text-center text-primary underline font-bold mb-10">
        Total Bookings: {countLoading ? <span className="loading loading-spinner loading-sm"></span> : count}
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-xl text-primary">
              <th>Image</th>
              <th>Service</th>
              <th>Price</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              loading ? (
                <tr>
                  <th colSpan="5">
                    <LoadingRow />
                  </th>
                </tr>
              ):
            bookings?.map((booking) => (
                <BookingRow
                  key={booking._id}
                  booking={booking}
                  handleDelete={handleDelete}
                />
              ))

            }
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
        {pages?.map((page,i) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-2 py-1 border border-primary flex justify-center items-center gap-2 hover:bg-primary hover:text-white ${
              currentPage === page
                ? "bg-primary text-white"
                : "text-primary bg-transparent"
            }`}
          >
            {++i}
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

export default Booking;
