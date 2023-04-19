/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useSome } from '../utilities/MainContextProvider';

import React, { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import NavBar from './NavBar';

import Card from 'react-bootstrap/Card';
import useFetch from '../utilities/useFetch';
import FullCalendar from './FullCalendar';
import Metrics from './Metrics';
// eslint-disable-next-line import/order
import '../style/home.css';

// eslint-disable-next-line import/order

const testMsl = ['Title', 'Date', 'Tags', 'Description'];

// import { useSome } from '../utilities/MainContextProvider';

export default function Sidebar() {
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
  const testArray = tasks?.map((task) => {
    const { title, dueDate: start } = task;
    return { title, start };
  });

  if (isLoadingTasks) return 'Loading...';
  if (isErrorTasks) return `An error has occurred: ${isErrorTasks.message}`;
  // if (isLoadingUsers) return 'Loading...';
  // if (isErrorUsers) return `An error has occurred: ${isErrorUsers.message}`;

  return (
    <div className='tw-flex tw-h-[100vh] tw-grow tw-overflow-auto tw-bg-black'>
      <div className=' tw-flex tw-w-screen'>
        <div className=''>
          <Card className='card-box m-3'>
            <Card.Header>
              <ul
                className='nav nav-tabs card-header-tabs'
                id='task-list'
                role='tablist'
              >
                <li className='nav-item'>
                  <a
                    className='nav-link active'
                    href='#description'
                    role='tab'
                    aria-controls='description'
                    aria-selected='true'
                  >
                    Total
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    className='nav-link'
                    href='#history'
                    role='tab'
                    aria-controls='history'
                    aria-selected='false'
                  >
                    Completed
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    className='nav-link'
                    href='#deals'
                    role='tab'
                    aria-controls='deals'
                    aria-selected='false'
                  >
                    Completed Late
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    className='nav-link'
                    href='#deals'
                    role='tab'
                    aria-controls='deals'
                    aria-selected='false'
                  >
                    Overdue
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    className='nav-link'
                    href='#deals'
                    role='tab'
                    aria-controls='deals'
                    aria-selected='false'
                  >
                    Pending
                  </a>
                </li>
              </ul>
            </Card.Header>
            <Card.Body>
              <Card.Title className='tw-text-center'>TASKS</Card.Title>
              <div className='divide-y divide-slate-700 tw-h-[728px] tw-w-[350px] tw-overflow-auto'>
                {tasks.map((task) => (
                  <>
                    <div className='card text-center tw-bg-gray-200 tw-text-black'>
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
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className='col-7'>
          <Card className='card-box m-3'>
            <div className='divide-y divide-slate-700 tw-h-[900px] tw-overflow-auto'>
              <Card.Body>
                <Metrics />
              </Card.Body>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
