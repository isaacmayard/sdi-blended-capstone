import React from 'react';
import { Route, Routes } from 'react-router-dom';

import AwardsPage from './AwardsPage';
import Home from './Home';
import MslForm from './MslForm';
import MslPage from './MslPage';
import TaskList from './TaskList.tsx';

export default function RouteHandler() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/msl' element={<MslPage />} />
      <Route path='/taskadmin' element={<TaskList />} />
      <Route path='/home' element={<Home />} />
      <Route path='/troops' element={<Home />} />
      <Route path='/calendar' element={<Home />} />
      <Route path='/tasks' element={<Home />} />
      <Route path='/awards' element={<AwardsPage />} />
      <Route
        path='/form'
        element={<MslForm items={['Description']} requireItems='Description' />}
      />
      <Route path='/unit' element={<Home />} />
    </Routes>
  );
}
