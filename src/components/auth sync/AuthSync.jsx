import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { useDispatch } from "react-redux";

const AuthSync = () => {
  const { isLoggedIn, user, isLoading } = useAuth0();
  const dispatch = useDispatch();
  return null;
};

export default AuthSync;
