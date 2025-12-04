import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRuteProps {
  children: ReactNode;
}

function ProtectedRoute({ children }: ProtectedRuteProps) {
  const isLoggedIn = Boolean(localStorage.getItem("token"));

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

export default ProtectedRoute;
