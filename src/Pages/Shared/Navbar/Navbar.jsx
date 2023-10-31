import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  const navItem = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline text-secondary font-medium" : ""
          }
        >
          Home
        </NavLink>
      </li>
    </>
  );
  return (
    <nav className="navbar bg-base-100 border-b-2 border-secondary px-[5%] sm:px-[10%]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItem}
          </ul>
        </div>
        <Link to={"/"}>
          <Logo />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium text-lg">{navItem}</ul>
      </div>
      <div className="navbar-end">
        <Link to={"/login"} className="bg-secondary text-white px-5 py-1">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
