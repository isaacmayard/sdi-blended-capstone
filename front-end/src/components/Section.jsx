import React from 'react';
import { Card } from 'react-bootstrap';

import { useSome } from '../utilities/MainContextProvider';
import useFetch from '../utilities/useFetch';

export default function Section() {
  const { currentUser } = useSome();

  const { data: allUsers } = useFetch('users');
  const users = allUsers.filter((user) => user.section === currentUser.section);

  if (currentUser.userName === 'Guest') {
    return <p>I am a guest.</p>;
  }

  return (
    <div className='tw-flex tw-w-[100vw] tw-justify-center tw-p-5'>
      <div className='tw-flex tw-h-fit tw-flex-wrap'>
        {users &&
          users.map((user) => (
            <Card
              key={user.id}
              style={{
                width: '18rem',
                margin: '10px',
                backgroundColor: 'azure',
              }}
            >
              <Card.Body>
                <Card.Title>{`${user.rank} ${user.firstName} ${user.lastName}`}</Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>
                  {' '}
                  <strong>Supervisor:</strong> {user.supervisor}
                </Card.Subtitle>
                <Card.Text>
                  <strong>Contact Number:</strong> {user.contact_number}
                </Card.Text>
                <Card.Text>
                  <strong>Work Section:</strong> {user.work_section}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
      </div>
    </div>
  );
}
