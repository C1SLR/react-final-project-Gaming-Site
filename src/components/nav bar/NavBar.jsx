import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";
const NavBar = () => {
  const { loginWithRedirect, logout } = useAuth0();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);
  const isLoading = useSelector((state) => state.auth.isLoading);
  if (isLoading) {
    return <>Please Wait For A While</>;
  }
  return (
    <nav className="flex text-white justify-between">
      <div className="flex cursor-pointer duration-500 ease-in text-transparent shadow-blue-300">
        <img
          src="/Logo.png"
          className="w-30 saturate-150 drop-shadow-[0_0_4px] drop-shadow-blue-400 p-2"
          alt=""
        />
        <h1
          className="text-4xl content-center bg-gradient-to-b bg-clip-text from-neutral-200 to-60% from-48% to-gray-800"
          style={{ fontFamily: "Audiowide" }}
        >
          GameVerse
        </h1>
      </div>
      <div>
        {isLoggedIn ? (
          <div className="flex">
            <div>
              <ul className="flex">
                <li>Home</li>
                <li>Contact us</li>
                <li>Categories</li>
              </ul>
            </div>
            <div className="flex">
              <button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Sign Out
              </button>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <button
              className="text-white hover:text-blue-500 duration-200"
              onClick={() => loginWithRedirect()}
            >
              <p>Sign In / Sign Up</p>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
