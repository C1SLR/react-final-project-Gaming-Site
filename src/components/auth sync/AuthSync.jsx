import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLoginState } from "../redux/authSlice";

const AuthSync = () => {
  const { isLoggedIn, user, isLoading } = useAuth0();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setLoginState({
        isLoggedIn: isLoggedIn,
        user: user,
        isLoading: isLoading,
      })
    );
  }, [isLoggedIn, user, isLoading, dispatch]);
  return null;
};

export default AuthSync;
