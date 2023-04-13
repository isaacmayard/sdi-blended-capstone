/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import react, { useEffect, useState } from 'react';

import Card from 'react-bootstrap/Card';
import useFetch from '../utilities/useFetch';

import FullCalendar from './FullCalendar';
// eslint-disable-next-line import/order
import '../style/home.css';

// eslint-disable-next-line import/order

const testMsl = ['Title', 'Date', 'Tags', 'Description'];

// import { useSome } from '../utilities/MainContextProvider';

export default function Sidebar() {
  // const [user, setUser] = useState({});
  // const [tasks, setTasks] = useState([]);

  const {
    data: users,
    isLoading: isLoadingUsers,
    isError: isErrorUsers,
  } = useFetch('users');
  // const {
  //   data: users,
  //   isLoading: isLoadingUsers,
  //   isError: isErrorUsers,
  // } = useQuery(['usersFetch'], async () => {
  //   const res = await axios.get('http://localhost:8085/users/');
  //   const { data } = res;
  //   return data;
  // });

  const {
    data: tasks,
    isLoading: isLoadingTasks,
    isError: isErrorTasks,
  } = useFetch('tasks');
  // const {
  //   data: tasks,
  //   isLoading: isLoadingTasks,
  //   isError: isErrorTasks,
  // } = useQuery(['tasksFetch'], async () => {
  //   const res = await axios.get('http://localhost:8085/tasks/');
  //   const { data } = res;
  //   return data;
  // });

  const testArray = tasks?.map((task) => {
    const { title, dueDate: start } = task;
    return { title, start };
  });

  // useEffect(() => {
  //   fetch('http://localhost:8085/users/', {
  //     method: 'GET',
  //     headers: {
  //       'Content-type': 'application/json; charset=UTF-8',
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setUser(data[0]));
  // }, []);

  // useEffect(() => {
  //   fetch('http://localhost:8085/tasks/', {
  //     method: 'GET',
  //     headers: {
  //       'Content-type': 'application/json; charset=UTF-8',
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setTasks(data));
  // }, []);

  // const task = [{title: 'Meeting', date: new Date()}];
  // console.log(tasks)

  if (isLoadingTasks) return 'Loading...';
  if (isErrorTasks) return `An error has occurred: ${isErrorTasks.message}`;
  if (isLoadingUsers) return 'Loading...';
  if (isErrorUsers) return `An error has occurred: ${isErrorUsers.message}`;

  return (
    <>
      (
      <div className='row span'>
        <div className='col tw-flex'>
          <div className='col-sm-5'>
            <Card className='card-box m-3'>
              <Card.Body>
                <Card.Title>
                  USER INFORMATION
                  <Card.Text>
                    {users[0].rank}, {users[0].lastName}, {users[0].firstName}
                  </Card.Text>
                  <Card.Text>Unit: 1ST WHATEVER SQ</Card.Text>
                  <Card.Text>Section: BOUNDARY</Card.Text>
                  <Card.Text>Phone Number: 225-4269</Card.Text>
                  <Card.Text>Supervisor: SGT GRIFFIN, STEWIE</Card.Text>
                </Card.Title>
              </Card.Body>
            </Card>
            <Card className='card-box m-3'>
              <Card.Body>
                <Card.Title>
                  <h4>TASKS</h4>
                  <hr />
                  <div
                    className='option-styles'
                    style={{ overflow: 'auto', height: '635px' }}
                  >
                    {tasks?.map((task) => (
                      <div
                        key={task.id}
                        className='text-left text-light'
                        style={{ paddingLeft: '25%' }}
                      >
                        <div style={{ paddingLeft: '5.8%' }}>
                          <strong>Title:</strong> {task.title}
                        </div>
                        <div style={{ paddingLeft: '5.8%' }}>
                          <strong>Due date:</strong>{' '}
                          {task.dueDate.split('T')[0]}
                        </div>
                        <div style={{ paddingLeft: '5.8%' }}>
                          <strong>Description:</strong> {task.description}
                        </div>
                        <hr />
                      </div>
                    ))}
                  </div>
                </Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className='col-7'>
            <Card className='card-box m-3'>
              <Card.Body>
                <Card.Title className='tw-text-center'>
                  TASK CALENDAR
                </Card.Title>
                {!isLoadingTasks && <FullCalendar events={testArray} />}
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      )
    </>
  );
}
