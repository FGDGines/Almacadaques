import './Colaboradores.css'
import { NarbarAdmin } from '../../components/NarbarAdmin/NarbarAdmin'
import { BarSession } from '../../components/barSession/barSession'
import { ContainerColaboradores } from '../../components/ContainerColaboradores/ContainerColaboradores'



function ColaboradoresAdmin() {
  return (
    <div className="colaboradoresAdmin">
      <NarbarAdmin />

      <div className="containerColaboradores">
        <BarSession tituloVista='Colaborador@s' segundoTitulo='Colaborador@s' nombre='Kristine' img='../../../../src/assets/Dashboard-almacadaques/users/user.svg' />
        <div className="itenColaboradores">
          <ContainerColaboradores />
        </div>
        <div className="BtnAgregarMasColaborador">
          <div className="BtnMas" >
            <img src="../../../../src/assets/Dashboard-almacadaques/iconBtn/mingcute_add-line.svg" alt="" className="ImgColaboradoresAdmin" />
          </div>
        </div>
      </div>

    </div>
  )
}

export { ColaboradoresAdmin }