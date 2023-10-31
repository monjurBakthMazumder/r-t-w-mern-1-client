import { Link, useLoaderData } from "react-router-dom";
import Banner from "../../Component/Banner/Banner";

const Details = () => {
  const data = useLoaderData();
  const { title, img, price, description, facility } = data || {};
  return (
    <>
      <Banner title={'Service details'}/>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10 md:my-20 px-[5%] sm:px-[10%]">
        <div className="">
          <img src={img} alt="" className="w-full h-fit" />
        </div>
        <div className="">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">{title}</h1>
          <p className="text-xl font-bold my-3 text-secondary">price: ${price}</p>
          <p className="text-neutral font-light sm:text-lg text-justify">
            {description}
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold text-primary mt-5">
            Facility
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {facility.map((fac, i) => (
              <div
                className="my-2 bg-accent p-5 rounded border-y-2 border-secondary"
                key={i}
              >
                <h1 className="text-lg font-bold">{fac?.name}</h1>
                <p className="text-neutral font-light">{fac?.details}</p>
              </div>
            ))}
          </div>
          <Link to={"/"}>
            <button className="w-full py-3 bg-secondary text-white text-lg border border-secondary hover:text-secondary hover:bg-transparent my-5">
              Proceed Checkout
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Details;
