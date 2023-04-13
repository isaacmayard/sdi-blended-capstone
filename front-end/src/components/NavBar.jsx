import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import React from 'react';
import { NavItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import useFetch from '../utilities/useFetch';

export default function NavBar() {
  const { data: users, isLoading, isError } = useFetch('users');

  if (isLoading) return 'Loading...';
  if (isError) return `An error has occurred: ${isError.message}`;

  return (
    <div className='col-sm-2 tw-flex '>
      <CDBSidebar textColor='#fff' backgroundColor='#000'>
        <CDBSidebarHeader prefix={<i className='fa fa-bars fa-large' />}>
          <a
            href='/'
            className='text-decoration-none'
            style={{ color: 'inherit' }}
          >
            U.S. SPACE FORCE
          </a>
        </CDBSidebarHeader>
        <CDBSidebarContent className='sidebar-content'>
          <CDBSidebarMenuItem icon='user'>
            {users[0].rank} {users[0].firstName} {users[0].lastName}
          </CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon='flag'>
            Unit: {users[0].unit}
          </CDBSidebarMenuItem>
          <CDBSidebarMenu>
            <hr />
            <NavLink exact to='/home' activeClassName='activeClicked'>
              <CDBSidebarMenuItem icon='home'>HOME</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to='/troops' activeClassName='activeClicked'>
              <CDBSidebarMenuItem icon='users'>TROOPS</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to='/calendar' activeClassName='activeClicked'>
              <CDBSidebarMenuItem icon='calendar'>CALENDAR</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to='/tasks' activeClassName='activeClicked'>
              <CDBSidebarMenuItem icon='tasks'>TASKS</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to='/msl' activeClassName='activeClicked'>
              <CDBSidebarMenuItem icon='th-large'>MSL</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to='/unit' activeClassName='activeClicked'>
              <CDBSidebarMenuItem icon='book'>
                UNIT DIRECTORY
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>

          <div className='logo'>
            <img
              src='/ussf_logo.png'
              alt='USSF_logo'
              width='500'
              height='600'
            />
          </div>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
}
