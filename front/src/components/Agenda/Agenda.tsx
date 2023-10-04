import { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import './Agenda.css'


// Configuración de localización utilizando moment.js
moment.locale('es')
const localizer = momentLocalizer(moment);

const Agenda = () => {
  // Eventos de ejemplo (puedes reemplazarlos con tus propios datos)
  const [events, setEvents] = useState([
    {
      title: 'Reunión importante para retiro en la playa',
      start: moment().toDate(),
      end: moment().add(5, 'hours').toDate(),
    },
    {
      title: 'Otro evento',
      start: moment().add(1, 'day').toDate(),
      end: moment().add(1, 'day').add(2, 'hours').toDate(),
    },
  ]);

  setEvents

  return (
    <div style={{ height: 500 }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        views={['month', 'week', 'day']}
        defaultView="month"
        selectable
        onSelectEvent={event => console.log('Evento seleccionado:', event)}
        onSelectSlot={slotInfo =>
          console.log('Espacio seleccionado:', slotInfo)
        }
      />
    </div>
  );
};

export default Agenda;
