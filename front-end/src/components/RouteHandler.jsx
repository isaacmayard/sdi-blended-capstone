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
            items={['Title', 'Date', 'Tags', 'Description', 'Password']}
            requireItems={['Title', 'Date', 'Description']}
          />
        }
      />
      <Route path='/taskadmin' element={<TaskList />} />
    </Routes>
  );
}
