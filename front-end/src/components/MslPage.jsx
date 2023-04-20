/* eslint-disable import/order */

import { useQueryClient } from '@tanstack/react-query';
import React, { Children, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../utilities/useFetch';
import { useAddMslEntry } from '../utilities/usePost';

import { useSome } from '../utilities/MainContextProvider';
import MslForm from './MslForm';
import MslListing from './MslListing';

const fields = ['Title', 'Description'];
const requiredField = ['Title', 'Description'];

export default function MslPage() {
  // fetch
  const { data: tags, isLoading: tagsLoading } = useFetch('tags');

  // navigate
  const navigate = useNavigate();

  // refresh query
  const queryClient = useQueryClient();

  // useContext for the current userID
  const { currentUser } = useSome();

  // extract function to be call on form submission
  const { mutate, isSuccess } = useAddMslEntry();

  // prop to render msl
  const [formState, setFormState] = useState(false);

  const onSubmit = ({ Title: title, Description: description }) => {
    const userId = currentUser.id;
    const data = { title, description, userId };
    mutate(data, {
      onSuccess: () => {
        queryClient.invalidateQueries();
      },
    });
    // console.log(data);

    setFormState(false);
  };

  return (
    <div className='tw-flex tw-grow'>
      {formState && !tagsLoading && (
        <MslForm
          items={fields}
          requireItems={requiredField}
          fn={onSubmit}
          className='tw-bg-opacity tw-absolute tw-right-[33vw] tw-top-[25vh] tw-flex tw-w-[25vw] tw-flex-col tw-transition-all'
        >
          <button
            onClick={() => setFormState(false)}
            className='tw-m-2 tw-w-32 tw-self-center tw-rounded-sm tw-border-2 '
            type='submit'
          >
            Close
          </button>
        </MslForm>
      )}
      <MslListing formState={formState} setFormState={setFormState} />
      {/* <Modal /> */}
    </div>
  );
}
