import React, { useContext } from "react";
import { GameContext } from "../Context/Context";
import CloseIcon from "@mui/icons-material/Close";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const MobileNav = () => {
  const { isOpen, setIsOpen } = useContext(GameContext);
  const { loginWithRedirect, logout } = useAuth0();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);
  const toggleClose = () => {
    setIsOpen(!isOpen);
  };
  const LoginHandler = () => {
    loginWithRedirect();
  };
  const logOutHandler = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
  };
  return (
    <div className="absolute w-full bg-black rounded top-0 right-1">
      {isLoggedIn ? (
        <div>
          {isOpen ? (
            <div>
              <div className="flex justify-between p-2">
                <div className="p-1 flex gap-2">
                  <img src="/Logo.png" alt="logo" className="w-8" />
                  <p>GameVerse</p>
                </div>
                <button
                  onClick={toggleClose}
                  className="hover:bg-gray-500 rounded"
                >
                  <CloseIcon />
                </button>
              </div>
              <div className="flex justify-between mx-5">
                <span className="font-bold">{user?.name}</span>
                <img
                  src={user?.picture}
                  alt={user?.name || "User Profile"}
                  className="w-8 h-8 rounded-full border border-blue-500"
                />
              </div>
              <ul className="justify-center items-center w-full">
                <li className="active:bg-gray-500 active:shadow-[0_2px] transition pl-5 p-2 my-2">
                  <Link to="/">Home</Link>
                </li>
                <li className="active:bg-gray-500 active:shadow-[0_2px] transition pl-5 p-2 my-2">
                  <Link to="/">Contact Us</Link>
                </li>
                <li className="active:bg-gray-500 active:shadow-[0_2px] transition pl-5 p-2 my-2">
                  <Link>Categories</Link>
                </li>
              </ul>
              <button
                onClick={logOutHandler}
                className="bg-red-700 hover:bg-red-800 font-medium transition duration-200 rounded-b p-2 w-full"
              >
                Log Out
              </button>
            </div>
          ) : (
            <>close</>
          )}
        </div>
      ) : (
        <div>
          {isOpen ? (
            <div>
              <div className="flex justify-between p-2">
                <div className="p-1 flex gap-2">
                  <img src="/Logo.png" alt="logo" className="w-8" />
                  <p>GameVerse</p>
                </div>
                <button
                  onClick={toggleClose}
                  className="hover:bg-gray-500 rounded"
                >
                  <CloseIcon />
                </button>
              </div>
              <div className="flex items-center  w-full">
                <ul className="justify-center items-center w-full">
                  <li className="active:bg-gray-500 active:shadow-[0_2px] transition pl-5 p-2 my-2">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="active:bg-gray-500 active:shadow-[0_2px] transition pl-5 p-2 my-2">
                    <Link to="/">Contact Us</Link>
                  </li>
                  <li className="active:bg-gray-500 active:shadow-[0_2px] transition pl-5 p-2 my-2">
                    <Link>Categories</Link>
                  </li>
                </ul>
              </div>
              <button
                className="bg-blue-600/80 text-white font-medium hover:bg-blue-800 duration-200 rounded-b p-2 w-full"
                onClick={LoginHandler}
                type="button"
              >
                Log In
              </button>
            </div>
          ) : (
            <>close</>
          )}
        </div>
      )}
    </div>
  );
};

export default MobileNav;
