import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";

const Signup = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  if (isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  useEffect(() => {
    if (!isAuthenticated) {
      loginWithRedirect({
        authorizationParams: {
          screen_hint: "signup",
        },
      });
    }
  }, [loginWithRedirect, isAuthenticated]);
  return (
    <div className="flex justify-center items-center bg-black h-screen">
      <div className="flex flex-col text-white rounded bg-white/10 p-5">
        <h1>Sign Up</h1>
        <input type="username" placeholder="Enter User Name" />
        <input type="password" placeholder="Enter Password" />
        <button>Sign Up</button>

        <span>
          <p>
            Already Have an Account
            <Link
              className="hover:text-blue-600 underline text-blue-500"
              to="/signin"
            >
              Sign In
            </Link>
          </p>
        </span>
      </div>
    </div>
  );
};

export default Signup;
