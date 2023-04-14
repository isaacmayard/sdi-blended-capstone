/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-nested-ternary */
import { DevTool } from '@hookform/devtools';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';

import { useSome } from '../utilities/MainContextProvider';

export default function MslForm({
  items,
  requireItems,
  fn = ({ Title: title, Description: description }, user) =>
    console.log('Form Submitted', { title, description }),
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
    <div className='tw-flex tw-w-1/3 tw-flex-col tw-rounded-lg tw-bg-[#5c5c5c] tw-text-center tw-text-white'>
      <form
        noValidate
        onSubmit={handleSubmit(fn)}
        className=' tw-m-2  tw-flex-col tw-rounded-xl tw-border-[1px] tw-p-2'
      >
        {items.map((item, index) =>
          item.match(/description/i) ? (
            <div key={`${index}-${item}`} className='tw-flex tw-flex-col'>
              <label
                className={location.pathname.match(/home/i) && ''}
                htmlFor={item}
              >
                {item}
              </label>
              {requireItems?.includes(item) ? (
                <textarea
                  className={
                    item.match(/description/i) &&
                    'tw-h-40  tw-border-2  tw-text-black'
                  }
                  {...register(item, {
                    // will check if the item match a field and do validation only for that field
                    ...(item.match(/Title/i) && {
                      validate: {
                        // create multiple validation for that item
                        shortTitle: (fieldValue) =>
                          fieldValue.length > 6 || `${item} too short`,
                        longTitle: (fieldValue) =>
                          fieldValue.length < 50 || 'Description too Long',
                      },
                    }),

                    ...(item.match(/Description/i) && {
                      validate: {
                        // create multiple validation for that item
                        shortTitle: (fieldValue) =>
                          fieldValue.length > 10 || `${item} too short`,
                        longTitle: (fieldValue) =>
                          fieldValue.length < 200 || 'Description too Long',
                      },
                    }),

                    ...(item.match(/password/i) && {
                      validate: {
                        // create multiple validation for that item
                        shortTitle: (fieldValue) =>
                          fieldValue.length > 16 || `${item} too short`,
                        longTitle: (fieldValue) =>
                          fieldValue.length < 50 || 'Description too Long',
                        special: (fieldValue) =>
                          fieldValue.match(/\W/g) ||
                          'Most use one special character',
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
                      : item.match(/date/i)
                      ? 'date'
                      : 'text'
                  }
                />
              ) : (
                <textarea
                  className={
                    item.match(/description/i) &&
                    'tw-h-40  tw-border-2 tw-text-black'
                  }
                  {...register(item)}
                  type={
                    item.match(/email/i)
                      ? 'email'
                      : item.match(/password/i)
                      ? 'password'
                      : item.match(/username/i)
                      ? 'username'
                      : item.match(/date/i)
                      ? 'date'
                      : 'text'
                  }
                />
              )}
              <p className='tw-text-red-600'>{errors[item]?.message}</p>
            </div>
          ) : (
            <div key={`${index}-${item}`} className='tw-flex tw-flex-col'>
              <label
                className={location.pathname.match(/home/i) && 'tw-text-white'}
                htmlFor={item}
              >
                {item}
              </label>
              {requireItems?.includes(item) ? (
                <input
                  className='tw-border-2  tw-text-black'
                  {...register(item, {
                    // will check if the item match a field and do validation only for that field
                    ...(item.match(/Title/i) && {
                      validate: {
                        // create multiple validation for that item
                        shortTitle: (fieldValue) =>
                          fieldValue.length > 6 || `${item} too short`,
                        longTitle: (fieldValue) =>
                          fieldValue.length < 50 || 'Description too Long',
                      },
                    }),

                    ...(item.match(/Description/i) && {
                      validate: {
                        // create multiple validation for that item
                        shortTitle: (fieldValue) =>
                          fieldValue.length > 10 || `${item} too short`,
                        longTitle: (fieldValue) =>
                          fieldValue.length < 200 || 'Description too Long',
                      },
                    }),

                    ...(item.match(/password/i) && {
                      validate: {
                        // create multiple validation for that item
                        shortTitle: (fieldValue) =>
                          fieldValue.length > 16 || `${item} too short`,
                        longTitle: (fieldValue) =>
                          fieldValue.length < 50 || 'Description too Long',
                        special: (fieldValue) =>
                          !!fieldValue.match(/\W/g) ||
                          'Most have one special character',
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
                      : item.match(/date/i)
                      ? 'date'
                      : 'text'
                  }
                />
              ) : (
                <input
                  className='tw-border-2 tw-text-black'
                  {...register(item)}
                  type={
                    item.match(/email/i)
                      ? 'email'
                      : item.match(/password/i)
                      ? 'password'
                      : item.match(/username/i)
                      ? 'username'
                      : item.match(/date/i)
                      ? 'date'
                      : 'text'
                  }
                />
              )}
              <p className='tw-text-red-600'>{errors[item]?.message}</p>
            </div>
          ),
        )}

        <button className='tw-m-2 tw-rounded-sm tw-border-2' type='submit'>
          {location.pathname ? 'Submit' : 'Login'}
        </button>
      </form>
      <DevTool control={control} />
    </div>
  );
}
