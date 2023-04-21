import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import tasks from '../../../back-end/routes/tasks';
import '../style/TaskList.css';
import AddTask from './AddTask';

// These interfaces define what values User and Task require, according to TypeScript
interface User {
  id: number;
  userName: string;
}

interface Task {
  title: string;
  assignedTo: string;
  id: number;
  test: string;
}

export default function TaskList() {
  const tasksToPush: object[] = [];
  const [availableTasks, setAvailableTasks] = useState<Task[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [refresh, setRefresh] = useState<number>(0);
  const [selectedUser, setSelectedUser] = useState<User | undefined>();
  const [formState, setFormState] = useState<boolean>(false);

  //This function handles the beginning of the drag event
  function handleOnDrag(e: React.DragEvent, taskType: string) {
    e.dataTransfer.setData('taskType', taskType);
    console.log('dragging', taskType);
  }
  // This function handles the ClickUp of the drag event
  function handleOnDrop(e: React.DragEvent) {
    const taskType = e.dataTransfer.getData('taskType') as string;
    const task = availableTasks.find((t) => t.title === taskType);
    if (task && selectedUser) {
      const updatedTask = { ...task, assignedTo: selectedUser.userName };
      setTasks([...tasks, updatedTask]);
      setAvailableTasks(availableTasks.filter((t) => t !== task));
    }
    console.log('dropped', taskType);
  }

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
  }

  function handleUserClick(user: User) {
    setSelectedUser(user);
  }

  function handleSubmit() {
    if (selectedUser) {
      const userTasks = tasks.filter(
        (task) => task.assignedTo === selectedUser.userName,
      );

      // Loops through the selected tasks and creates an array of objects coinciding with the currentUser and their tasks to be assigned
      // This is because the backend route is using bulkCreate, which requires an array of objects
      for (let i = 0; i < userTasks.length; i++) {
        tasksToPush.push({ userId: selectedUser.id, taskId: userTasks[i].id });
      }

      fetch(`http://localhost:8085/user_tasks`, {
        method: 'POST',
        body: JSON.stringify(tasksToPush),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((res) => alert('Tasks Assigned!'));
    }
    setRefresh((prevRefresh) => prevRefresh + 1);
  }
  useEffect(() => {
    fetch('http://localhost:8085/users')
      .then((res) => res.json())
      .then((users) => {
        setUsers(users);
      })
      .catch((err) => alert(err));

    fetch('http://localhost:8085/tasks')
      .then((res) => res.json())
      .then((tasks) => setAvailableTasks(tasks))
      .catch((err) => alert(err));
  }, [formState]);

  const userTasks = tasks.filter(
    (task) => task.assignedTo === selectedUser?.userName,
  );
  return (
    <Container className='tw-h-[100vh]'>
      <Row className='task-nav mb-3'>
        <nav className='text-center text-light'>Task Management</nav>
      </Row>
      <Row className='text-center'>
        <Col className='tw-min-h-36'>
          {formState ? (
            <div className='tw-h-10 tw-w-fit'></div> // empty div to preserve space
          ) : (
            <button
              onClick={() => setFormState(true)}
              className='tw-m-2 tw-w-32 tw-rounded-sm tw-border-2 tw-text-white'
              type='submit'
            >
              Create Entry
            </button>
          )}
        </Col>
      </Row>
      <Row
        className='assignable mb-5 tw-shadow-2xl'
        onDrop={handleOnDrop}
        onDragOver={handleDragOver}
      >
        {availableTasks.map((task, index) => (
          <div
            className='task'
            key={index}
            draggable
            onDragStart={(e) => handleOnDrag(e, task.title)}
          >
            {task.title}
          </div>
        ))}
      </Row>
      <Row>
        <Col>
          <div className='user-column'>
            <p className='assigned-troops'>Assigned Troops</p>
            <div className='border-test tw-shadow-2xl'>
              {users.map((user, index) => (
                <div key={index} className='available-users'>
                  <button onClick={() => handleUserClick(user)}>
                    {user.userName}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </Col>
        <Col>
          {selectedUser && (
            <>
              <p className='text-center selected-user tw-text-white'>
                {selectedUser.userName}
              </p>
              <form
                className='assigned-tasks mb-2'
                onDrop={handleOnDrop}
                onDragOver={handleDragOver}
              >
                {userTasks.map((task, i) => (
                  <div
                    className='dropped-task'
                    key={i}
                    draggable
                    onDragStart={(e) => handleOnDrag(e, task.title)}
                  >
                    {task.title}
                  </div>
                ))}
              </form>
            </>
          )}
          {selectedUser ? (
            <div className='d-flex buttons'>
              <button
                type='submit'
                onClick={handleSubmit}
                className='btn btn-outline-light tw-mr-[5px] tw-h-fit tw-w-fit'
              >
                Assign Tasks
              </button>
              <button
                type='submit'
                className='btn btn-outline-light tw-h-fit tw-w-fit'
                onClick={() => setSelectedUser(undefined)}
              >
                Close
              </button>
            </div>
          ) : (
            <></>
          )}
        </Col>
      </Row>
      <Row>
        <Col></Col>
        {formState && <AddTask setFormState={setFormState} />}
        <Col></Col>
      </Row>
    </Container>
  );
}
