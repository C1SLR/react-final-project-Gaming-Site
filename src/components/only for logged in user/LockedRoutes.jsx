import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginChecker from "../../reusable components/login checker/LoginChecker";

const LockedRoutes = ({ children }) => {
  const { isLoggedIn, isLoading } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  if (isLoading) {
    return <div>wait the page is loading</div>;
  }
  if (!isLoggedIn) {
    // alert("Please Login First To Access That Data");
    return <LoginChecker />;
  }
  return children;
};

export default LockedRoutes;
