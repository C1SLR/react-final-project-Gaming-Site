import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";
const NavBar = () => {
  const { loginWithRedirect, logout } = useAuth0();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);
  const isLoading = useSelector((state) => state.auth.isLoading);

  const logOutHandler = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
  };

  const LoginHandler = () => {
    loginWithRedirect();
  };

  if (isLoading) {
    return <div>Please Wait For A While</div>;
  }
  return (
    <div className=" flex justify-center bg-gradient-to-b from-white/40 sticky top-0 z-10">
      <nav className="flex  text-white justify-between w-11/12">
        <div className="flex justify-center items-center cursor-pointer duration-500 ease-in text-transparent shadow-blue-30 p-2">
          <img
            src="/Logo.png"
            className="w-15 saturate-150 drop-shadow-[0_0_4px] drop-shadow-blue-400 p-2"
            alt="logo"
          />
          <Link to="/">
            <h1
              className="text-3xl content-center bg-gradient-to-b bg-clip-text from-neutral-200/90 to-60% from-48% to-gray-400"
              style={{ fontFamily: "Audiowide" }}
            >
              GameVerse
            </h1>
          </Link>
        </div>
        <div>
          {isLoggedIn ? (
            <div className="flex">
              <div className="flex items-center">
                <ul className="flex justify-center items-center">
                  <li className="hover:bg-gray-500 hover:shadow-[0_2px] p-4">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="hover:bg-gray-500 hover:shadow-[0_2px] p-4">
                    <Link to="/">Contact Us</Link>
                  </li>
                  <li className="hover:bg-gray-500 hover:shadow-[0_2px] p-4">
                    <Link>Categories</Link>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center items-center gap-2 px-4">
                <img
                  src={user?.picture}
                  alt={user?.name || "User Profile"}
                  className="w-8 h-8 rounded-full border border-blue-500"
                />
                <span>{user?.name}</span>
                <button
                  onClick={logOutHandler}
                  className="px-3 py-1 bg-red-700 rounded hover:bg-red-800 transition"
                >
                  Log Out
                </button>
              </div>
            </div>
          ) : (
            <div className="flex justify-center items-center">
              <button
                className="bg-blue-600/80 text-white font-medium hover:bg-blue-800 duration-200 rounded m-2 p-3 px-5"
                onClick={LoginHandler}
                type="button"
              >
                Log In
              </button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
