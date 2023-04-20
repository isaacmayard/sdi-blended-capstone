import React from 'react';

import useFetch from '../utilities/useFetch';

export default function MslListing({ formState, setFormState }) {
  const { data: entries, isLoading, isError, isFetching } = useFetch('msl');
  const { data: users, isLoading: isLoadingUsers } = useFetch('users');

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
    <div className=' tw-flex tw-grow'>
      <div className=' tw-flex tw-grow tw-flex-col tw-p-7'>
        <div className=' tw-outside-base-style tw-p-4 tw-text-white'>
          <div className=' tw-mb-2 tw-text-center'>MSL</div>
          <div className=''>
            {entries
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
              .map((entry) => (
                <div key={entry.id} className=''>
                  <div className='tw-divide- tw-map-element tw-divide-y  tw-divide-black tw-bg-gray-200 tw-text-black'>
                    <div className='tw-rounded-2 tw-flex tw-justify-between tw-p-2'>
                      <div>
                        <span className='tw-map-element-header'>Title: </span>{' '}
                        <span>{entry.title}</span>
                      </div>
                      <div className=''>
                        <span className='tw-map-element-header'>
                          Created by:{' '}
                        </span>
                        <span>
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
                            : 'Guest'}
                        </span>
                      </div>
                    </div>
                    <p className='tw-flex tw-min-h-[80px] tw-grow tw-p-2'>
                      {entry.description}
                    </p>
                    <div className='tw-flex tw-justify-between tw-align-baseline'>
                      <span className='  '>
                        <span className='tw-map-element-header'>
                          Created on:
                        </span>
                        <span> {entry.createdAt.slice(0, 10)}</span>
                      </span>
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
