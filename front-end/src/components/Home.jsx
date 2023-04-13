/* eslint-disable import/no-unresolved */

import react, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';

import DemoApp from './FullCalendar';
// eslint-disable-next-line import/order
import MslForm from './MslForm';

import '../style/sidebar.css';

// eslint-disable-next-line import/order
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';

const testMsl = ['Title', 'Date', 'Tags', 'Description'];

// import { useSome } from '../utilities/MainContextProvider';

export default function Sidebar() {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch('http://localhost:8085/users/', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => res.json())
      .then((data) => setUser(data[0]));
  }, []);

  return (
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
              {' '}
              SPC3, {user.lastName}, {user.firstName}
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon='flag'>1ST WHATEVER SQ</CDBSidebarMenuItem>
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
        <div className='col-sm-5'>
          <Card className='card-box m-3'>
            <Card.Body>
              <Card.Text>
                <h4>USER INFORMATION</h4>
                <hr />
                <p>
                  SPC3, {user.lastName}, {user.firstName}
                </p>
                <p>Unit: 1ST WHATEVER SQ</p>
                <p>Section: BOUNDARY</p>
                <p>Phone Number: 225-4269</p>
                <p>Supervisor: SGT GRIFFIN, STEWIE</p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className='card-box m-3'>
            <Card.Body>
              <Card.Text>
                <h4>TASKS</h4>
                <hr />
                <p>DUE TODAY:</p>
                <ul>
                  <li>QTR AWARDS</li>
                </ul>
                <p>DUE THIS WEEK:</p>
                <ul>
                  <li>SERVER PROJECT</li>
                </ul>
                <p>DUE NEXT WEEK:</p>
                <ul>
                  <li>MAKE MORE TASKS</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className='card-box m-3'>
            <Card.Body>
              <Card.Text>
                <h4>INPUT NEW TASKS</h4>
              </Card.Text>
              <hr />
              <br />
              <MslForm
                items={testMsl}
                requireItems={['Title', 'Date', 'Description']}
              />
            </Card.Body>
          </Card>
        </div>
        <div className='col-7'>
          <Card className='card-box m-3'>
            <Card.Body>
              <Card.Text>
                <h4>TASK CALENDAR</h4>
                <hr />
                <DemoApp />
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
