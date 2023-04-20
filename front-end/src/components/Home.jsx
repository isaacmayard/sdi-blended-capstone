/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import react, { useEffect, useState } from 'react';
import NavBar from './NavBar';

import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import SplitButton from 'react-bootstrap/SplitButton';
import { BsBarChartLine } from 'react-icons/bs';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useFetch from '../utilities/useFetch';
import FullCalendar from './FullCalendar';
import Metrics from './Metrics';
// eslint-disable-next-line import/order
import '../style/home.css';

// eslint-disable-next-line import/order

const testMsl = ['Title', 'Date', 'Tags', 'Description'];

// import { useSome } from '../utilities/MainContextProvider';

export default function Sidebar() {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const yearList = [2022, 2023, 2024];

  const [show, setShow] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(
    monthNames[new Date().getMonth()],
  );
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const {
    data: users,
    isLoading: isLoadingUsers,
    isError: isErrorUsers,
  } = useFetch('users');

  const {
    data: tasks,
    isLoading: isLoadingTasks,
    isError: isErrorTasks,
  } = useFetch('tasks');

  const completedTasks = tasks
    ? tasks.filter(
        (task) =>
          task.completed === true &&
          new Date(task.dueDate) > new Date(task.updatedAt),
      )
    : 0;
  const completedLateTasks = tasks
    ? tasks.filter(
        (task) =>
          task.completed === true &&
          new Date(task.dueDate) < new Date(task.updatedAt),
      )
    : 0;
  const overdueTasks = tasks
    ? tasks.filter(
        (task) =>
          task.completed === false &&
          new Date(task.dueDate) < new Date(task.updatedAt),
      )
    : 0;

  const pendingTasks = tasks
    ? tasks.filter(
        (task) =>
          task.completed === false &&
          new Date(task.dueDate) > new Date(task.updatedAt),
      )
    : 0;

  function renderTasks(subTasks) {
    return (
      <div className='tab-pane active' id='total' role='tabpanel'>
        <div className='divide-y divide-slate-700 tw-h-[835px] tw-overflow-auto'>
          {subTasks.map((task) => (
            <>
              <div className='card text-center tw-bg-gray-200 tw-text-black '>
                <div className='card-header'>{task.title}</div>
                <div className='card-body'>
                  <p className='card-text'>{task.description}</p>
                </div>
                <div className='card-footer tw-text-black'>
                  Due: {task.dueDate.split('T')[0]}
                </div>
              </div>
              <br />
            </>
          ))}
        </div>
      </div>
    );
  }

  if (isLoadingTasks) return 'Loading...';
  if (isErrorTasks) return `An error has occurred: ${isErrorTasks.message}`;
  if (isLoadingUsers) return 'Loading...';
  if (isErrorUsers) return `An error has occurred: ${isErrorUsers.message}`;

  const metricsContainer = (
    <div className='col-3'>
      <Card className='card-box m-3'>
        <div className='divide-y divide-slate-700 tw-h-[900px] tw-overflow-auto'>
          <Card.Body>
            <Metrics />
          </Card.Body>
        </div>
      </Card>
    </div>
  );

  return (
    <div className='tw-flex tw-grow tw-overflow-auto tw-bg-black'>
      <div className=' tw-flex tw-w-screen'>
        <div className=''>
          <Card className='card-box m-3'>
            <Card.Body>
              <Tabs>
                <TabList>
                  <Tab>All Tasks</Tab>
                  <Tab>Completed</Tab>
                  <Tab>Completed Late</Tab>
                  <Tab>Overdue</Tab>
                  <Tab>Pending</Tab>
                  <SplitButton
                    key='primary'
                    id='dropdown-split-variants-Primary'
                    variant='primary'
                    title={currentMonth}
                  >
                    {monthNames.map((month, index) => (
                      <Dropdown.Item
                        eventKey={index + 1}
                        onClick={(e) => setCurrentMonth(e.target.innerText)}
                      >
                        {month}
                      </Dropdown.Item>
                    ))}
                  </SplitButton>

                  <SplitButton
                    key='primary'
                    id='dropdown-split-variants-Primary'
                    variant='primary'
                    title={currentYear}
                  >
                    {yearList.map((year, index) => (
                      <Dropdown.Item
                        eventKey={index + 1}
                        onClick={(e) => setCurrentYear(e.target.innerText)}
                      >
                        {year}
                      </Dropdown.Item>
                    ))}
                  </SplitButton>
                  <BsBarChartLine
                    size={48}
                    onClick={() => setShow((currentShow) => !currentShow)}
                  />
                </TabList>

                <TabPanel>{renderTasks(tasks)};</TabPanel>
                <TabPanel>{renderTasks(completedTasks)};</TabPanel>
                <TabPanel>{renderTasks(completedLateTasks)};</TabPanel>
                <TabPanel>{renderTasks(overdueTasks)};</TabPanel>
                <TabPanel>{renderTasks(pendingTasks)};</TabPanel>
              </Tabs>
            </Card.Body>
          </Card>
        </div>

        <nav className='nav__bar'>
          <ul className='menu'>
            <li
              className='menu__icon'
              onClick={() => setShow((currentShow) => !currentShow)}
            >
              {show ? metricsContainer : null}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
