/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-nested-ternary */
import { DevTool } from '@hookform/devtools';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';

import { useSome } from '../utilities/MainContextProvider';

export default function RgisterForm({
  className,
  items,
  children,
  requireItems,
  fn = (data) => console.log('Form Submitted', data),
}) {
  /// //////////////////ß

  // get the current url for conditional rendering
  const location = useLocation();

  // use form library to handle form submission
  const form = useForm();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = form;

  // Component return

  return (
    <div
      className={` tw-absolute tw-right-[25vw] tw-top-28 tw-h-fit tw-justify-center tw-rounded-lg tw-bg-[#5c5c5c] tw-text-center tw-text-white ${className}`}
    >
      <form
        noValidate
        onSubmit={handleSubmit(fn)}
        className=' tw-m-2  tw-w-[600px] tw-flex-col tw-rounded-2xl tw-border-[1px] tw-p-4'
      >
        {items.map((item, index) => (
          <div
            key={`${index}-${item}`}
            className='tw-m-3 tw-flex tw-flex-col tw-rounded-xl  tw-border-[1px] tw-p-3'
          >
            <label className='tw-text-white' htmlFor={item}>
              {item}
            </label>
            {requireItems?.includes(item) ? (
              <input
                className='tw-border-2 tw-text-center tw-text-black'
                {...register(item, {
                  // will check if the item match a field and do validation only for that field

                  ...(item.match(/Username/i) && {
                    validate: {
                      // create multiple validation for that item
                      shortTitle: (fieldValue) =>
                        fieldValue.length > 3 || `${item} too short`,
                      longTitle: (fieldValue) =>
                        fieldValue.length < 50 || 'Description too Long',
                    },
                  }),

                  ...(item.match(/password/i) && {
                    validate: {
                      // create multiple validation for that item
                      shortTitle: (fieldValue) =>
                        fieldValue.length > 6 || `${item} too short`,
                      longTitle: (fieldValue) =>
                        fieldValue.length < 50 || 'Description too Long',
                      // special: (fieldValue) =>
                      //   !!fieldValue.match(/\W/g) ||
                      //   'Most have one special character',
                    },
                  }),

                  required: {
                    value: true,
                    message: `${item} is required`,
                  },
                })}
                // will check the name of the item and assign a input type
                type={
                  item.match(/email/i)
                    ? 'email'
                    : item.match(/password/i)
                    ? 'password'
                    : item.match(/username/i)
                    ? 'username'
                    : item.match(/significant/i)
                    ? 'boolean'
                    : item.match(/admin/i)
                    ? 'checkbox'
                    : item.match(/contact_number/i)
                    ? 'tel'
                    : item.match(/completed/i)
                    ? 'boolean'
                    : item.match(/dueDate/i)
                    ? 'date'
                    : item.match(/date/i)
                    ? 'date'
                    : 'text'
                }
              />
            ) : (
              // render all the input field that are not description and are not required
              <input
                className='tw-border-2 tw-text-center tw-text-black'
                {...register(item)}
                type={
                  item.match(/email/i)
                    ? 'email'
                    : item.match(/password/i)
                    ? 'password'
                    : item.match(/username/i)
                    ? 'username'
                    : item.match(/significant/i)
                    ? 'boolean'
                    : item.match(/admin/i)
                    ? 'checkbox'
                    : item.match(/contact_number/i)
                    ? 'tel'
                    : item.match(/completed/i)
                    ? 'boolean'
                    : item.match(/dueDate/i)
                    ? 'date'
                    : item.match(/date/i)
                    ? 'date'
                    : 'text'
                }
              />
            )}
            <p className='tw-text-red-600'>{errors[item]?.message}</p>
          </div>
        ))}

        <button
          className='tw-m-2 tw-w-32 tw-self-center tw-rounded-sm tw-border-2'
          type='submit'
        >
          {location.pathname.match(/login/i)
            ? 'Login'
            : location.pathname.match(/register/i)
            ? 'Register'
            : 'Submit'}
        </button>
        {children}
      </form>
      <DevTool control={control} />
    </div>
  );
}
