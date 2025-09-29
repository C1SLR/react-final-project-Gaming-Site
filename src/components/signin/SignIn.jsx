import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState(null);
  const { loginWithRedirect } = useAuth0();
  const loginHandler = (e) => {
    e.preventDefault();
    loginWithRedirect();
  };
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  if (isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  const redirectHandler = (e, connection = null) => {
    e.preventDefault();

    const options = connection ? { connection: connection } : {};
    loginWithRedirect(options);
  };
  return (
    <form
      onSubmit={loginHandler}
      className="flex justify-center items-center bg-black h-screen"
    >
      <div className="flex flex-col text-white rounded bg-white/10 p-5">
        <h1>Sign In</h1>
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {authError && <p>{authError}</p>}
        <button type="submit">Sign In</button>
        <button
          type="button"
          onClick={(e) => redirectHandler(e, "google-oauth2")}
        >
          <GoogleIcon />
          Sign In With Google
        </button>
        <button type="button" onClick={(e) => redirectHandler(e, "facebook")}>
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
    </form>
  );
};

export default SignIn;
