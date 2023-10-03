import { Navigate } from "react-router-dom";
import useDataContext from "../../hooks/context/useDataContext";
import { ReactElement } from "react";
type PrivateRouteType = {
  children: ReactElement;
};
const PrivateRoute = ({ children }: PrivateRouteType) => {
  const { user } = useDataContext();

  
  return user.name === "" ? <Navigate to="/login" /> : children;
}

export default PrivateRoute