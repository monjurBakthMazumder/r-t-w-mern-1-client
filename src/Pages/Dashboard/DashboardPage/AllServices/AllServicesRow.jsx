import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const AllServicesRow = ({ service, handleDelete }) => {
  const { _id, title, img, price } = service || {};
  return (
    <tr className="text-base font-medium">
      <td className="avatar">
        <div className="mask mask-squircle w-12 h-12">
          <img src={img} alt={`img of ${title}`} />
        </div>
      </td>
      <td>
        <Link
          to={`/services/${_id}`}
          className="font-bold text-primary hover:text-secondary"
        >
          {title}
        </Link>
      </td>
      <td>${price}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link to={`/dashboard/update-services/${_id}`}>
            <AiFillEdit className="text-2xl text-primary hover:text-secondary" />
          </Link>
          <AiFillDelete
            onClick={() => handleDelete(_id)}
            className="text-2xl text-primary hover:text-red-600 cursor-pointer"
          />
        </div>
      </td>
    </tr>
  );
};

AllServicesRow.propTypes = {
  service: PropTypes.object,
  handleDelete: PropTypes.func,
};

export default AllServicesRow;
