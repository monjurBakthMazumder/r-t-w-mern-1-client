import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillDelete,
  AiFillEdit,
} from "react-icons/ai";

const AllEmployeeRow = ({ employee, handleDelete }) => {
  const {
    _id,
    name,
    img,
    designation,
    phone,
    email,
    facebook,
    instagram,
    twitter,
    linkedIn,
  } = employee || {};
  return (
    <tr className="text-base font-medium">
      <th>
        <td className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={img} alt={`img of ${name}`} />
          </div>
        </td>
      </th>
      <td>
        <Link
          to={`/teams/${_id}`}
          className="font-bold text-primary hover:text-secondary"
        >
          {name}
        </Link>
      </td>
      <td>{designation}</td>
      <td>{phone}</td>
      <td>{email}</td>
      <td>
        <div className="flex items-center gap-1">
          <Link to={facebook} target="_blank">
            <AiFillFacebook className="text-2xl text-primary hover:text-secondary" />
          </Link>
          <Link to={instagram} target="_blank">
            <AiFillInstagram className="text-2xl text-primary hover:text-secondary" />
          </Link>
          <Link to={twitter} target="_blank">
            <AiFillTwitterSquare className="text-2xl text-primary hover:text-secondary" />
          </Link>
          <Link to={linkedIn} target="_blank">
            <AiFillLinkedin className="text-2xl text-primary hover:text-secondary" />
          </Link>
        </div>
      </td>
      <th>
        <div className="flex items-center gap-2">
          <Link to={`/dashboard/update-employee/${_id}`}>
            <AiFillEdit className="text-2xl text-primary hover:text-secondary" />
          </Link>
          <AiFillDelete
            onClick={() => handleDelete(_id)}
            className="text-2xl text-primary hover:text-red-600 cursor-pointer"
          />
        </div>
      </th>
    </tr>
  );
};

AllEmployeeRow.propTypes = {
  employee: PropTypes.object,
  handleDelete: PropTypes.func,
};

export default AllEmployeeRow;
