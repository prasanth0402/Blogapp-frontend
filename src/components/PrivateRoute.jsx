import { Navigate } from "react-router-dom";
import { getCurrentUser } from "../util/authuser";

const PrivateRoute = ({ children }) => {
  const user = getCurrentUser();
  return user ? children : <Navigate to="/" replace />;
};

export default PrivateRoute;
