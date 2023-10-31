import Banner from "../../../../Component/Banner/Banner";

const AddEmployee = () => {
    const handleCheckout = (e) => {
      e.preventDefault();
      const form = e.target
      const name = form.name.value
      const designation = form.designation.value
      const email = form.email.value
      const phone = form.phone.value
      const address = form.address.value
      const facebook = form.facebook.value
      const instagram = form.instagram.value
      const twitter = form.twitter.value
      const linkedIn = form.linkedIn.value
      const details = form.details.value
      const employee = {name, designation, email, phone, address,facebook, instagram, twitter, linkedIn, details}
      console.log(employee);
    };
    return (
        <>
          <Banner title={"Add employee"} />
          <div className="my-10 w-full bg-accent rounded px-5 py-10 sm:px-14 sm:py-20">
            <form
              className="text-lg font-light text-primary"
              onSubmit={handleCheckout}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <label>
                  Name
                  <input
                    type="text"
                    placeholder="Employee name"
                    required
                    name="name"
                    className="input input-bordered input-secondary w-full mt-1"
                  />
                </label>
                <label>
                  Designation 
                  <input
                    type="text"
                    placeholder="Designation of employee"
                    required
                    name="designation"
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
                    required
                    name="email"
                    className="input input-bordered input-secondary w-full mt-1"
                  />
                </label>
                <label>
                  Phone Number
                  <input
                    type="number"
                    placeholder="Phone Number"
                    required
                    name="phone"
                    className="input input-bordered input-secondary w-full mt-1"
                  />
                </label>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <label>
                  Address
                  <input
                    type="text"
                    placeholder="Address"
                    required
                    name="address"
                    className="input input-bordered input-secondary w-full mt-1"
                  />
                </label>
                <label>
                  Joining date
                  <input
                    type="date"
                    required
                    name="date"
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
                    required
                    name="facebook"
                    className="input input-bordered input-secondary w-full mt-1"
                  />
                </label>
                <label>
                  Instagram link
                  <input
                    type="text"
                    placeholder="Instagram link"
                    required
                    name="instagram"
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
                    required
                    name="twitter"
                    className="input input-bordered input-secondary w-full mt-1"
                  />
                </label>
                <label>
                  LinkedIn link
                  <input
                    type="text"
                    placeholder="LinkedIn link"
                    required
                    name="linkedIn"
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
                    required
                    name="details"
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

export default AddEmployee;