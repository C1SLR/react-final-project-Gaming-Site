import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const LockedRoutes = ({ children }) => {
  const { isLoggedIn, isLoading } = useSelector((state) => state.auth);
  if (isLoading) {
    return <div>wait the page is loading</div>;
  }
  if (!isLoggedIn) {
    alert("Please Login First To Access That Data")
    return <Navigate to="/" />;
  }
  return children;
};

export default LockedRoutes;
