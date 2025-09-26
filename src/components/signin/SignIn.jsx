import React from "react";
import { Link } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from '@mui/icons-material/Facebook';

const SignIn = () => {
  return (
    <div className="flex justify-center items-center bg-black h-screen">
      <div className="flex flex-col text-white rounded bg-white/10 p-5">
        <h1>Sign In</h1>
        <input type="text" placeholder="Enter User Name" />
        <input type="password" placeholder="Enter Password" />
        <button>Sign In</button>
        <button>
          <GoogleIcon />
          Sign In With Google
        </button>
        <button>
          <FacebookIcon />
          Sign In With Facebook
        </button>
        <span>
          <p>
            Don't Have An Account
            <Link
              className="hover:text-blue-600 underline text-blue-500"
              to="/signup"
            >
              Sign Up
            </Link>
          </p>
        </span>
      </div>
    </div>
  );
};

export default SignIn;
