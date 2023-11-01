import Swal from "sweetalert2";
import Banner from "../../../../Component/Banner/Banner";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

const EmployeeUpdate = () => {
  const employee = useLoaderData();
  const navigate = useNavigate()
  const handleGoBack = () => {
    navigate(-1)
  }
  const {
    _id,
    name,
    img,
    designation,
    email,
    facebook,
    instagram,
    phone,
    date,
    twitter,
    linkedIn,
    details,
  } = employee || {};
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const designation = form.designation.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const img = form.img.value;
    const facebook = form.facebook.value;
    const instagram = form.instagram.value;
    const twitter = form.twitter.value;
    const linkedIn = form.linkedIn.value;
    const details = form.details.value;
    const updatedEmployee = {
      name,
      designation,
      email,
      phone,
      img,
      facebook,
      instagram,
      twitter,
      linkedIn,
      details,
    };
    console.log(updatedEmployee);
    fetch(`http://localhost:5000/employees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedEmployee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire(
            "Update successful!!",
            "The employee's information updated successfully",
            "success"
          );
          form.reset();
        }
      });
  };
  return (
    <>
      <Banner title={"Update employee"} />
        <button onClick={handleGoBack} className="px-5 py-3 bg-secondary text-white text-lg border border-secondary hover:text-secondary hover:bg-transparent flex justify-center items-center gap-2"><AiOutlineArrowLeft/> Go back</button>
      <div className="my-10 w-full bg-accent rounded px-5 py-10 sm:px-14 sm:py-20">
        <form
          className="text-lg font-light text-primary"
          onSubmit={handleUpdate}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <label>
              Name
              <input
                type="text"
                placeholder="Employee name"
                name="name"
                defaultValue={name}
                className="input input-bordered input-secondary w-full mt-1"
              />
            </label>
            <label>
              Designation
              <input
                type="text"
                placeholder="Designation of employee"
                name="designation"
                defaultValue={designation}
                className="input input-bordered input-secondary w-full mt-1"
              />
            </label>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <label>
              Email
              <input
                type="email"
                placeholder="Email"
                name="email"
                defaultValue={email}
                className="input input-bordered input-secondary w-full mt-1"
              />
            </label>
            <label>
              Phone Number
              <input
                type="number"
                placeholder="Phone Number"
                name="phone"
                defaultValue={phone}
                className="input input-bordered input-secondary w-full mt-1"
              />
            </label>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <label>
              Image URL
              <input
                type="text"
                placeholder="Image URL"
                name="img"
                defaultValue={img}
                className="input input-bordered input-secondary w-full mt-1"
              />
            </label>
            <label>
              Joining date
              <input
                type="date"
                name="date"
                defaultValue={date}
                className="input input-bordered input-secondary w-full mt-1"
              />
            </label>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <label>
              Facebook link
              <input
                type="text"
                placeholder="Facebook link"
                name="facebook"
                defaultValue={facebook}
                className="input input-bordered input-secondary w-full mt-1"
              />
            </label>
            <label>
              Instagram link
              <input
                type="text"
                placeholder="Instagram link"
                name="instagram"
                defaultValue={instagram}
                className="input input-bordered input-secondary w-full mt-1"
              />
            </label>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <label>
              Twitter link
              <input
                type="text"
                placeholder="Twitter link"
                name="twitter"
                defaultValue={twitter}
                className="input input-bordered input-secondary w-full mt-1"
              />
            </label>
            <label>
              LinkedIn link
              <input
                type="text"
                placeholder="LinkedIn link"
                name="linkedIn"
                defaultValue={linkedIn}
                className="input input-bordered input-secondary w-full mt-1"
              />
            </label>
          </div>
          <div className="mb-5">
            <label>
              Details
              <textarea
                className="textarea textarea-secondary resize-none w-full mt-1 h-40"
                placeholder="Details"
                name="details"
                defaultValue={details}
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

export default EmployeeUpdate;
