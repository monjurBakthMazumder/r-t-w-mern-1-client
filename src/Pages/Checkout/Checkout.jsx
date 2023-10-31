import { useLoaderData } from "react-router-dom";
import Banner from "../../Component/Banner/Banner";
import useAuth from "../../Hock/useAuth";
import Swal from "sweetalert2";

const Checkout = () => {
  const { user } = useAuth();
  const data = useLoaderData();
  const { title, price, img } = data || {};
  const handleCheckout = (e) => {
    e.preventDefault();
    const form = e.target
    const service = form.service.value
    const email = form.email.value
    const phone = form.phone.value
    const date = form.date.value
    const message = form.message.value
    const information = {service, email, phone, date, message, price, img}
    console.log(information);
    fetch('http://localhost:5000/checkout',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(information)
    })
    .then(res=> res.json())
    .then(data => {
      if(data.insertedId){
        Swal.fire(
          'Checkout successful!!',
          'Successfully Checkout',
          'success'
        )
      }
      console.log(data);
    })
  };
  return (
    <>
      <Banner title={"Check Out"} />
      <div className="my-10 md:my-20 mx-[5%] sm:mx-[10%] bg-accent rounded px-5 py-10 sm:px-14 sm:py-20">
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
    </>
  );
};

export default Checkout;
