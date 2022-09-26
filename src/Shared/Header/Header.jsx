import React from "react";
import "./Header.css";
import Logo from "../../Assets/Images/logo.png";

const Header = ({ children }) => {
  const menu = (
    <>
      <li className="mx-2">
        <a>Home</a>
      </li>
      <li className="mx-2">
        <a>Our Portfolio</a>
      </li>
      <li className="mx-2">
        <a>Our Team</a>
      </li>
      <li className="mx-2">
        <a>Contact Us</a>
      </li>
      <button className="mx-2 btn btn-accent px-12 py-0">
        <a>Login</a>
      </button>
    </>
  );
  return (
    <>
      <div className="drawer drawer-end">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* <!-- Navbar --> */}

          <div className="w-full navbar bg-primary">
            <div className="container mx-auto px-4">
              

              <div className="flex-1 px-2 mx-2 relative w-full h-full">
                <img className="w-24" src={Logo} alt="logo" />
              </div>

              <div className="flex-none hidden lg:block">
                <ul className="menu menu-horizontal">
                  {/* <!-- Navbar menu content here --> */}
                  {menu}
                </ul>
              </div>
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="my-drawer-3"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
            </div>
          </div>
          {/* <!-- Page content here --> */}
          {children}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
            {/* <!-- Sidebar content here --> */}
            {menu}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
