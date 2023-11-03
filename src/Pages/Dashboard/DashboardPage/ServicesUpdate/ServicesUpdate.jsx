import Swal from "sweetalert2";
import Banner from "../../../../Component/Banner/Banner";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import useAxiosSecure from "../../../../Hock/useAxiosSecure";

const ServicesUpdate = () => {
  const loadedServices = useLoaderData();
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  const axiosSecure = useAxiosSecure()
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



      axiosSecure.put(`/services/${_id}`, updateService)
      .then(res=> {
        if (res.data.modifiedCount) {
          Swal.fire(
            "Update successful!!",
            "Services Updated successfully",
            "success"
          );
        }
      })
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <label>
              Facility 1
              <input
                type="text"
                placeholder="Facility 1"
                defaultValue={facility[0]?.name}
                name="facility1"
                className="input input-bordered input-secondary w-full mt-1"
              />
            </label>
            <label>
              Details
              <input
                type="text"
                placeholder="Facility 1 details"
                defaultValue={facility[0]?.details}
                name="facility1details"
                className="input input-bordered input-secondary w-full mt-1"
              />
            </label>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <label>
              Facility 2
              <input
                type="text"
                placeholder="Facility 2"
                defaultValue={facility[1]?.name}
                name="facility2"
                className="input input-bordered input-secondary w-full mt-1"
              />
            </label>
            <label>
              Details
              <input
                type="text"
                placeholder="Facility 2 details"
                defaultValue={facility[1]?.details}
                name="facility2details"
                className="input input-bordered input-secondary w-full mt-1"
              />
            </label>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <label>
              Facility 3
              <input
                type="text"
                placeholder="Facility 3"
                defaultValue={facility[2]?.name}
                name="facility3"
                className="input input-bordered input-secondary w-full mt-1"
              />
            </label>
            <label>
              Details
              <input
                type="text"
                placeholder="Facility 3 details"
                defaultValue={facility[2]?.details}
                name="facility3details"
                className="input input-bordered input-secondary w-full mt-1"
              />
            </label>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <label>
              Facility 4
              <input
                type="text"
                placeholder="Facility 4"
                defaultValue={facility[3]?.name}
                name="facility4"
                className="input input-bordered input-secondary w-full mt-1"
              />
            </label>
            <label>
              Details
              <input
                type="text"
                placeholder="Facility 4 details"
                defaultValue={facility[3]?.details}
                name="facility4details"
                className="input input-bordered input-secondary w-full mt-1"
              />
            </label>
          </div>
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
