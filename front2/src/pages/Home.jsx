import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useSome } from '../utilities/MainContextProvider';

export const Home = () => {
  // react query, add a call back function as the second param to do the query
  const { data, isLoading, isError } = useQuery(['idForQuery'], async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    const data = await res.data;
    return data;
  });

  const { someState, setSomeState } = useSome();

  return (
    <>
      <h1>{someState}</h1>
      <p>{`this data was fetched with react query, id is: 'idForQuery' and the data is: ${
        isLoading ? 'Fetching data and ram' : data?.title
      }`}</p>
    </>
  );
};
