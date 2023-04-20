import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import React from 'react';
import { NavLink } from 'react-router-dom';

import { useSome } from '../utilities/MainContextProvider';
import useFetch from '../utilities/useFetch';

export default function NavBar() {
  const { data: users, isLoading, isError } = useFetch('users');
  const { currentUser, setCurrentUser, isLoggedIn, setIsLoggedIn } = useSome();

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
          <CDBSidebarMenuItem icon='user'>
            {(
              <p>
                <strong>{currentUser.rank}</strong> {currentUser.firstName}{' '}
                {currentUser.lastName}
              </p>
            ) || <p>{currentUser.userName}</p>}
            <ul>
              {currentUser.unit && (
                <li className='tw-flex-wrap'>Unit: {currentUser.unit} </li>
              )}
            </ul>
            <ul>
              {currentUser.work_section && (
                <li className='tw-break-words'>
                  Section: {currentUser.work_section}{' '}
                </li>
              )}
            </ul>
            <ul>
              {currentUser.contact_number && (
                <li className='tw-flex-wrap'>{currentUser.contact_number} </li>
              )}
            </ul>
          </CDBSidebarMenuItem>
          <CDBSidebarMenu>
            <NavLink to='/home'>
              {isLoggedIn && (
                <CDBSidebarMenuItem icon='home'>HOME</CDBSidebarMenuItem>
              )}
            </NavLink>
            <NavLink to='/section'>
              {isLoggedIn && (
                <CDBSidebarMenuItem icon='users'>SECTION</CDBSidebarMenuItem>
              )}
            </NavLink>
            <NavLink to='/login'>
              {!isLoggedIn && (
                <CDBSidebarMenuItem icon='user'>LOGIN</CDBSidebarMenuItem>
              )}
            </NavLink>
            <NavLink to='/calendar'>
              {isLoggedIn && (
                <CDBSidebarMenuItem icon='calendar'>
                  CALENDAR
                </CDBSidebarMenuItem>
              )}
            </NavLink>
            <NavLink to='/taskadmin'>
              {isLoggedIn && currentUser.admin && (
                <CDBSidebarMenuItem icon='key'>
                  TASK MANAGEMENT
                </CDBSidebarMenuItem>
              )}
            </NavLink>
            <NavLink to='/tasks'>
              {isLoggedIn && (
                <CDBSidebarMenuItem icon='tasks'>TASKS</CDBSidebarMenuItem>
              )}
            </NavLink>
            <NavLink to='/msl'>
              {isLoggedIn && (
                <CDBSidebarMenuItem icon='th-large'>MSL</CDBSidebarMenuItem>
              )}
            </NavLink>
            <NavLink to='/awards'>
              {isLoggedIn && (
                <CDBSidebarMenuItem icon='award'>
                  BULLET SHAPER
                </CDBSidebarMenuItem>
              )}
            </NavLink>
            <NavLink to='/unit'>
              {isLoggedIn && (
                <CDBSidebarMenuItem icon='book'>
                  UNIT DIRECTORY
                </CDBSidebarMenuItem>
              )}
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
