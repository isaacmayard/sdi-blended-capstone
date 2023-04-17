import React from 'react';
import { Alert } from 'react-bootstrap';

function DismissableAlert({ alert, setShowAlert }) {
  return (
    <Alert
      show
      variant={alert.error ? 'danger' : 'success'}
      onClose={() => setShowAlert(false)}
      className='pt-0 pb-0 mt-3'
      dismissible
    >
      <div className='d-flex justify-content-between align-items-center p-1 m-0'>
        <span>{alert.message}</span>
        <button
          type='button'
          className='btn-close p-0 m-0'
          aria-label='Close alert'
          onClick={() => setShowAlert(false)}
        />
      </div>
    </Alert>
  );
}

export default DismissableAlert;
