import './Agenda.css'
import { NarbarAdmin } from '../../components/NarbarAdmin/NarbarAdmin'
import { BarSession } from '../../components/barSession/barSession'
import { EventosPrevo } from '../../components/EventosPrevo/EventosPrevo'

function AgendaAdmin() {
  return (
    <div className="agendaAdmin">

      <NarbarAdmin />
      <div className="containerMainAgenda">
        <BarSession tituloVista='Agenda/Experiencias de Bienestar:' segundoTitulo='Eventos' nombre='Kristine' img='../../../../src/assets/Dashboard-almacadaques/users/user.svg'/>
        <div className="itemAgendaAdmin">
          <EventosPrevo />
          <EventosPrevo />
        </div>

      </div>

    </div>
  )
}

export { AgendaAdmin }