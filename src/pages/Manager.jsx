import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider";

export default function Manager() {
  const { token, role } = useContext(AuthContext);
  if (!token && role !== "manager") {
    return <Navigate to="/" replace />;
  }
  return <div>Manager</div>;
}
