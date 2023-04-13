/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-nested-ternary */
import { DevTool } from '@hookform/devtools';
import React from 'react';
import { useForm } from 'react-hook-form';

export default function MslForm({ items, requireItems }) {
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

  return (
    <div>
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className='tw-bg-gray tw-flex tw-max-w-xs tw-flex-col tw-items-center tw-rounded-xl tw-border-4 tw-text-black dark:tw-bg-slate-800'
      >
        {items.map(
          (item, index) =>
            item === 'id' || (
              <div key={`${index}-${item}`} className='tw-flex tw-flex-col'>
                <label className='tw-text-white' htmlFor={item}>
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
                    className='tw-border-2'
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
                    className='tw-border-2'
                  />
                )}
                <p className='tw-text-red-600'>{errors[item]?.message}</p>
              </div>
            ),
        )}
        <button
          className='tw-rounded-sm tw-border-2 tw-text-white'
          type='submit'
        >
          Submit
        </button>
      </form>
      <DevTool control={control} />
    </div>
  );
}
