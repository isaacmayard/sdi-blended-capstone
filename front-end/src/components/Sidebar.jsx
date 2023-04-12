/* eslint-disable import/no-unresolved */

import EventCalendar from 'react';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';

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

const events = [
  {
    start: '2015-07-20',
    end: '2015-07-02',
    eventClasses: 'optionalEvent',
    title: 'test event',
    description: 'This is a test description of an event',
  },
  {
    start: '2015-07-19',
    end: '2015-07-25',
    title: 'test event',
    description: 'This is a test description of an event',
    data: 'you can add what ever random data you may want to use later',
  },
];

const testMsl = [
  {
    id: 1,
    title: 'test1',
    date: Date.now(),
    tags: 'testTag',
    description: 'test Description',
  },
];

function Sidebar() {
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
              SPC3, GRIFFIN, PETER
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
        <div className='col-sm-7'>
          <Card className='card-box m-3'>
            <Card.Body>
              <Card.Text>
                <h4>RANK, LAST NAME, FIRST NAME</h4>
                <hr />
                <p>SPC3, GRIFFIN, PETER</p>
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
                <p>TASKS</p>
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
        </div>
        <div className='col-5'>
          <Card className='card-box m-3'>
            <Card.Body>
              <Card.Text>
                <h4>RANK, LAST NAME, FIRST NAME</h4>
                <hr />
                <p>SPC3, GRIFFIN, PETER</p>
                <p>Unit: 1ST WHATEVER SQ</p>
                <p>Section: BOUNDARY</p>
                <p>Phone Number: 225-4269</p>
                <p>Supervisor: SGT GRIFFIN, STEWIE</p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className='card-box m-3'>
            <Card.Body>
              <MslForm items={testMsl} />
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
