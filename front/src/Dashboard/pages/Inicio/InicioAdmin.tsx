import './Inicio.css'
import { NarbarAdmin } from '../../components/NarbarAdmin/NarbarAdmin'
import { BarSession } from '../../components/barSession/barSession'

function InicioAdmin() {
  return (
    <div className="inicioAdmin">
      <NarbarAdmin />
      <BarSession tituloVista='Inicio' segundoTitulo='Dashboard' nombre='Kristine'  img='../../../../src/assets/Dashboard-almacadaques/users/user.svg'/>


    </div>


  )
}

export { InicioAdmin }