import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider";
import { Route, Routes } from "react-router-dom";
import Location from "./Location";
import MerchandisersContainer from "../components/MerchandisersContainer";
import Sidebar from "../components/Sidebar";
export default function Manager() {
  const { token, role } = useContext(AuthContext);
  if (!token && role !== "manager") {
    return <Navigate to="/" replace />;
  }
  return (
    <div>
      <Sidebar />
      <div></div>
    </div>
  );
}
