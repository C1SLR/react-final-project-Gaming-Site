import { useAuth0 } from "@auth0/auth0-react";
import LoginPopup from "./LoginPopup";

const LoginChecker = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <>Please Wait For A While</>;
  }
  if (!isAuthenticated) {
    return <LoginPopup />;
  }
  return null;
};

export default LoginChecker;
