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
import MerchandisersContainer from './MerchandisersContainer';

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
          
            
          <NavLink exact={true} path="/merchandisers" component={MerchandisersContainer}>
              <CDBSidebarMenuItem icon="fa fa-users">Merchandisers</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact={true} path="/merchandisers" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="fa fa-map-marker">Locations</CDBSidebarMenuItem>
            </NavLink>

            exact={true} path="/merchandisers" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="fa fa-building">Routes</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;