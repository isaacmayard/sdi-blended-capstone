import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

import { useSome } from '../utilities/MainContextProvider';

export default function Home() {
  const { currentUser } = useSome();

  return <h1>Wellcome {currentUser.username}</h1>;
}
