import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import sbd1 from '../../public/sbd1.png';

function UnitDirectory() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8085/users')
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="table-container" style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <img src={sbd1} alt="USSF Logo" style={{ position: 'absolute', top: '0', left: '0', opacity: 0.2 }} />
    <Table striped bordered hover variant='dark' >
        <thead>
          <tr>
            <th>Rank</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Contact Number</th>
            <th>Work Section</th>
            <th>Unit</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.rank}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.contact_number}</td>
              <td>{user.work_section}</td>
              <td>{user.unit}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UnitDirectory;