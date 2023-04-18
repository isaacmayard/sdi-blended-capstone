/* eslint-disable import/order */

import { useNavigate } from 'react-router-dom';
import useFetch from '../utilities/useFetch';
import React, { useState, useEffect } from 'react';
import { useAddMslEntry } from '../utilities/usePost';
import Card from 'react-bootstrap/Card';


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

  const [entries, setEntries] = useState([]);

  const onSubmit = ({ Title: title, Description: description }) => {
    const userId = currentUser.id;
    const data = { title, description, userId };
    console.log(data);
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
