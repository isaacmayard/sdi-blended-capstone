/* eslint-disable import/order */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSome } from '../utilities/MainContextProvider';

import useFetch from '../utilities/useFetch';
import MslForm from './MslForm';

const fields = ['Username', 'Password'];
const requiredField = ['Username', 'Password'];

export default function Login() {
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
      console.log('Wrong password');
    }

    // console.log(!!result.length);
    // console.log('data', data, 'users', users);
  };

  return (
    <div>
      <MslForm
        items={fields}
        requireItems={requiredField}
        fn={testFuntion}
        className='tw-bg-opacity tw-absolute tw-inset-80 tw-flex tw-w-auto tw-flex-col '
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
