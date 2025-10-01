import { useSelector } from "react-redux";
import LoginChecker from "../../reusable components/login checker/LoginChecker";
import DefaultLoader from "../../reusable components/screen loader/DefaultLoader";

const LockedRoutes = ({ children }) => {
  const { isLoggedIn, isLoading } = useSelector((state) => state.auth);
  if (isLoading) {
    return <DefaultLoader />;
  }
  if (isLoggedIn) {
    return <LoginChecker />;
  }
  return children;
};

export default LockedRoutes;
