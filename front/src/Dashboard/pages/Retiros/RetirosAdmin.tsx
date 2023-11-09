import './Retiros.css'
import { NarbarAdmin } from '../../components/NarbarAdmin/NarbarAdmin'
import { BarSession } from '../../components/barSession/barSession'
import { ContainerRetiro } from '../../components/ContainerRetiro/ContainerRetiro'

function RetirosAdmin() {
  return (
    <div className='retirosAdmin'>

      <NarbarAdmin />
      <div className="conatinerRetiro">
        <BarSession tituloVista='Blogs' segundoTitulo='Retiros' nombre='Kristine' img='../../../../src/assets/Dashboard-almacadaques/users/user.svg' />
        <div className="infocontainerRetiro">
          <ContainerRetiro/>
          <ContainerRetiro/>
        </div>
        
      </div>

    </div>
  )
}

export { RetirosAdmin }