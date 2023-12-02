import "./SobreMI.css"
import { NarbarAdmin } from "../../components/NarbarAdmin/NarbarAdmin"
import { BarSession } from "../../components/barSession/barSession"
import { BtnMasAgregar } from "../../components/BtnMasAgregar/BtnMasAgregar"
import { VisualTestMain } from "../../components/VisualTestMain/VisualTestMain"
import { useContext } from "react"
import { GlobalContext } from "../../../contexts/GlobalContext"


import userImg from '../../../../src/assets/Dashboard-almacadaques/users/user.svg'


function SobreMIAdmin() {
  const { setIndexTestimony } = useContext(GlobalContext)
  // agregar elemento
  const add = () => {
    setIndexTestimony(-1)
  }
  return (
    <div className="sobreMIA">
      <NarbarAdmin />
      <div className="containerMainTesti">
        <BarSession tituloVista='Sobre mi' segundoTitulo='Testimonios' nombre='Kristine' img={userImg} />
        <div className="timeBton">
          <div className="time">
            <p className="fechadetestimonio">Ultima actualización 24 jun 2023</p>
            <div onClick={add}>
              <BtnMasAgregar direccion={28} />
            </div>
          </div>
          
          <VisualTestMain/>
          
          
          
        </div>


      </div>


    </div>

  )
}

export { SobreMIAdmin }