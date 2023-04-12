import React, { useState } from 'react';
// import Draggable from 'react-draggable';
import '../style/TaskList.css';
import { Row, Col, Container } from 'react-bootstrap';

export default function TaskList() {
  const [availableTasks, setAvailableTasks] = useState([
    'Task A',
    'Task B',
    'Task C',
  ]);
  const [tasks, setTasks] = useState<string[]>([]);

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

  return (
    <Container>
      <nav className='text-center'>Task Panel</nav>
      {/* <Row className='App'> */}
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
        <Col className='Page' onDrop={handleOnDrop} onDragOver={handleDragOver}>
          <span>User 1</span>
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
        <Col className='Page' onDrop={handleOnDrop} onDragOver={handleDragOver}>
          <span>User 2</span>
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
