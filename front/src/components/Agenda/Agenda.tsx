import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import './Agenda.css';
import { tpAgenda, tpCalendarDates } from '../../types/typesComponents';
import { eventos } from '../../data/calendar';
import { FC } from 'react';

// Configuración de localización utilizando moment.js
moment.locale('es');
const localizer = momentLocalizer(moment);

const Agenda: FC<tpAgenda> = ({hSelect}) => {
  // Eventos de ejemplo (puedes reemplazarlos con tus propios datos)

  // Convierte los eventos a un formato compatible con react-big-calendar
  const eventsWithDates: tpCalendarDates[] = eventos.map(event => ({
    title: event.title,
    start: new Date(event.start),
    end: new Date(event.end),
  }));


  const handleSelectEvent = (event: tpCalendarDates) => {
      hSelect(event)
  };

  return (
    <div style={{ height: 500 }}>
      <Calendar
        localizer={localizer}
        events={eventsWithDates}
        startAccessor="start"
        endAccessor="end"
        views={['month', 'week', 'day']}
        defaultView="month"
        onSelectEvent={handleSelectEvent}
      />
    </div>
  );
};

export default Agenda;
