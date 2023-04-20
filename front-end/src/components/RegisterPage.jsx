/* eslint-disable camelcase */
/* eslint-disable import/order */
import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useSome } from '../utilities/MainContextProvider';

import useFetch from '../utilities/useFetch';
import { useAddUser } from '../utilities/usePost';
import RgisterForm from './RgisterForm';

const fields = [
  'Username',
  'Password',
  'Admin',
  'Rank',
  'First Name',
  'Last Name',
  'Supervisor',
  'Phone',
  'Section',
  'Unit',
];
const requiredField = [
  'Username',
  'Password',
  'First Name',
  'Last Name',
  'Phone',
];

export default function RegisterPage() {
  // check user exist
  const [userError, setUserError] = useState(false);
  const [userCreated, setUserCreated] = useState(false);

  // navigate
  const navigate = useNavigate();

  // context for login in
  const { currentUser, setCurrentUser, isLoggedIn, setIsLoggedIn } = useSome();

  // reactQuery for users
  const { data: users, isLoading } = useFetch('users');

  const { mutate, isSuccess } = useAddUser();

  const onSubmit = (data) => {
    const {
      Username: userName,
      Password: password,
      Admin: admin,
      Rank: rank,
      'First Name': firstName,
      'Last Name': lastName,
      Supervisor: supervisor,
      Phone: contact_number,
      Section: work_section,
      Unit: unit,
    } = data;

    // check if user exist
    const userExist = users.some((user) => user.userName === userName);
    console.log(userExist);

    if (!userExist) {
      mutate({
        lastName,
        userName,
        password,
        admin,
        rank,
        firstName,
        supervisor,
        contact_number,
        work_section,
        unit,
      });
      setUserCreated(true);
    } else {
      setUserError(true);
    }
  };

  if (userCreated) {
    return (
      <Alert
        key='danger'
        className='tw-absolute tw-inset-80  tw-m-2 tw-h-fit tw-justify-center tw-rounded-lg tw-bg-[#5c5c5c] tw-text-center tw-text-white'
        variant='danger'
      >
        <p className='tw-m-2'>Your Account has been created</p>
        <button
          className='tw-m-2 tw-w-32 tw-self-center tw-rounded-full tw-border-2 tw-bg-green-500 tw-p-2 '
          onClick={() => {
            setUserCreated(false);
            navigate('/login');
          }}
          type='button'
        >
          Login!
        </button>
      </Alert>
    );
  }

  if (userError) {
    return (
      <Alert
        className='tw-absolute tw-inset-80  tw-m-2 tw-h-fit tw-justify-center tw-rounded-lg tw-bg-[#5c5c5c] tw-text-center tw-text-white'
        key='danger'
        variant='danger'
      >
        <p className='tw-m-2'>User already exists</p>
        <button
          className='tw-m-2 tw-w-32 tw-self-center tw-rounded-full tw-border-2 tw-bg-red-500 tw-p-2 '
          onClick={() => {
            setUserError(false);
            navigate('/register');
          }}
          type='button'
        >
          Try again!
        </button>
      </Alert>
    );
  }
  return (
    <div>
      <RgisterForm items={fields} requireItems={requiredField} fn={onSubmit} />
    </div>
  );
}
