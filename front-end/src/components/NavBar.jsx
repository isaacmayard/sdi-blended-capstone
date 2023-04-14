import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import React from 'react';
import { NavItem } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

import useFetch from '../utilities/useFetch';

export default function NavBar() {
  const { data: users, isLoading, isError } = useFetch('users');

  if (isLoading) return 'Loading...';
  if (isError) return `An error has occurred: ${isError.message}`;

  return (
    <div className='tw-flex tw-border-[1px]'>
      <CDBSidebar textColor='#fff' backgroundColor='#000'>
        <CDBSidebarHeader prefix={<i className='fa fa-bars fa-large' />}>
          <a
            href='/'
            className='text-decoration-none tw-hover:ring-2'
            style={{ color: 'inherit' }}
          >
            U.S. SPACE FORCE
          </a>
        </CDBSidebarHeader>
        <CDBSidebarContent className='sidebar-content'>
          <br />
          <CDBSidebarMenuItem icon='user'>
            {users[0].rank} {users[0].firstName} {users[0].lastName}
            <ul>
              <li>Userinfo </li>
            </ul>
            <ul>
              <li>Userinfo </li>
            </ul>
            <ul>
              <li>Userinfo </li>
            </ul>
          </CDBSidebarMenuItem>
          <CDBSidebarMenu>
            <NavLink to='/home'>
              <CDBSidebarMenuItem icon='home'>HOME</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to='/troops'>
              <CDBSidebarMenuItem icon='users'>TROOPS</CDBSidebarMenuItem>
            </NavLink>
            {/* <NavLink to='/troops' activeClassName='activeClicked'>
              <CDBSidebarMenuItem icon='users'>TROOPS</CDBSidebarMenuItem>
            </NavLink> */}
            <NavLink to='/calendar'>
              <CDBSidebarMenuItem icon='calendar'>CALENDAR</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to='/tasks'>
              <CDBSidebarMenuItem icon='tasks'>TASKS</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to='/msl'>
              <CDBSidebarMenuItem icon='th-large'>MSL</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to='/unit'>
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
