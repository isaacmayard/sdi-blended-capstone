import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import Sidebar from '../components/Sidebar';
import MslForm from '../components/MslForm';
import { useSome } from '../utilities/MainContextProvider';

export default function Home() {
  const { currentUser } = useSome();

  const testMsl = [
    {
      id: 1,
      title: 'test1',
      date: Date.now(),
      tags: 'testTag',
      description: 'test Description',
    },
  ];

  return (
    <>
      <Sidebar/>
      
    </>
  );
}
