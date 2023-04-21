/* eslint-disable import/no-unresolved */
/* eslint-disable react/destructuring-assignment */
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlug from '@fullcalendar/interaction';
import Calendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import Card from 'react-bootstrap/Card';

import useFetch from '../utilities/useFetch';

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

export default function FullCalendar() {
  const {
    data: users,
    isLoading: isLoadingUsers,
    isError: isErrorUsers,
  } = useFetch('users');

  const {
    data: tasks,
    isLoading: isLoadingTasks,
    isError: isErrorTasks,
  } = useFetch('tasks');

  const testArray = tasks?.map((task) => {
    const { title, dueDate: start } = task;
    return { title, start };
  });

  if (isLoadingTasks) return 'Loading...';
  if (isErrorTasks) return `An error has occurred: ${isErrorTasks.message}`;
  if (isLoadingUsers) return 'Loading...';
  if (isErrorUsers) return `An error has occurred: ${isErrorUsers.message}`;

  return (
    <div className='tw-flex tw-h-screen tw-w-screen'>
      <Card className='m-3 tw-flex tw-h-[98vh] tw-grow tw-overflow-auto tw-bg-gray-500'>
        <div className='divide-y divide-slate-700 tw-h-full tw-w-full tw-overflow-auto'>
          <Card.Body>
            <Card.Title className='tw-text-center'>TASK CALENDAR</Card.Title>
            <Calendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlug]}
              initialView='dayGridMonth'
              headerToolbar={{
                start: 'today prev,next',
                center: 'title',
                end: 'timeGridDay,timeGridWeek,dayGridMonth',
              }}
              // dateClick={}
              weekends
              events={testArray}
              eventContent={renderEventContent}
            />
          </Card.Body>
        </div>
      </Card>
    </div>
  );
}
