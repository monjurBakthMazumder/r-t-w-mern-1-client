import { useLoaderData, useNavigate } from "react-router-dom";
import Banner from "../../Component/Banner/Banner";
import useAuth from "../../Hock/useAuth";
import Swal from "sweetalert2";
import { AiOutlineArrowLeft } from "react-icons/ai";
import useAxiosSecure from "../../Hock/useAxiosSecure";

const Checkout = () => {
  const { user } = useAuth();
  const data = useLoaderData();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const handleGoBack = () => {
    navigate(-1);
  };
  const { title, price, img } = data || {};
  const handleCheckout = (e) => {
    e.preventDefault();
    const form = e.target;
    const service = form.service.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const date = form.date.value;
    const message = form.message.value;
    const information = { service, email, phone, date, message, price, img };
    // fetch("http://localhost:5000/bookings", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(information),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.insertedId) {
    //       Swal.fire(
    //         "Checkout successful!!",
    //         "Successfully Checkout",
    //         "success"
    //       );
    //     }
    //   });

    axiosSecure.post("/bookings", information).then((res) => {
      if (res.data.insertedId) {
        Swal.fire("Checkout successful!!", "Successfully Checkout", "success");
      }
    });
  };
  return (
    <>
      <Banner title={"Check Out"} />
      <div className="mb-10 mt-5 md:mb-20 md:mt-10 mx-[5%] sm:mx-[10%] ">
        <button
          onClick={handleGoBack}
          className="px-5 py-3 bg-secondary text-white text-lg border border-secondary hover:text-secondary hover:bg-transparent flex justify-center items-center gap-2 mb-5"
        >
          <AiOutlineArrowLeft /> Go back
        </button>
        <div className="bg-accent rounded px-5 py-10 sm:px-14 sm:py-20">
          <form
            className="text-lg font-light text-primary"
            onSubmit={handleCheckout}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <label htmlFor="service">
                Service
                <input
                  type="text"
                  value={title}
                  placeholder="service"
                  required
                  name="service"
                  className="input input-bordered input-secondary w-full mt-1"
                />
              </label>
              <label htmlFor="email">
                Email
                <input
                  type="email"
                  value={user?.email}
                  placeholder="Email"
                  required
                  name="email"
                  className="input input-bordered input-secondary w-full mt-1"
                />
              </label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <label htmlFor="phone">
                Phone Number
                <input
                  type="number"
                  placeholder="Phone Number"
                  required
                  name="phone"
                  className="input input-bordered input-secondary w-full mt-1"
                />
              </label>
              <label htmlFor="price">
                Date
                <input
                  type="date"
                  required
                  name="date"
                  className="input input-bordered input-secondary w-full mt-1"
                />
              </label>
            </div>
            <div className="mb-5">
              <label htmlFor="phone">
                Message
                <textarea
                  className="textarea textarea-secondary resize-none w-full mt-1 h-40"
                  placeholder="Message"
                  required
                  name="message"
                ></textarea>
              </label>
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-3 bg-secondary text-white text-lg border border-secondary hover:text-secondary hover:bg-transparent"
              >
                Order Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Checkout;
