import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';

import useFetch from '../utilities/useFetch';

export default function MslListing({ formState, setFormState }) {
  // const [entries, setEntries] = useState([]);

  const { data: entries, isLoading, isError, isFetching } = useFetch('msl');
  const { data: users, isLoading: isLoadingUsers } = useFetch('users');

  // useEffect(() => {
  //   fetch('http://localhost:8085/msl')
  //     .then((res) => res.json())
  //     .then((data) => setEntries(data));
  // }, []);

  // if (!entries) return 'Loading...';
  if (isLoading) {
    return <span>Loading...</span>;
  }
  if (isLoadingUsers) {
    return <span>Loading...</span>;
  }
  if (isFetching) {
    return <span>Refreshing...</span>;
  }

  if (isError) {
    return <span>Error: {isError.message}</span>;
  }

  return (
    <div className=' tw-flex tw-grow  tw-bg-black'>
      <div className=' tw-flex tw-grow tw-flex-col'>
        <div className=' tw-bg-[#5c5c5c]  tw-p-4 tw-text-white'>
          <div className=' tw-text-center'>MSL</div>
          <div className=' tw-h-[100vh]'>
            {entries
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
              .map((entry) => (
                <div key={entry.id} className=''>
                  <div className='tw-divide- tw-divide-y tw-divide-black  tw-bg-gray-200 tw-text-black '>
                    <div className='tw-flex tw-justify-around tw-p-2 '>
                      <div className=''>Title: {entry.title}</div>
                      <div className=''>
                        Created by:{' '}
                        {users.findIndex((obj) => obj.id === entry.userId) !==
                        -1
                          ? `${
                              users[
                                users.findIndex(
                                  (obj) => obj.id === entry.userId,
                                )
                              ].rank
                            } ${
                              users[
                                users.findIndex(
                                  (obj) => obj.id === entry.userId,
                                )
                              ].lastName
                            }, ${
                              users[
                                users.findIndex(
                                  (obj) => obj.id === entry.userId,
                                )
                              ].firstName
                            }`
                          : 'Guess'}
                      </div>
                    </div>
                    <p className='tw-flex tw-min-h-[80px] tw-grow tw-p-2'>
                      Description: {entry.description}
                    </p>
                    <div className='tw-flex tw-justify-between tw-align-baseline'>
                      <span className='  '>Created on: {entry.createdAt}</span>
                    </div>
                  </div>
                  <br />
                </div>
              ))}
          </div>
          {!formState && (
            <button
              onClick={() => setFormState(true)}
              className='tw-m-2 tw-w-32 tw-self-center tw-rounded-sm tw-border-2'
              type='submit'
            >
              Create Entry
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
