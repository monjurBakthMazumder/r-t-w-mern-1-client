import PropTypes from "prop-types";
import { AiFillDelete } from "react-icons/ai";

const BookingRow = ({ booking, handleDelete }) => {
  const { _id, service, img, price, date } = booking || {};
  return (
    <tr className="text-base font-medium">
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={img} alt={`img of ${service}`} />
            </div>
          </div>
          <div>
            <div className="font-bold">{service}</div>
          </div>
        </div>
      </td>
      <td>${price}</td>
      <td>{date}</td>
      <th>
        <AiFillDelete
          onClick={() => handleDelete(_id)}
          className="text-2xl text-primary hover:text-red-600 cursor-pointer"
        />
      </th>
    </tr>
  );
};

BookingRow.propTypes = {
  booking: PropTypes.object,
  handleDelete: PropTypes.func,
};

export default BookingRow;
