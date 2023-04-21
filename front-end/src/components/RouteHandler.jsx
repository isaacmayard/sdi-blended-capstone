/* eslint-disable import/order */
import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import { useSome } from '../utilities/MainContextProvider';
import AwardsPage from './AwardsPage';
import FullCalendar from './FullCalendar';
import Home from './Home';
import Login from './Login';
import MslPage from './MslPage';
import RegisterPage from './RegisterPage';
import Section from './Section';
import TaskList from './TaskList.tsx';
import UnitDirectory from './UnitDirectory';

export default function RouteHandler() {
  // check if user is logged in
  const { isLoggedIn } = useSome();

  const location = useLocation();

  return (
    <Routes>
      {isLoggedIn || location.pathname.match(/register/i) ? (
        <>
          {' '}
          <Route path='/' element={<Home />} />
          <Route path='/msl' element={<MslPage />} />
          <Route path='/taskadmin' element={<TaskList />} />
          <Route path='/home' element={<Home />} />
          <Route path='/section' element={<Section />} />
          <Route path='/calendar' element={<FullCalendar />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/awards' element={<AwardsPage />} />
          <Route path='/unit' element={<UnitDirectory />} />{' '}
        </>
      ) : (
        <>
          <Route path='/*' element={<Navigate to='/login' />} />
          <Route path='/login' element={<Login />} />
        </>
      )}
    </Routes>
  );
}
