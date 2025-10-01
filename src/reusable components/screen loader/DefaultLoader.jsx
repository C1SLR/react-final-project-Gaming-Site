import React from "react";

const DefaultLoader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <img
          src="/Logo.png"
          alt="Loading"
          className="animate-pulse ease-linear opacity-0"
        />
        <p className="text-white text-center text-4xl animate-pulse ease-linear opacity-0 my-5">
          Please Wait
        </p>
      </div>
    </div>
  );
};

export default DefaultLoader;
