import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './Home';
import MslForm from './MslForm';
import TaskList from './TaskList.tsx';

export default function RouteHandler() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route
        path='/msl'
        element={
          <MslForm
            items={['Title', 'date', 'tags', 'password', 'description']}
            requireItems={['Title', 'password']}
          />
        }
      />
      <Route path='/taskadmin' element={<TaskList />} />
      <Route path='/home' element={<Home />} />
      <Route path='/troops' element={<Home />} />
      <Route path='/calendar' element={<Home />} />
      <Route path='/tasks' element={<Home />} />
      <Route
        path='/form'
        element={<MslForm items={['Description']} requireItems='Description' />}
      />
      <Route path='/unit' element={<Home />} />
    </Routes>
  );
}
