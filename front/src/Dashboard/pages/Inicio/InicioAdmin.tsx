import './Inicio.css'
import { NarbarAdmin } from '../../components/NarbarAdmin/NarbarAdmin'
import { BarSession } from '../../components/barSession/barSession'
import { ItemCarrusel } from '../../components/ItemCarrusel/ItemCarrusel'
import { EspaciosBienestar } from '../../components/espaciosBienestar/espaciosBienestar'
import { RedesBienestar } from '../../components/redesBienestar/redesBienestar'


import userImg from '../../../../src/assets/Dashboard-almacadaques/users/user.svg'


function InicioAdmin() {
  return (
    <div className="inicioAdmin">
      <NarbarAdmin />      
      <div className="contenidoPrincipal">
        <BarSession tituloVista='Inicio' segundoTitulo='Panel de Control' nombre='Elisabeth' img={userImg} />
        <ItemCarrusel direccion={29} />

        <div className="contenidoBienestar">

          <EspaciosBienestar />
          <RedesBienestar />


        </div>
      </div>
      </div>


  )
}

export { InicioAdmin }