import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo/logo.png";

const Header = () => {
  const navItems = (
    <>
      <li>
        <Link
          to="/"
          className="text-[#97B1CB] text-[28px] lg:text-base leading-4 mb-9 lg:mb-0"
        >
          Process
        </Link>
      </li>
      <li>
        <Link
          to="/"
          className="text-[#97B1CB] text-[28px] lg:text-base leading-4 mb-9 lg:mb-0"
        >
          Works
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          className="text-[#97B1CB] text-[28px] lg:text-base leading-4 mb-9 lg:mb-0"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="/"
          className="text-[#97B1CB] text-[28px] lg:text-base leading-4 mb-9 lg:mb-0"
        >
          Contract
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-[#061019]">
      <div className="navbar-start ">
        <div className="dropdown">
          <div className="flex">
            <a className=" normal-case text-[21px] leading-6 font-semibold lg:ml-[50px] mt-1">
              <Link to="/home">
                <img src={logo} alt="" />
              </Link>
            </a>

            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-white"
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
          </div>
          <ul
            tabIndex={1}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className="text-lg leading-4">
              <Link to="" className="text-[#97B1CB] text-lg">
                Services
              </Link>
            </li>
            {navItems}
          </ul>
        </div>
        {/*  */}
      </div>
      <div className="navbar-end hidden lg:flex items-center mt-5 ">
        <ul className="menu menu-horizontal px-1 ">
          <li>
            <Link to="/all-services">All Services</Link>
          </li>
          {navItems}
          <button className="btn bg-[#325BFF] border-none rounded-[30px] py-[14px] px-[26px] text-white -mt-2 lg:ml-10 lg:mr-[50px] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#2550fa] duration-500 capitalize">
            Hire Us ...
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
