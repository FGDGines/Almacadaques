import './Agenda.css'
import { NarbarAdmin } from '../../components/NarbarAdmin/NarbarAdmin'
import { BarSession } from '../../components/barSession/barSession'
import { EventosPrevo } from '../../components/EventosPrevo/EventosPrevo'
import { BtnMas } from '../../components/BtnMas/BtnMas'
import { GlobalContext } from '../../../contexts/GlobalContext'; 
import { useContext } from 'react';

function AgendaAdmin() {
  const { setLayoutID, setIndexCalendarEvent, setDataEvent } = useContext(GlobalContext);

  const add = () => {
    setDataEvent(null)
    setIndexCalendarEvent(-1)
    setLayoutID(30)
  }

  return (
    <div className="agendaAdmin">

      <NarbarAdmin />
      <div className="containerMainAgenda">
        <BarSession tituloVista='Agenda/Experiencias de Bienestar:' segundoTitulo='Eventos' nombre='Kristine' img='../../../../src/assets/Dashboard-almacadaques/users/user.svg'/>
        <div className="itemAgendaAdmin">
          <EventosPrevo />
        </div>

          <div className="BtonAgregarEventosmain" onClick={add}>
            <BtnMas/>
          </div>
          
      </div>

    </div>
  )
}

export { AgendaAdmin }