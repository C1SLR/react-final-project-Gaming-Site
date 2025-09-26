import React from 'react'
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex justify-center items-center bg-black h-screen">
      <div className="flex flex-col text-white rounded bg-white/10 p-5">
        <h1>Sign Up</h1>
        <input type="username" placeholder="Enter User Name" />
        <input type="password" placeholder="Enter Password" />
        <button>Sign In</button>

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
  )
}

export default Signup
