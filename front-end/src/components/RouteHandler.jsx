import React from 'react';
import { Route, Routes } from 'react-router-dom';

import AwardsPage from './AwardsPage';

import FullCalendar from './FullCalendar';

import Home from './Home';
import Login from './Login';
import LoginForm from './LoginForm';
import MslForm from './MslForm';
import MslPage from './MslPage';
import Section from './Section';
import TaskList from './TaskList.tsx';
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
      <Route path='/calendar' element={<FullCalendar />} />
      <Route path='/tasks' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/awards' element={<AwardsPage />} />
      <Route path='/unit' element={<UnitDirectory />} />

      <Route
        path='/form'
        element={<MslForm items={['Description']} requireItems='Description' />}
      />
      <Route path='/unit' element={<UnitDirectory />} />
    </Routes>
  );
}
