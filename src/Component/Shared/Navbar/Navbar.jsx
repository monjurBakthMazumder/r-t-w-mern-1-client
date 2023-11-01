import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import useAuth from "../../../Hock/useAuth";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logout } = useAuth();
  const handleLogOut = () => {
    logout().then(() => {
      Swal.fire("Log Out !!", "Logout successful", "success");
    });
  };
  const navItem = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "underline text-secondary font-medium"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "underline text-secondary font-medium"
              : ""
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "underline text-secondary font-medium"
              : ""
          }
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/teams"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "underline text-secondary font-medium"
              : ""
          }
        >
          Teams
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/booking"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "underline text-secondary font-medium"
                  : ""
              }
            >
              Booking
            </NavLink>
          </li>
        </>
      )}

      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "underline text-secondary font-medium"
              : ""
          }
        >
          Dashboard
        </NavLink>
      </li>
    </>
  );
  return (
    <nav className="navbar bg-base-100 border-b-2 border-secondary px-5 sm:px-[10%] z-50">
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
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-50"
          >
            {navItem}
          </ul>
        </div>
        <Link to={"/"}>
          <Logo />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium text-lg">
          {navItem}
        </ul>
      </div>
      <div className="navbar-end">
        {!user ? (
          <Link to={"/sing-in"} className="bg-secondary text-white px-5 py-1">
            Login
          </Link>
        ) : (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src={
                    user?.photoURL
                      ? user?.photoURL
                      : "https://th.bing.com/th/id/R.29ff80e1b872c3a34502081bb24ddc77?rik=h8tKL%2fwBLXoG%2fQ&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_504768.png&ehk=QoBgGBjkzTJNk0pSWlKqqP5cBkdE2%2b593jcUJXVPBCg%3d&risl=&pid=ImgRaw&r=0"
                  }
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-50 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-60"
            >
              <li>
                <a>{user?.displayName}</a>
              </li>
              <li onClick={handleLogOut}>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
