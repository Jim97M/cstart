import { useLocation, Outlet, Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const RequiredAuth = ({allowedRoles }) => {
  const { auth } = useAuth();
  const location = useLocation();

  return (
    auth?.roleId?.find(role => allowedRoles?.includes(role))
    ? <Outlet />
    : auth?.email
        ? <Navigate to="/unauthorized" state={{ from: location }} replace />
        : <Navigate to="/signin" state={{ from: location }} replace />
  )
}

export default RequiredAuth;
