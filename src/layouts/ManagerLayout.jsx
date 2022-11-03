import {useContext} from 'react'
import { AuthContext } from '../components/AuthProvider';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet,Navigate   } from "react-router-dom";
import Sidebar from '../components/Sidebar';
export const ManagerLayout = () => {
  const { token, role } = useContext(AuthContext);
  if (!token && role !== "manager") {
    return <Navigate to="/" replace />;
  }
  return (
    <div className="container-fluid">
    <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-5 d-none d-sm-inline"></span>
                </a>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li className="nav-item">
                        <a href="/manager/merchandisers" className="nav-link align-middle px-0">
                            <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Merchandisers</span>
                        </a>
                    </li>
                    <li>
                        <a href="/manager/routes" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Routes</span> </a>
                        <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                           
                        </ul>
                    </li>
                    <li>
                    <li >
                        <a href="/manager/outlets" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Outlets</span> </a>
                       
                    </li>
                    <li>
                        <a href="/manager/calendar" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline" > Calendar</span> </a>
                        <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                           
                        </ul>
                    </li>
                    
                        
                    </li>
                   
                </ul>
                <hr/>
                
            </div>
        </div>
        <div className="col py-3">
            <Outlet></Outlet>
        </div>
    </div>
</div>
  )
}


{/* <NavLink  exact to="/manager/outlets" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="fa fa-building">Outlets</CDBSidebarMenuItem>
            </NavLink>
            <NavLink  exact to="/manager/calendar" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="fa fa-calendar-check">Calendar</CDBSidebarMenuItem>
            </NavLink> */}