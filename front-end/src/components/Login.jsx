/* eslint-disable import/order */
import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useSome } from '../utilities/MainContextProvider';

import useFetch from '../utilities/useFetch';
import MslForm from './MslForm';

const fields = ['Username', 'Password'];
const requiredField = ['Username', 'Password'];

export default function Login() {
  // check user exist
  const [userError, setUserError] = useState(false);
  const [userCreated, setUserCreated] = useState(false);

  // navigate
  const navigate = useNavigate();

  // context for login in
  const { currentUser, setCurrentUser, isLoggedIn, setIsLoggedIn } = useSome();

  // reactQuery for users
  const { data: users, isLoading } = useFetch('users');

  const testFuntion = async (data) => {
    const [result] = await users.filter(
      (user) => user.userName === data.Username,
    );
    const passMtach = (await result?.password) === data.Password ?? false;
    if (passMtach) {
      // console.log(result);
      setCurrentUser(result);
      setIsLoggedIn(true);
      navigate('/home');
    } else {
      setUserError(true);
      console.log('Wrong password');
    }

    // console.log(!!result.length);
    // console.log('data', data, 'users', users);
  };

  // Error alert
  if (userError) {
    return (
      <Alert
        className='tw-absolute tw-inset-80  tw-m-2 tw-ml-[34vw] tw-h-fit tw-w-60 tw-justify-center tw-rounded-lg tw-bg-[#5c5c5c] tw-text-center tw-text-white'
        key='danger'
        variant='danger'
      >
        <p className='tw-m-2'>Wrong password</p>
        <button
          className='tw-m-2 tw-w-32 tw-self-center tw-rounded-full tw-border-2 tw-bg-red-500 tw-p-2 '
          onClick={() => {
            setUserError(false);
            // navigate('/register');
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
      <MslForm
        items={fields}
        requireItems={requiredField}
        fn={testFuntion}
        className=' -translate-x-1/2 tw-absolute tw-left-[45vw] tw-top-1/3 tw-h-fit  -tw-translate-y-1/2 tw-transform tw-justify-center '
      >
        <button
          onClick={() => navigate('/register')}
          className='tw-m-2 tw-w-32 tw-self-center tw-rounded-sm tw-border-2'
          type='button'
        >
          Register
        </button>
      </MslForm>
    </div>
  );
}
