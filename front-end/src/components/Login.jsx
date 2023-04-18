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
    <MslForm items={fields} requireItems={requiredField} fn={testFuntion} />
  );
}
