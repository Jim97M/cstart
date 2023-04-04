import { useLocation, Outlet, Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
const RequiredAuth = ({allowedRoles}) => {
  const { auth}  = useAuth();
  const role = auth?.roles;
  console.log("AuthRoles is", auth?.roles);

  const location = useLocation();

  return (
  allowedRoles(auth?.roles)
    ? <Outlet />
    : auth?.email
        ? <Navigate to="/unauthorized" state={{ from: location }} replace />
        : <Navigate to="/" state={{ from: location }} replace />
  )
}

export default RequiredAuth;
