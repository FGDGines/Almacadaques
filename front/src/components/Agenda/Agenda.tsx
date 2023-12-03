import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import './Agenda.css';
import { tpAgenda, tpCalendarDates } from '../../types/typesComponents';
// import { eventos } from '../../data/calendar';
import { FC } from 'react';

// Configuración de localización utilizando moment.js
moment.locale('es');
const localizer = momentLocalizer(moment);

const Agenda: FC<tpAgenda> = ({ hSelect, calendar_event }) => {
  // Eventos de ejemplo (puedes reemplazarlos con tus propios datos)
  // const eventsWithDates: tpCalendarDates[] = eventos.map(event => ({
  //   id: event.id, 
  //   title: event.title,
  //   description: event.description , 
  //   start: new Date(event.start),
  //   end: new Date(event.end),
  // }));


  const handleSelectEvent = (event: tpCalendarDates) => {
      hSelect(event)
  };
  

  return (
    <div style={{ height: '100%' }}>
      <Calendar
        localizer={localizer}
        events={calendar_event}
        startAccessor="start"
        endAccessor="end"
        views={['month']}
        defaultView="month"
        onSelectEvent={handleSelectEvent}
      />
    </div>
  );
};

export default Agenda;
