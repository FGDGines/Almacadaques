import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import './Agenda.css';
import { tpAgenda, tpCalendarDates, tpCalendarEvent, tpDtmResponse } from '../../types/typesComponents';
import { eventos } from '../../data/calendar';
import { FC, useEffect, useState } from 'react';
import { fetchDefault } from '../../helpers/Server';

// Configuración de localización utilizando moment.js
moment.locale('es');
const localizer = momentLocalizer(moment);

const Agenda: FC<tpAgenda> = ({hSelect}) => {
  // Eventos de ejemplo (puedes reemplazarlos con tus propios datos)
  const [calendarEvent, setCalendarEvent] = useState<tpCalendarEvent[]>([]);
  
  const eventsWithDates: tpCalendarDates[] = eventos.map(event => ({
    id: event.id, 
    title: event.title,
    description: event.description , 
    start: new Date(event.start),
    end: new Date(event.end),
  }));


  const handleSelectEvent = (event: tpCalendarDates) => {
      hSelect(event)
  };


  useEffect(() => {
    const api = async () => {
      const calendars: tpCalendarEvent[] = []
      fetchDefault("/calendar_event/read", {}, (d: tpDtmResponse) => {
        if(!d.bag) return 
        for (let index = 0; index < d.bag.length; index++) {
          const element: {id: number , titulo: string, descripcion: string, inicio: number, final: string } = d.bag[index];
            const value = { 
              id: element.id, 
              title: element.titulo,
              description: element.descripcion , 
              start: new Date(element.inicio),
              end: new Date(element.final),
            }
            calendars.push(value)
        }
        console.log(calendars)
        setCalendarEvent(calendars);
      }) 
    };
    api();
    // eslint-disable-next-line
  }, []);

  return (
    <div style={{ height: '100%' }}>
      <Calendar
        localizer={localizer}
        events={calendarEvent}
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
