import './ComoYDonde.css'
import AlternateTimeline from '../TimeLine/TimeLine';
import { tlComoYDode } from '../../data/tlComoDonde';

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

        <AlternateTimeline data={tlComoYDode} />

        {/* <div  style={{ color: "#75151E" }} > 
            1. Sesiones individuales de coaching (Cadaqués/ Barcelona/ On line)
        </div>
        <div style={{ color: "#75151E" }}  >
            2. Experiencias de bienestar (lugares con encanto).
        </div> */}
    </div>
}


export default ComoYDonde