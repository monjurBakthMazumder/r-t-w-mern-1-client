import { useEffect, useState } from "react";
import useAuth from "../../Hock/useAuth";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hock/useAxiosSecure";

const Booking = () => {
  const [bookings, setBookings] = useState();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  // useEffect(() => {
  //   fetch(`http://localhost:5000/bookings?email=${user?.email}`, {credentials: 'include'})
  //     .then((res) => res.json())
  //     .then((data) => setBookings(data));
  // }, [user?.email]);
  useEffect(() => {
    axiosSecure
      .get(`/bookings?email=${user?.email}`)
      .then(res => setBookings(res.data));
  }, [axiosSecure, user?.email]);

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
        fetch(`http://localhost:5000/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire(
                "Deleted!",
                "Your booked service has been deleted.",
                "success"
              );
              const remainder = bookings?.filter(
                (booking) => booking?._id !== id
              );
              setBookings(remainder);
            }
          });
      }
    });
  };
  return (
    <div className="my-10 md:my-20 px-[5%] sm:px-[10%]">
      <h1 className="text-2xl md:text-3xl text-center text-primary underline font-bold mb-10">
        Total Bookings: {bookings?.length}
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
            {bookings?.map((booking) => (
              <BookingRow
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Booking;
