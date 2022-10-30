import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider";
import { Route,Routes } from "react-router-dom";
IMPOR
import Sidebar from "../components/Sidebar";
export default function Manager() {
  const { token, role } = useContext(AuthContext);
  if (!token && role !== "manager") {
    return <Navigate to="/" replace />;
  }
  return( 
  <Routes>
  <div>
<Sidebar/>
<Route path="profile" element={<TeacherProfile />}>
        <Route path="info" element={<TeacherInformation />}>
          </Route>
          </Route>
  </div>
  </Routes>

)}
