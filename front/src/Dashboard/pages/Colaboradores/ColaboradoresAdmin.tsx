import './Colaboradores.css'
import { NarbarAdmin } from '../../components/NarbarAdmin/NarbarAdmin'
import { BarSession } from '../../components/barSession/barSession'
import { ContainerColaboradores } from '../../components/ContainerColaboradores/ContainerColaboradores'
import { GlobalContext } from '../../../contexts/GlobalContext'  
import { useContext } from 'react';

import addImg from "../../../../src/assets/Dashboard-almacadaques/iconBtn/mingcute_add-line.svg"
import userImg from '../../../../src/assets/Dashboard-almacadaques/users/user.svg'

function ColaboradoresAdmin() {
  const { setLayoutID, setIndexCollaborator, setDataColaborador } = useContext(GlobalContext);
  
  const add = () => {
    setDataColaborador(null)
    setIndexCollaborator(-1)
    setLayoutID(31)
  }
  return (
    <div className="colaboradoresAdmin">
      <NarbarAdmin />

      <div className="containerColaboradores">
        <BarSession tituloVista='Colaborador@s' segundoTitulo='Colaborador@s' nombre='Elisabeth' img={userImg} />
        <div className="itenColaboradores">
          <ContainerColaboradores />
        </div>
        <div className="BtnAgregarMasColaborador">
          <div className="BtnMas" onClick={add} >
            <img src={addImg} alt="" className="ImgColaboradoresAdmin" />
          </div>
        </div>
      </div>

    </div>
  )
}

export { ColaboradoresAdmin }