import BtNice from "../BtNice/BtNice"
import './ComoYDonde.css'

const ComoYDonde = () => {
    return <div className="ComoYDonde">
        <div className="ct1" >
            <span style={{ color: "#75151E" }}> ❝ </span>
                En definitiva, se trata de avanzar en tu proceso de transformación y bienestar <br/>
                para ser tu mejor versión.
            <span style={{ color: "#75151E" }}> ❞ </span>
        </div>
        <div className="ct2" style={{ color: "#75151E" }}  >
            Como y Donde ?
        </div>
        <div  style={{ color: "#75151E" }} > 
            1. Sesiones individuales de coaching (Cadaqués/ Barcelona/ On line)
        </div>
        <BtNice text="Saber Más" handler={()=>alert("0")} tp="white" />
        <div style={{ color: "#75151E" }}  >
            2. Experiencias de bienestar (lugares con encanto).
        </div>
        <BtNice text="Saber Más" handler={()=>alert("0")} tp="white" />
    </div>
}


export default ComoYDonde