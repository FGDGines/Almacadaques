import './Colaboradores.css'
import { NarbarAdmin } from '../../components/NarbarAdmin/NarbarAdmin'
import { BarSession } from '../../components/barSession/barSession'
import { ContainerColaboradores } from '../../components/ContainerColaboradores/ContainerColaboradores'
import { BtnMas } from '../../components/BtnMas/BtnMas'


function ColaboradoresAdmin() {
  return (
    <div className="colaboradoresAdmin">
      <NarbarAdmin />

      <div className="containerColaboradores">
        <BarSession tituloVista='Colaborador@s' segundoTitulo='Colaborador@s' nombre='Kristine' img='../../../../src/assets/Dashboard-almacadaques/users/user.svg' />
        <div className="itenColaboradores">
          <ContainerColaboradores/>
          <ContainerColaboradores/>
        </div>
        <div className="BtnAgregarMasColaborador">
        <BtnMas/>
      </div>
      </div>
      
    </div>
  )
}

export { ColaboradoresAdmin }