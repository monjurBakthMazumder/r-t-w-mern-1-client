import Swal from "sweetalert2";
import Banner from "../../../../Component/Banner/Banner";
import useAxiosSecure from "../../../../Hock/useAxiosSecure";

const AddServices = () => {
  const axiosSecure = useAxiosSecure();
  const handleAddService = (e) => {
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
    const service = {
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

    axiosSecure.post("/services", service).then((res) => {
      if (res.data.insertedId) {
        Swal.fire(
          "Added successful!!",
          "New services added successfully",
          "success"
        );
        form.reset();
      }
    });
  };
  return (
    <>
      <Banner title={"Add Services"} />
      <div className="my-10 w-full bg-accent rounded px-5 py-10 sm:px-14 sm:py-20">
        <form
          className="text-lg font-light text-primary"
          onSubmit={handleAddService}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <label>
              Service title
              <input
                type="text"
                placeholder="Service title"
                required
                name="title"
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
                name="facility1"
                className="input input-bordered input-secondary w-full mt-1"
              />
            </label>
            <label>
              Details
              <input
                type="text"
                placeholder="Facility 1 details"
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
                name="facility2"
                className="input input-bordered input-secondary w-full mt-1"
              />
            </label>
            <label>
              Details
              <input
                type="text"
                placeholder="Facility 2 details"
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
                name="facility3"
                className="input input-bordered input-secondary w-full mt-1"
              />
            </label>
            <label>
              Details
              <input
                type="text"
                placeholder="Facility 3 details"
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
                name="facility4"
                className="input input-bordered input-secondary w-full mt-1"
              />
            </label>
            <label>
              Details
              <input
                type="text"
                placeholder="Facility 4 details"
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

export default AddServices;
