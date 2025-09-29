import React from "react";
import { Link } from "react-router-dom";
import SignIn from "../signin/SignIn";
const NavBar = () => {
  return (
    <div className="flex text-white justify-between">
      <div className="flex cursor-pointer duration-500 ease-in text-transparent shadow-blue-300">
        <img src="/Logo.png" className="w-30 saturate-150 drop-shadow-[0_0_4px] drop-shadow-blue-400 p-2" alt="" />
        <h1 className="text-4xl content-center bg-gradient-to-b bg-clip-text from-neutral-200 to-60% from-48% to-gray-800" style={{ fontFamily: "Audiowide" }}>GameVerse</h1>
      </div>
      <div className="flex">
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
