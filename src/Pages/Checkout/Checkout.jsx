import { useLoaderData } from "react-router-dom";
import Banner from "../../Component/Banner/Banner";

const Checkout = () => {
    const data = useLoaderData()
    const {title, price} = data || {}
  return (
    <>
      <Banner title={"Check Out"} />
      <div className="my-10 md:my-20 mx-[5%] sm:mx-[10%] bg-accent rounded px-5 py-10 sm:px-14 sm:py-20" >
        <form className="text-lg font-light text-primary">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <label htmlFor="service">
              Service
              <input
                type="text"
                value={title}
                placeholder="service"
                name="service"
                className="input input-bordered input-secondary w-full mt-1"
              />
            </label>
            <label htmlFor="email">
              Email
              <input
                type="email"
                placeholder="Email"
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
                name="phone"
                className="input input-bordered input-secondary w-full mt-1"
              />
            </label>
            <label htmlFor="price">
              Price
              <input
                type="number"
                value={price}
                placeholder="Price"
                name="price"
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
