/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */

import { useSome } from '../utilities/MainContextProvider';

import React, { useEffect, useState } from 'react';

import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import SplitButton from 'react-bootstrap/SplitButton';
import { BsBarChartLine } from 'react-icons/bs';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useFetch from '../utilities/useFetch';
import Metrics from './Metrics';
// eslint-disable-next-line import/order
import '../style/home.css';

// eslint-disable-next-line import/order

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

  const { currentUser } = useSome();
  // const {
  //   data: users,
  //   isLoading: isLoadingUsers,
  //   isError: isErrorUsers,
  // } = useFetch('users');

  // this is grabbing the currently logged in users tasks assigned to them.
  const {
    data: tasks,
    isLoading: isLoadingTasks,
    isError: isErrorTasks,
  } = useFetch(`user_tasks/${currentUser.id}`);

  const filteredTasks = tasks?.filter((task) => {
    const taskDate = new Date(task.dueDate);
    return (
      taskDate.getMonth() === monthNames.indexOf(currentMonth) &&
      taskDate.getFullYear() === currentYear
    );
  });

  const completedTasks = filteredTasks
    ? filteredTasks.filter(
        (task) =>
          filteredTasks.completed === true &&
          new Date(task.dueDate) > new Date(task.updatedAt),
      )
    : 0;
  const completedLateTasks = filteredTasks
    ? filteredTasks.filter(
        (task) =>
          task.completed === true &&
          new Date(task.dueDate) < new Date(task.updatedAt),
      )
    : 0;
  const overdueTasks = filteredTasks
    ? filteredTasks.filter(
        (task) =>
          task.completed === false &&
          new Date(task.dueDate) < new Date(task.updatedAt),
      )
    : 0;

  const pendingTasks = filteredTasks
    ? filteredTasks.filter(
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
    <div className='tw-flex tw-h-[100vh] tw-grow tw-overflow-auto tw-bg-black'>
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
                    size={24}
                    onClick={() => setShow((currentShow) => !currentShow)}
                  />
                </TabList>

                <TabPanel>{renderTasks(filteredTasks)};</TabPanel>
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
            <li className='menu__icon'>{show ? metricsContainer : null}</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
