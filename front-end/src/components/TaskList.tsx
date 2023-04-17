import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { GiBulletBill } from 'react-icons/gi';
import tasks from '../../../back-end/routes/tasks';
import '../style/TaskList.css';
import AddTask from './AddTask';
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
  const [selectedUser, setSelectedUser] = useState<User | undefined>();

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
  }, []);

  const userTasks = tasks.filter(
    (task) => task.assignedTo === selectedUser?.userName,
  );
  return (
    <Container>
      <Row className='task-nav mb-3'>
        <nav className='text-center text-light'>Task Assignment</nav>
      </Row>
      <Row
        className='assignable mb-5'
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
            {users.map((user, index) => (
              <div key={index} className='available-users'>
                <button onClick={() => handleUserClick(user)}>
                  {user.userName}
                </button>
              </div>
            ))}
          </div>
        </Col>
        <Col>
          {selectedUser && (
            <>
              <span className='selected-user'>{selectedUser.userName}</span>
              <form
                className='assigned-tasks'
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
            <button
              type='submit'
              onClick={handleSubmit}
              className='btn btn-outline-light'
            >
              Assign Tasks
            </button>
          ) : (
            <></>
          )}
        </Col>
      </Row>
      <Row>
        <Col></Col>
        <AddTask />
        <Col></Col>
      </Row>
    </Container>
  );
}
