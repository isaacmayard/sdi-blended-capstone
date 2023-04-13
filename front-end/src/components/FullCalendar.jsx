/* eslint-disable react/destructuring-assignment */
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlug from '@fullcalendar/interaction';
import Calendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';

// const task = [{title: 'Meeting', date: new Date()}];

// a custom render function
function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

export default function FullCalendar(tasks) {
  return (
    <div>
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
        events={tasks}
        eventContent={renderEventContent}
      />
    </div>
  );
}
