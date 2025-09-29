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
    <nav className="flex text-white justify-between">
      <div className="flex cursor-pointer duration-500 ease-in text-transparent shadow-blue-300">
        <img
          src="/Logo.png"
          className="w-30 saturate-150 drop-shadow-[0_0_4px] drop-shadow-blue-400 p-2"
          alt=""
        />
        <Link to="/">
          <h1
            className="text-4xl content-center bg-gradient-to-b bg-clip-text from-neutral-200 to-60% from-48% to-gray-800"
            style={{ fontFamily: "Audiowide" }}
          >
            GameVerse
          </h1>
        </Link>
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
            <div>
              <img
                src={user?.picture}
                alt={user?.name || "User Profile"}
                className="w-8 h-8 rounded-full border border-blue-500"
              />
              <span>{user?.name}</span>
              <button
                onClick={logOutHandler}
                className="px-3 py-1 bg-red-600 rounded hover:bg-red-700 transition"
              >
                Log Out
              </button>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <button
              className="text-white hover:text-blue-500 duration-200"
              onClick={LoginHandler}
              type="button"
            >
              Log In
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
