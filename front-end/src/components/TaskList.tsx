import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../style/TaskList.css';

interface User {
  userName: string;
}

interface Task {
  title: string;
  assignedTo: string;
}

export default function TaskList() {
  const [availableTasks, setAvailableTasks] = useState<Task[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<string>('');

  function handleOnDrag(e: React.DragEvent, taskType: string) {
    e.dataTransfer.setData('taskType', taskType);
    console.log('dragging', taskType);
  }
  function handleOnDrop(e: React.DragEvent) {
    const taskType = e.dataTransfer.getData('taskType') as string;
    const task = availableTasks.find((t) => t.title === taskType);
    if (task) {
      const updatedTask = { ...task, assignedTo: selectedUser };
      setTasks([...tasks, updatedTask]);
      setAvailableTasks(availableTasks.filter((t) => t !== task));
    }
    console.log('dropped', taskType);
  }

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
  }

  function handleUserClick(user: User) {
    setSelectedUser(user.userName);
  }

  function handleSubmit() {
    console.log(selectedUser, userTasks);
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

  const userTasks = tasks.filter((task) => task.assignedTo === selectedUser);

  return (
    <Container>
      <nav className='text-center'>Task Panel</nav>
      <nav className='text-center'>Available Tasks</nav>
      <Row
        className='tasks mb-5'
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
          {users.map((user, index) => (
            <div key={index}>
              <button onClick={() => handleUserClick(user)}>
                {user.userName}
              </button>
            </div>
          ))}
        </Col>
        <Col>
          {selectedUser && (
            <form
              className='main-page'
              onDrop={handleOnDrop}
              onDragOver={handleDragOver}
            >
              <span>{selectedUser}</span>
              {userTasks.map((task, i) => (
                <div
                  className='dropped_task'
                  key={i}
                  draggable
                  onDragStart={(e) => handleOnDrag(e, task.title)}
                >
                  {task.title}
                </div>
              ))}
            </form>
          )}
          {selectedUser ? (
            <button type='submit' onClick={handleSubmit}>
              Assign Tasks
            </button>
          ) : (
            <></>
          )}
        </Col>
      </Row>
    </Container>
  );
}
