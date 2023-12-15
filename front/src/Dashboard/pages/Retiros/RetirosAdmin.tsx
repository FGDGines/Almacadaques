import './Retiros.css'
import { NarbarAdmin } from '../../components/NarbarAdmin/NarbarAdmin'
import { BarSession } from '../../components/barSession/barSession'
import { ContainerRetiro } from '../../components/ContainerRetiro/ContainerRetiro'
import { GlobalContext } from '../../../contexts/GlobalContext'; 
import { useContext } from 'react';
import { BtnMas } from '../../components/BtnMas/BtnMas';


import userImg from '../../../../src/assets/Dashboard-almacadaques/users/user.svg'


function RetirosAdmin() {
  const { setLayoutID, setIndexBlogRetiro, setDataRetiro } = useContext(GlobalContext);

  const add = () => {
    setDataRetiro(null)
    setIndexBlogRetiro(-1)
    setLayoutID(38)
  }
  return (
    <div className='retirosAdmin'>

      <NarbarAdmin />
      <div className="conatinerRetiro">
        <BarSession tituloVista='Blogs' segundoTitulo='Retiros' nombre='Elisabeth' img={userImg} />
        <div className="infocontainerRetiro">
          <ContainerRetiro/>
        </div>
        
      </div>
      <div className="BtonAgregarEventosmain" onClick={add}>
            <BtnMas/>
          </div>
    </div>
  )
}

export { RetirosAdmin }