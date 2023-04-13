/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-nested-ternary */
import { DevTool } from '@hookform/devtools';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';

import useFetch from '../utilities/useFetch';

export default function MslForm({ items, requireItems }) {
  const location = useLocation();
  const form = useForm();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = form;
  const onSubmit = (data) => {
    console.log('Form Submitted', data);
  };
  const test = useFetch('users');

  return (
    <div className='tw-flex tw-flex-col'>
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className='tw-flex  tw-flex-col tw-items-center tw-rounded-xl tw-border-4 tw-text-center tw-text-black dark:tw-bg-slate-800'
      >
        {items.map((item, index) =>
          item.match(/description/i) ? (
            <div key={`${index}-${item}`} className='tw-flex tw-flex-col'>
              <label
                className={location.pathname.match(/home/i) && 'tw-text-white'}
                htmlFor={item}
              >
                {item}
              </label>
              {requireItems?.includes(item) ? (
                <textarea
                  {...register(item, {
                    // will check if the item match a field and do validation only for that field
                    ...(item.match(/Title/i) && {
                      validate: {
                        // create multiple validation for that item
                        shortTitle: (fieldValue) =>
                          fieldValue.length > 6 || 'Description too short',
                        longTitle: (fieldValue) =>
                          fieldValue.length < 50 || 'Description too Long',
                      },
                    }),

                    ...(item.match(/Description/i) && {
                      validate: {
                        // create multiple validation for that item
                        shortTitle: (fieldValue) =>
                          fieldValue.length > 10 || 'Description too short',
                        longTitle: (fieldValue) =>
                          fieldValue.length < 200 || 'Description too Long',
                      },
                    }),

                    ...(item.match(/password/i) && {
                      validate: {
                        // create multiple validation for that item
                        shortTitle: (fieldValue) =>
                          fieldValue.length > 16 || 'Description too short',
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
                  className={item.match(/description/i) && 'tw  tw-border-2'}
                />
              ) : (
                <textarea
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
                  className={item.match(/description/i) && 'tw  tw-border-2'}
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
                  {...register(item, {
                    // will check if the item match a field and do validation only for that field
                    ...(item.match(/Title/i) && {
                      validate: {
                        // create multiple validation for that item
                        shortTitle: (fieldValue) =>
                          fieldValue.length > 6 || 'Description too short',
                        longTitle: (fieldValue) =>
                          fieldValue.length < 50 || 'Description too Long',
                      },
                    }),

                    ...(item.match(/Description/i) && {
                      validate: {
                        // create multiple validation for that item
                        shortTitle: (fieldValue) =>
                          fieldValue.length > 10 || 'Description too short',
                        longTitle: (fieldValue) =>
                          fieldValue.length < 200 || 'Description too Long',
                      },
                    }),

                    ...(item.match(/password/i) && {
                      validate: {
                        // create multiple validation for that item
                        shortTitle: (fieldValue) =>
                          fieldValue.length > 16 || 'Description too short',
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
                  className={item.match(/description/i) && 'tw  tw-border-2'}
                />
              ) : (
                <input
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
                  className={item.match(/description/i) && 'tw  tw-border-2'}
                />
              )}
              <p className='tw-text-red-600'>{errors[item]?.message}</p>
            </div>
          ),
        )}
        <button
          className={
            (location.pathname.match(/home/i) && 'tw-text-white ') ||
            'tw-rounded-sm tw-border-2'
          }
          type='submit'
        >
          {location.pathname ? 'Submit' : 'Login'}
        </button>
      </form>
      <DevTool control={control} />
    </div>
  );
}
