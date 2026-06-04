//import
import { Navigate } from "react-router-dom";

//Types
type Props = {
  children: React.ReactNode;
  allowedRoles: string[];
};

//Token login Protected
export function ProtectedRoute({ children, allowedRoles }: Props) {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token) return <Navigate to="/" replace />;

  if (!allowedRoles.includes(role || "")) return <Navigate to="/products" replace />;

  return <>{children}</>;
}