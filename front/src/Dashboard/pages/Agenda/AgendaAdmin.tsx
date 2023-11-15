import './Agenda.css'
import { NarbarAdmin } from '../../components/NarbarAdmin/NarbarAdmin'
import { BarSession } from '../../components/barSession/barSession'
import { EventosPrevo } from '../../components/EventosPrevo/EventosPrevo'
import { BtnMas } from '../../components/BtnMas/BtnMas'
import { GlobalContext } from '../../../contexts/GlobalContext'; 
import { useContext } from 'react';

function AgendaAdmin() {
  const { setLayoutID } = useContext(GlobalContext);
  return (
    <div className="agendaAdmin">

      <NarbarAdmin />
      <div className="containerMainAgenda">
        <BarSession tituloVista='Agenda/Experiencias de Bienestar:' segundoTitulo='Eventos' nombre='Kristine' img='../../../../src/assets/Dashboard-almacadaques/users/user.svg'/>
        <div className="itemAgendaAdmin">
          <EventosPrevo />
          <EventosPrevo />
          <EventosPrevo />
          <EventosPrevo />
          <EventosPrevo />
          <EventosPrevo />
          <EventosPrevo />
          <EventosPrevo />
          <EventosPrevo />
          <EventosPrevo />
          <EventosPrevo />
          <EventosPrevo />



        </div>

          <div className="BtonAgregarEventosmain" onClick={() => setLayoutID(30)}>
            <BtnMas/>
          </div>
          
      </div>

    </div>
  )
}

export { AgendaAdmin }