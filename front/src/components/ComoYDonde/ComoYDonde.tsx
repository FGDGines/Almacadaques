import { useContext } from 'react'
import './ComoYDonde.css'
import { GlobalContext } from '../../contexts/GlobalContext'

const ComoYDonde = () => {
    const {setLayoutID} = useContext(GlobalContext)
    return <div className="ComoYDonde">
        <div className="ct1" >
            <span style={{ color: "#75151E" }}> ❝ </span>
            En definitiva, se trata de avanzar en tu proceso de transformación y bienestar <br />
            para ser tu mejor versión.
            <span style={{ color: "#75151E" }}> ❞ </span>
        </div>

        <div className="ct2" style={{ color: "#75151E" }}  >
            ¿ Como y Donde ?
        </div>

        <div className='nlink' style={{ color: "#75151E" }} onClick={()=>setLayoutID(4)} >
            1. Sesiones individuales de coaching (Cadaqués/ Barcelona/ On line)
        </div>
        <div style={{ color: "#75151E" }}  className='nlink' onClick={()=>setLayoutID(6)} >
            2. Experiencias de bienestar (lugares con encanto).
        </div>
    </div>
}


export default ComoYDonde