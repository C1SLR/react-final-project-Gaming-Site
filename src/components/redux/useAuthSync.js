import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
export const useAuthSync = () => {
  const { isAuthenticated, user, isLoading } = useAuth0();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setLoginState({
        isLoggedIn: isAuthenticated,
        user: user || null,
        isLoading: isLoading,
      })
    ),
      [isAuthenticated, user, isLoading, dispatch];
  });
};
