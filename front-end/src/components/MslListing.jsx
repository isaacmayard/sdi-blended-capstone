import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';

export default function MslListing() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8085/msl')
      .then((res) => res.json())
      .then((data) => setEntries(data));
  }, []);

  if (!entries) return 'Loading...';

  return (
    <div className='tw-flex tw-grow tw-overflow-auto tw-bg-black'>
      <div className='tw-flex tw-w-screen'>
        <div className=''>
          <Card className='card-box m-3'>
            <Card.Body>
              <Card.Title className='tw-text-center'>MSL</Card.Title>
              <div className='divide-y divide-slate-700 tw-h-[635px] tw-overflow-auto'>
                {entries.map((entry) => (
                  <React.Fragment key={entry.id}>
                    <div className='card text-center tw-bg-gray-200 tw-text-black'>
                      <div className='card-header'>{entry.title}</div>
                      <div className='card-body'>
                        <p className='card-text'>{entry.description}</p>
                      </div>
                      <div className='card-footer tw-text-black'>
                        Date: {entry.date}
                      </div>
                    </div>
                    <br />
                  </React.Fragment>
                ))}
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
