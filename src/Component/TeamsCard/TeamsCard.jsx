import PropTypes from "prop-types";
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';
import { Link } from "react-router-dom";

const TeamsCard = ({ team }) => {
  const { _id, name, img, designation, facebook, instagram, twitter, linkedIn } =
    team || {};
  return (
    <div className="card card-compact border">
      <figure className="p-5 pb-0 h-52">
        <img
          src={img}
          alt={`image of ${name}`}
          className="h-full w-fit"
        />
      </figure>
      <div className="card-body text-center">
        <h2 className="card-title mx-auto text-primary">{name}</h2>
        <span className="text-neutral font-light">{designation}</span>
        <div className="card-actions justify-center">
          <Link to={facebook} target="_blank"><AiFillFacebook className="text-2xl text-primary hover:text-secondary"/></Link>
          <Link to={instagram} target="_blank"><AiFillInstagram className="text-2xl text-primary hover:text-secondary"/></Link>
          <Link to={twitter} target="_blank"><AiFillTwitterSquare className="text-2xl text-primary hover:text-secondary"/></Link>
          <Link to={linkedIn} target="_blank"><AiFillLinkedin className="text-2xl text-primary hover:text-secondary"/></Link>
        </div>
        <Link to={`/teams/${_id}`} className="text-primary hover:text-secondary underline">Details</Link>
      </div>
    </div>
  );
};

TeamsCard.propTypes = {
  team: PropTypes.object,
};

export default TeamsCard;
