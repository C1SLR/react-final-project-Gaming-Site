import React from "react";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import SignIn from "../signin/SignIn";
const NavBar = () => {
  return (
    <div className="flex text-white justify-between">
      <div className="flex">
        <h1>Gaming Site</h1>
      </div>
      <div className="flex">
        <div className="flex justify-center items-center">
          <input type="text" placeholder="Search Here" />
          <IoSearch />
        </div>
        <div>
          <ul className="flex">
            <li>Home</li>
            <li>Contact us</li>
            <li>Categories</li>
          </ul>
        </div>
        <div className="flex">
          <Link to="/signin">
          <p>Sign In</p>
          </Link>
          <p>Sign Up</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
