import { Link, useNavigate, useParams } from "react-router-dom";
import Banner from "../../Component/Banner/Banner";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hock/useAxiosSecure";

const Details = () => {
  const [data, setData] = useState([])
  const axiosSecure = useAxiosSecure()
  const params = useParams()
  useEffect(()=>{
    axiosSecure.get(`/services/${params.id}`)
    .then(res => setData(res.data))
  },[axiosSecure, params.id])
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  const { _id, title, img, price, description, facility } = data || {};
  return (
    <>
      <Banner title={"Service details"} />
      <div className="mb-10 mt-5 md:mb-20 md:mt-10 px-[5%] sm:px-[10%]">
        <button
          onClick={handleGoBack}
          className="px-5 py-3 bg-secondary text-white text-lg border border-secondary hover:text-secondary hover:bg-transparent flex justify-center items-center gap-2 mb-5"
        >
          <AiOutlineArrowLeft /> Go back
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="">
            <img src={img} alt="" className="w-full h-fit" />
          </div>
          <div className="">
            <h1 className="text-3xl md:text-4xl font-bold text-primary">
              {title}
            </h1>
            <p className="text-xl font-bold my-3 text-secondary">
              price: ${price}
            </p>
            <p className="text-neutral font-light sm:text-lg text-justify">
              {description}
            </p>
            <h1 className="text-2xl md:text-3xl font-semibold text-primary mt-5">
              Facility
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {facility?.map((fac, i) => (
                <div
                  className="my-2 bg-accent p-5 rounded border-y-2 border-secondary"
                  key={i}
                >
                  <h1 className="text-lg font-bold">{fac?.name}</h1>
                  <p className="text-neutral font-light">{fac?.details}</p>
                </div>
              ))}
            </div>
            <Link to={`/Checkout/${_id}`}>
              <button className="w-full py-3 bg-secondary text-white text-lg border border-secondary hover:text-secondary hover:bg-transparent my-5">
                Proceed Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
