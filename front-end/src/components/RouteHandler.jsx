import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import TaskList from './TaskList.tsx';

export default function RouteHandler() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/taskadmin' element={<TaskList />} />
    </Routes>
  );
}
