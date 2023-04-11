/* eslint-disable no-nested-ternary */
import React from 'react';
import { useForm } from 'react-hook-form';

export default function MslForm({ items }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form className='tw-flex tw-max-w-xs tw-flex-col tw-items-center tw-rounded-xl tw-border-4 tw-bg-white dark:tw-bg-slate-800'>
      {items?.map((item) =>
        Object.keys(item).map(
          (key) =>
            key === 'id' || (
              <div key={`${item.id}.${key}`} className='tw-flex tw-flex-col'>
                <label>{key}</label>
                <input
                  type={
                    key === 'email' ? 'text' : key === 'date' ? 'date' : 'text'
                  }
                  className='tw-border-2'
                />
              </div>
            ),
        ),
      )}
      <button className='tw-rounded-sm tw-border-2' type='submit'>
        Submit
      </button>
    </form>
  );
}
