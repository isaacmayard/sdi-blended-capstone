// /* eslint-disable import/order */
// /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// /* eslint-disable jsx-a11y/click-events-have-key-events */
// /* eslint-disable no-console */
// /* eslint-disable react/jsx-props-no-spreading */
// /* eslint-disable react/no-array-index-key */
// /* eslint-disable no-nested-ternary */
// import Cookie from 'cookie';
// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';

// // eslint-disable-next-line import/named
// import DismissableAlert from './DismissableAlert';
// // eslint-disable-next-line import/extensions
// import { useSome } from '../utilities/MainContextProvider';

// export default function LoginForm({ items, requireItems }) {
//   const { setCookies } = useSome();
//   const form = useForm();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = form;
//   const [authMode, setAuthMode] = useState('signin');
//   const [showAlert, setShowAlert] = useState(false);
//   const [alertObj, setAlertObj] = useState({});
//   const navigate = useNavigate();

//   const handleLogin = (username, password) => {
//     fetch('http://localhost:8085/auth/login', {
//       method: 'POST',
//       credentials: 'include',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ username, password }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.error) {
//           setAlertObj(data);
//           setShowAlert(true);
//         }
//         setCookies(Cookie.parse(document.cookie));
//         navigate('/');
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const handleRegister = (username, password) => {
//     fetch('http://localhost:8085/auth/register', {
//       method: 'POST',
//       credentials: 'include',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ username, password }),
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(response.statusText);
//         }
//         return response.json();
//       })
//       .then((data) => {
//         if (!data.error) {
//           setAlertObj(data);
//           setShowAlert(true);
//           setAuthMode('signin');
//         } else {
//           setAlertObj(data);
//           setShowAlert(true);
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const handleUpdatePassword = (username, password, newPassword) => {
//     fetch('http://localhost:8085/auth/user/password', {
//       method: 'PUT',
//       credentials: 'include',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ username, password, newPassword }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         if (!data.error) {
//           setAlertObj(data);
//           setShowAlert(true);
//           setAuthMode('signin');
//         } else {
//           setAlertObj(data);
//           setShowAlert(true);
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const changeAuthMode = (value) => {
//     setShowAlert(false);
//     setAuthMode(value);
//   };

//   const onFormSubmit = (e) => {
//     e.preventDefault();
//     e.target.reset();
//   };

//   const onSubmit = (data) => {
//     if (authMode === 'signin') {
//       handleLogin(data.username, data.password);
//     } else if (authMode === 'signup') {
//       handleRegister(data.username, data.password);
//     } else if (authMode === 'updatePassword') {
//       handleUpdatePassword(data.username, data.password, data.newPassword);
//     }
//   };

//   return (
//     <div className='tw-flex tw-w-1/2 tw-flex-col '>
//       <Login />
//       <form
//         noValidate
//         onSubmit={handleSubmit(onSubmit)}
//         onReset={onFormSubmit}
//         className='tw-bg-gray tw-flex tw-max-w-xs tw-flex-col tw-items-center tw-rounded-xl tw-border-4 tw-text-black dark:tw-bg-slate-800'
//       >
//         {items.map(
//           (item, index) =>
//             item === 'id' || (
//               <div key={`${index}-${item}`} className='tw-flex tw-flex-col'>
//                 <label className='tw-text-white' htmlFor={item}>
//                   {item}
//                 </label>
//                 {requireItems?.includes(item) ? (
//                   <input
//                     {...register(item, {
//                       ...(item.match(/username/i) && {
//                         required: {
//                           value: true,
//                           message: 'Username is required',
//                         },
//                         minLength: {
//                           value: 8,
//                           message: 'Username must be at least 8 characters',
//                         },
//                       }),

//                       ...(item.match(/password/i) && {
//                         required: {
//                           value: true,
//                           message: 'Password is required',
//                         },
//                         minLength: {
//                           value: 8,
//                           message: 'Password must be at least 8 characters',
//                         },
//                       }),
//                     })}
//                     type={
//                       item.match(/username/i)
//                         ? 'text'
//                         : item.match(/password/i)
//                         ? 'password'
//                         : 'text'
//                     }
//                     className='tw-border-2'
//                   />
//                 ) : (
//                   <input
//                     {...register(item)}
//                     type={
//                       item.match(/username/i)
//                         ? 'text'
//                         : item.match(/password/i)
//                         ? 'password'
//                         : 'text'
//                     }
//                     className='tw-border-2'
//                   />
//                 )}
//                 <p className='tw-text-red-600'>{errors[item]?.message}</p>
//               </div>
//             ),
//         )}
//         <button
//           className='tw-rounded-sm tw-border-2 tw-text-white'
//           type='submit'
//         >
//           {authMode === 'signin'
//             ? 'Login'
//             : authMode === 'signup'
//             ? 'Register'
//             : 'Change Password'}
//         </button>
//         {showAlert ? (
//           <DismissableAlert alert={alertObj} setShowAlert={setShowAlert} />
//         ) : null}
//         {authMode === 'signin' ? (
//           <div>
//             <p
//               className='tw-text-white'
//               onClick={() => changeAuthMode('signup')}
//             >
//               Not registered yet? Sign Up
//             </p>
//             <p
//               className='tw-text-white'
//               onClick={() => changeAuthMode('updatePassword')}
//             >
//               Change Password? Here
//             </p>
//           </div>
//         ) : authMode === 'signup' ? (
//           <div>
//             <p
//               className='tw-text-white'
//               onClick={() => changeAuthMode('signin')}
//             >
//               Already registered? Sign In
//             </p>
//             <p
//               className='tw-text-white'
//               onClick={() => changeAuthMode('updatePassword')}
//             >
//               Change Password? Here
//             </p>
//           </div>
//         ) : (
//           <div>
//             <p
//               className='tw-text-white'
//               onClick={() => changeAuthMode('signin')}
//             >
//               Change your mind? Sign In
//             </p>
//           </div>
//         )}
//       </form>
//     </div>
//   );
// }
