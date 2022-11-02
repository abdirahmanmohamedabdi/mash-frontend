import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#000000">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
          
            
          <NavLink  exact to="/manager/merchandisers" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="fa fa-users">Merchandisers</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/manager/locations" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="fa fa-map-marker">Locations</CDBSidebarMenuItem>
            </NavLink>

            <NavLink  exact to="/manager/routes" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="fa fa-building">Routes</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;