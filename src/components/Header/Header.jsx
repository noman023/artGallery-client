import { Link, NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import Button from "../Button/Button";

export default function Header() {
  const navLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>

      <li>
        <NavLink to={"/register"}>Register</NavLink>
      </li>

      <li>
        <NavLink to={"/addItem"}>Add an Item</NavLink>
      </li>
    </>
  );

  return (
    <nav className="mb-8">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              id="navUl2"
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>

          <Link to={"/"} className=" text-xl md:text-3xl font-bold">
            <span className="text-amber-500">Art</span>
            Gallery
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul id="navUl" className="menu menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>

        <div className="navbar-end">
          <div>
            <a
              data-tooltip-id="my-tooltip"
              data-tooltip-content="User name"
              data-tooltip-place="bottom"
            >
              <div className="avatar">
                <div className="w-16 rounded-full mr-5">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
            </a>

            <Tooltip id="my-tooltip" />
          </div>

          <Link to={"/login"}>
            <Button>Login</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
