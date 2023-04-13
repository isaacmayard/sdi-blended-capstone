import React, { useState, useEffect } from 'react';
// import Draggable from 'react-draggable';
import { Col, Container, Row } from 'react-bootstrap';
import '../style/TaskList.css';

export default function TaskList() {
  const [availableTasks, setAvailableTasks] = useState([
    'Task A',
    'Task B',
    'Task C',
  ]);
  const [tasks, setTasks] = useState<string[]>([]);
  const [users, setUsers] = useState([]);
  console.log(users);
  function handleOnDrag(e: React.DragEvent, taskType: string) {
    e.dataTransfer.setData('taskType', taskType);
  }
  // working drop function
  function handleOnDrop(e: React.DragEvent) {
    const taskType = e.dataTransfer.getData('taskType') as string;
    setTasks([...tasks, taskType]);
    setAvailableTasks(availableTasks.filter((task) => task !== taskType));
  }

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
  }

  useEffect(() => {
    fetch('http://localhost:8085/users')
      .then((res) => res.json())
      .then((users) => {
        setUsers(users);
      })
      .catch((err) => alert(err));
  }, []);

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
            onDragStart={(e) => handleOnDrag(e, task)}
          >
            {task}
          </div>
        ))}
      </Row>
      <Row>
        <Col>
          {users.map((user, i) => (
            <div
              className='main-page'
              onDrop={handleOnDrop}
              onDragOver={handleDragOver}
              key={i}
              draggable
              // onDragStart={(e) => handleOnDrag(e, task)}
            >
              {/* {user.userName} */}
            </div>
          ))}
        </Col>
        <Col
          className='main-page'
          onDrop={handleOnDrop}
          onDragOver={handleDragOver}
        >
          <span>User 3</span>
          {tasks.map((task, i) => (
            <div
              className='dropped_task'
              key={i}
              draggable
              onDragStart={(e) => handleOnDrag(e, task)}
            >
              {task}
            </div>
          ))}
        </Col>
      </Row>

      {/* </Row> */}
    </Container>
  );
}
