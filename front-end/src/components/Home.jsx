/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import react, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { NavLink } from 'react-router-dom';
import FullCalendar from './FullCalendar';
// eslint-disable-next-line import/order
import '../style/home.css';
import MslForm from './MslForm';

// eslint-disable-next-line import/order
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavItem } from 'react-bootstrap';

const testMsl = ['Title', 'Date', 'Tags', 'Description'];

// import { useSome } from '../utilities/MainContextProvider';

export default function Sidebar() {
  const {
    data: users,
    isLoading: isLoadingUsers,
    isError: isErrorUsers,
  } = useQuery(['usersFetch'], async () => {
    const res = await axios.get('http://localhost:8085/users/');
    const { data } = res;
    return data;
  });

  const {
    data: tasks,
    isLoading: isLoadingTasks,
    isError: isErrorTasks,
  } = useQuery(['tasksFetch'], async () => {
    const res = await axios.get('http://localhost:8085/tasks/');
    const { data } = res;
    return data;
  });

  const testArray = tasks?.map((task) => {
    const { title, dueDate: start, description } = task;
    return { title, start, description };
  });

  return (
    <>
      {isLoadingUsers && isLoadingTasks ? (
        <div> Loading... </div>
      ) : (
        <div className='row span'>
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
                    <CDBSidebarMenuItem icon='calendar'>
                      CALENDAR
                    </CDBSidebarMenuItem>
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
          <div className='col tw-flex'>
            <div className='col-sm-5 scroll'>
              <Card className='card-box m-3'>
                <Card.Body>
                  <Card.Text>
                    <h4>TASKS</h4>
                    <hr />
                    <br />
                    {tasks.map((task) => (
                      <>
                        <div className='card text-center tw-bg-gray-200 tw-text-black '>
                          <div className='card-header'>{task.title}</div>
                          <div className='card-body'>
                            <p className='card-text'>{task.description}</p>
                          </div>
                          <div className='card-footer tw-text-black'>
                            Due date: {task.dueDate}
                          </div>
                        </div>
                        <br />
                      </>
                    ))}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className='col-7'>
              <Card className='card-box m-3'>
                <Card.Body>
                  <Card.Text>
                    <h4>TASK CALENDAR</h4>
                    <hr />
                    {!isLoadingTasks && <FullCalendar events={testArray} />}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
