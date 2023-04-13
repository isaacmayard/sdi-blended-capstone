import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './Home';
// eslint-disable-next-line import/no-unresolved
import TaskList from './TaskList.tsx';

export default function RouteHandler() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/taskadmin' element={<TaskList />} />
    </Routes>
  );
}
