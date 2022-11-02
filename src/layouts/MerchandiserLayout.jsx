import { useContext } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider";
import { Navigate } from "react-router-dom";

export const MerchandiserLayout = () => {
  const { token, role } = useContext(AuthContext);
  if (!token && role !== "merch") {
    return <Navigate to="/" replace />;
  }
  return (
      <Outlet />
  );
};
