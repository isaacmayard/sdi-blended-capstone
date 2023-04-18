import React, { useState, useEffect } from 'react';
import { useAddMslEntry } from '../utilities/usePost';

import { useSome } from '../utilities/MainContextProvider';
import MslForm from './MslForm';
import MslListing from './MslListing';

const fields = ['Title', 'Date', 'Tags', 'Description'];
const requiredField = ['Title', 'Description'];

export default function MslPage() {
  // useContext for the current userID
  const { currentUser } = useSome();

  // extract function to be call on form submission
  const { mutate } = useAddMslEntry();


  const onSubmit = ({ Title: title, Description: description }) => {
    const userId = currentUser.id;
    const data = { title, description, userId };
    console.log(data);
    mutate(data);
  };

  return (
    <>
        <MslForm items={fields} requireItems={requiredField} fn={onSubmit} />
        <MslListing />
    </>
    
  );
}
