import "./SobreMI.css"
import { NarbarAdmin } from "../../components/NarbarAdmin/NarbarAdmin"
import { BarSession } from "../../components/barSession/barSession"
import { BtnMasAgregar } from "../../components/BtnMasAgregar/BtnMasAgregar"
import { VisualTestMain } from "../../components/VisualTestMain/VisualTestMain"

function SobreMIAdmin() {
  return (
    <div className="sobreMIA">
      <NarbarAdmin />
      <div className="containerMainTesti">
        <BarSession direccion={17} tituloVista='Sobre mi' segundoTitulo='Testimonios' nombre='Kristine' img='../../../../src/assets/Dashboard-almacadaques/users/user.svg' />
        <div className="timeBton">
          <div className="time">
            <p className="fechadetestimonio">Ultima actualización 24 jun 2023</p>
            <BtnMasAgregar direccion={28} />
          </div>
          <VisualTestMain/>
          
        </div>


      </div>


    </div>

  )
}

export { SobreMIAdmin }