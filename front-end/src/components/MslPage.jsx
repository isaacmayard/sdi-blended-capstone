/* eslint-disable import/order */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../utilities/useFetch';
import { useAddMslEntry } from '../utilities/usePost';

import { useSome } from '../utilities/MainContextProvider';
import MslForm from './MslForm';

const fields = ['Title', 'Date', 'Tags', 'Description'];
const requiredField = ['Title', 'Description'];

export default function MslPage() {
  // navigate
  const navigate = useNavigate();

  // useContext for the current userID
  const { currentUser } = useSome();

  // extract function to be call on form submission
  const { mutate } = useAddMslEntry();

  const onSubmit = ({ Title: title, Description: description }) => {
    const userId = currentUser.id;
    const data = { title, description, userId };
    mutate(data);
    navigate('/home');
  };

  // onSubmit();
  // component return
  return (
    <div className='tw-flex tw-grow tw-flex-col'>
      <MslForm items={fields} requireItems={requiredField} fn={onSubmit} />;
    </div>
  );
}
