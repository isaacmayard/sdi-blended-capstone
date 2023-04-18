import React from 'react';
import { Route, Routes } from 'react-router-dom';

import AwardsPage from './AwardsPage';
import Home from './Home';
import LoginForm from './LoginForm';
import MslForm from './MslForm';
import MslPage from './MslPage';
import TaskList from './TaskList.tsx';
import Section from './Section';
import UnitDirectory from './UnitDirectory';

export default function RouteHandler() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/msl' element={<MslPage />} />
      <Route path='/taskadmin' element={<TaskList />} />
      <Route path='/home' element={<Home />} />
      <Route
        path='/login'
        element={
          <LoginForm
            items={['username', 'password']}
            requireItems={['username', 'password']}
          />
        }
      />
      <Route path='/section' element={<Section />} />
      <Route path='/calendar' element={<Home />} />
      <Route path='/awards' element={<AwardsPage />} />
      <Route path='/tasks' element={<Home />} />
      <Route
        path='/form'
        element={<MslForm items={['Description']} requireItems='Description' />}
      />
      <Route path='/unit' element={<UnitDirectory />} />
    </Routes>
  );
}
