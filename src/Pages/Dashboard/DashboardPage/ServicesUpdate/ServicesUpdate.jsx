import Swal from "sweetalert2";
import Banner from "../../../../Component/Banner/Banner";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import useAxiosSecure from "../../../../Hock/useAxiosSecure";
import { useEffect, useState } from "react";

const ServicesUpdate = () => {
  // const loadedServices = useLoaderData();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const [loadedServices, setLoadedServices] = useState({});
  const handleGoBack = () => {
    navigate(-1);
  };
  const params = useParams();

  useEffect(() => {
    axiosSecure
      .get(`/services/${params.id}`)
      .then((res) => setLoadedServices(res.data));
  }, [axiosSecure, params?.id]);
  console.log(loadedServices);
  const { _id, title, img, price, description, facility } =
    loadedServices || {};
  const handleUpdateService = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const price = form.price.value;
    const img = form.img.value;
    const facility1 = form.facility1.value;
    const facility1details = form.facility1details.value;
    const facility2 = form.facility2.value;
    const facility2details = form.facility2details.value;
    const facility3 = form.facility3.value;
    const facility3details = form.facility3details.value;
    const facility4 = form.facility4.value;
    const facility4details = form.facility4details.value;
    const description = form.description.value;
    const updateService = {
      title,
      img,
      price,
      description,
      facility: [
        {
          name: facility1,
          details: facility1details,
        },
        {
          name: facility2,
          details: facility2details,
        },
        {
          name: facility3,
          details: facility3details,
        },
        {
          name: facility4,
          details: facility4details,
        },
      ],
    };

    console.log(updateService);

    axiosSecure.put(`/services/${_id}`, updateService).then((res) => {
      if (res.data.modifiedCount) {
        Swal.fire(
          "Update successful!!",
          "Services Updated successfully",
          "success"
        );
      }
    });
  };
  return (
    <>
      <Banner title={"Update Services"} />
      <button
        onClick={handleGoBack}
        className="px-5 py-3 bg-secondary text-white text-lg border border-secondary hover:text-secondary hover:bg-transparent flex justify-center items-center gap-2 mb-5"
      >
        <AiOutlineArrowLeft /> Go back
      </button>
      <div className="my-10 w-full bg-accent rounded px-5 py-10 sm:px-14 sm:py-20">
        <form
          className="text-lg font-light text-primary"
          onSubmit={handleUpdateService}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <label>
              Service title
              <input
                type="text"
                placeholder="Service title"
                required
                name="title"
                defaultValue={title}
                className="input input-bordered input-secondary w-full mt-1"
              />
            </label>
            <label>
              Price
              <input
                type="number"
                placeholder="price"
                required
                name="price"
                defaultValue={price}
                className="input input-bordered input-secondary w-full mt-1"
              />
            </label>
          </div>
          <div className="mb-5">
            <label>
              Image url
              <input
                type="text"
                placeholder="Service image url"
                required
                name="img"
                defaultValue={img}
                className="input input-bordered input-secondary w-full mt-1"
              />
            </label>
          </div>

          {facility?.map((facil, i) => (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5" key={i}>
              <label>
                Facility {++i}
                <input
                  type="text"
                  placeholder={`Facility ${i}`}
                  defaultValue={facility[--i]?.name}
                  name={`facility${++i}`}
                  className="input input-bordered input-secondary w-full mt-1"
                />
              </label>
              <label>
                Details
                <input
                  type="text"
                  placeholder={`Facility ${i} details`}
                  defaultValue={facility[--i]?.details}
                  name={`facility${++i}details`}
                  className="input input-bordered input-secondary w-full mt-1"
                />
              </label>
            </div>
          ))}

          <div className="mb-5">
            <label>
              Description
              <textarea
                className="textarea textarea-secondary resize-none w-full mt-1 h-40"
                placeholder="Description"
                required
                name="description"
                defaultValue={description}
              ></textarea>
            </label>
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-3 bg-secondary text-white text-lg border border-secondary hover:text-secondary hover:bg-transparent"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ServicesUpdate;
