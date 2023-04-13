/* eslint-disable import/no-unresolved */
import dayGridPlugin from '@fullcalendar/daygrid';
import FullCalendar from '@fullcalendar/react';

const events = [{ title: 'Meeting', start: new Date() }];

// a custom render function
function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

export default function DemoApp() {
  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView='dayGridMonth'
        weekends
        events={events}
        eventContent={renderEventContent}
      />
    </div>
  );
}
