/* eslint-disable import/order */
import React from 'react';
import { useAddMslEntry } from '../utilities/usePost';

import { useSome } from '../utilities/MainContextProvider';
import MslForm from './MslForm';

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
    mutate(data);
  };

  // onSubmit();
  // component return
  return <MslForm items={fields} requireItems={requiredField} fn={onSubmit} />;
}
