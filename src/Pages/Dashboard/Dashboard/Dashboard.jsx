import { Link, NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col justify-start items-start   px-[5%] sm:px-[10%] lg:pl-5 lg:pr-[10%]">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-ghost drawer-button lg:hidden"
          >
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
          <Outlet/>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-accent text-base-content">
            {/* Sidebar content here */}
            <li>
              <Link to={'/dashboard'}>All Services</Link>
            </li>
            <li>
              <NavLink to={'/dashboard/add-services'}>Add Services</NavLink>
            </li>
            <li>
              <NavLink to={'/dashboard/all-employee'}>All Employee</NavLink>
            </li>
            <li>
              <NavLink to={'/dashboard/add-employee'}>Add Employee</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
