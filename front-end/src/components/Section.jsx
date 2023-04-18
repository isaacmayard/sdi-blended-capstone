import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

import ussfLogo from '../../public/ussf_logo.png';
import useFetch from '../utilities/useFetch';

export default function Section() {
  const [currentUser, setCurrentUser] = useState({});
  const { data: users } = useFetch('users', currentUser.section);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      const res = await axios.get('http://localhost:8085/currentUser');
      const { data } = res;
      setCurrentUser(data);
    };
    fetchCurrentUser();
  }, []);

  return (
    <div>
      <h1>{currentUser.section}</h1>
      <div className='d-flex flex-wrap'>
        {users &&
          users.map((user) => (
            <Card
              key={user.id}
              style={{
                width: '18rem',
                margin: '10px',
                backgroundImage: `url(${ussfLogo})`,
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
