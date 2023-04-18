import React from 'react';
import { Route, Routes } from 'react-router-dom';

import FullCalendar from './FullCalendar';
import Home from './Home';
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
      <Route path='/section' element={<Section />} />
      <Route path='/calendar' element={<FullCalendar />} />
      <Route path='/tasks' element={<Home />} />
      <Route path='/unit' element={<UnitDirectory />} />
      <Route
        path='/form'
        element={<MslForm items={['Description']} requireItems='Description' />}
      />
      <Route path='/unit' element={<Home />} />
    </Routes>
  );
}
