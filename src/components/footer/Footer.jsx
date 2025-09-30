import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex justify-center bg-gradient-to-b to-blue-700/70 from-20%">
      <div className="w-11/12 max-md:w-full">
        <div className="flex justify-between max-md:text-center max-md:flex-col">
          <div className="w-full">
            <div className="flex max-md:justify-center gap-2 items-center cursor-pointer duration-500 ease-in text-gray-400 shadow-blue-30 p-2">
              <img className="w-10" src="/Logo.png" alt="logo" />
              <h1
                className="text-3xl content-center bg-gradient-to-b bg-clip-text from-white-200/90 to-60% from-48% to-gray-400"
                style={{ fontFamily: "Audiowide" }}
              >
                GameVerse
              </h1>
            </div>
            <div className="text-white">
              <ul>
                <li>
                  <Link className="hover:text-blue-500 transition">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-blue-500 transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-blue-500 transition">
                    Others Project
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-blue-500 transition">
                    Coming Soon
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full">
            <div>
              <h1 className="text-white/80 text-lg font-bold my-2">
                More About Games
              </h1>
            </div>
            <ul className="text-white">
              <Link to={"/"} className="hover:text-blue-500 transition">
                <li>Tags</li>
              </Link>
              <Link to={"/"} className="hover:text-blue-500 transition">
                <li>Stores</li>
              </Link>
              <Link to={"/"} className="hover:text-blue-500 transition">
                <li>Publishers</li>
              </Link>
              <Link to={"/"} className="hover:text-blue-500 transition">
                <li>Developers</li>
              </Link>
              <Link to={"/"} className="hover:text-blue-500 transition">
                <li>About Rawg</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="p-5 flex justify-center">
          <span className="text-gray-200 flex max-md:flex-col max-md:text-center gap-1">
            Allright Copyright © Reserved Powered By{" "}
            <a
              className="hover:text-sky-600 transition duration-1000"
              href="https://github.com/C1SLR"
            >
              UMAR
            </a>
            <p>And</p>
            <a className="hover:text-sky-600 transition duration-1000" href="https://github.com/SaadAli2004">
              SAAD
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
