import './Inicio.css'
import { NarbarAdmin } from '../../components/NarbarAdmin/NarbarAdmin'
import { BarSession } from '../../components/barSession/barSession'
import { ItemCarrusel } from '../../components/ItemCarrusel/ItemCarrusel'

function InicioAdmin() {
  return (
    <div className="inicioAdmin">
      <NarbarAdmin />
      <div className="contenidoPrincipal">
        <BarSession tituloVista='Inicio' segundoTitulo='Dashboard' nombre='Kristine' img='../../../../src/assets/Dashboard-almacadaques/users/user.svg' />
        <ItemCarrusel />

        <div className="contenidoBienestar">
            


        </div>
      </div>
    </div>


  )
}

export { InicioAdmin }