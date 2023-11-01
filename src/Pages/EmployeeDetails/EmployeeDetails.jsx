import { useLoaderData, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiOutlineArrowLeft,
} from "react-icons/ai";

const EmployeeDetails = () => {
  const employee = useLoaderData();
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  const {
    name,
    img,
    designation,
    email,
    facebook,
    instagram,
    twitter,
    linkedIn,
    details,
  } = employee || {};
  return (
    <div className="mb-10 mt-5 md:mb-20 md:mt-10 px-[5%] sm:px-[10%]">
      <button
        onClick={handleGoBack}
        className="px-5 py-3 bg-secondary text-white text-lg border border-secondary hover:text-secondary hover:bg-transparent flex justify-center items-center gap-2 mb-5"
      >
        <AiOutlineArrowLeft /> Go back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="">
          <img src={img} alt="" className="w-full h-fit" />
        </div>
        <div className="md:col-span-2">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">
            {name}
          </h1>
          <p className="text-xl font-bold text-secondary">{designation}</p>
          <p className="font-light text-neutral">Email: {email}</p>
          <div className="flex items-center gap-1 my-5">
            <Link to={facebook} target="_blank">
              <AiFillFacebook className="text-3xl text-primary hover:text-secondary" />
            </Link>
            <Link to={instagram} target="_blank">
              <AiFillInstagram className="text-3xl text-primary hover:text-secondary" />
            </Link>
            <Link to={twitter} target="_blank">
              <AiFillTwitterSquare className="text-3xl text-primary hover:text-secondary" />
            </Link>
            <Link to={linkedIn} target="_blank">
              <AiFillLinkedin className="text-3xl text-primary hover:text-secondary" />
            </Link>
          </div>
          <p className="text-neutral font-light sm:text-lg text-justify my-5">
            {details}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
