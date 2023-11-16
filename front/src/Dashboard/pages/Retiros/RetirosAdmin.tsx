import './Retiros.css'
import { NarbarAdmin } from '../../components/NarbarAdmin/NarbarAdmin'
import { BarSession } from '../../components/barSession/barSession'
import { ContainerRetiro } from '../../components/ContainerRetiro/ContainerRetiro'
import { GlobalContext } from '../../../contexts/GlobalContext'; 
import { useContext } from 'react';
import { BtnMas } from '../../components/BtnMas/BtnMas';

function RetirosAdmin() {
  const { setLayoutID } = useContext(GlobalContext);
  return (
    <div className='retirosAdmin'>

      <NarbarAdmin />
      <div className="conatinerRetiro">
        <BarSession tituloVista='Blogs' segundoTitulo='Retiros' nombre='Kristine' img='../../../../src/assets/Dashboard-almacadaques/users/user.svg' />
        <div className="infocontainerRetiro">
          <ContainerRetiro/>
        </div>
        
      </div>
      <div className="BtonAgregarEventosmain" onClick={() => setLayoutID(38)}>
            <BtnMas/>
          </div>
    </div>
  )
}

export { RetirosAdmin }