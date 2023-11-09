import './Inicio.css'
import { NarbarAdmin } from '../../components/NarbarAdmin/NarbarAdmin'
import { BarSession } from '../../components/barSession/barSession'
import { ItemCarrusel } from '../../components/ItemCarrusel/ItemCarrusel'
import { EspaciosBienestar } from '../../components/espaciosBienestar/espaciosBienestar'
import { RedesBienestar } from '../../components/redesBienestar/redesBienestar'

function InicioAdmin() {
  return (
    <div className="inicioAdmin">
      <NarbarAdmin />
      <div className="contenidoPrincipal">
        <BarSession tituloVista='Inicio' segundoTitulo='Dashboard' nombre='Kristine' img='../../../../src/assets/Dashboard-almacadaques/users/user.svg' />
        <ItemCarrusel />

        <div className="contenidoBienestar">

          <EspaciosBienestar></EspaciosBienestar>
          <RedesBienestar></RedesBienestar>


        </div>
      </div>
    </div>


  )
}

export { InicioAdmin }