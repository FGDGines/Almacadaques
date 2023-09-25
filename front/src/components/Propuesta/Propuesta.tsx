import './Propuesta.css'
import AlternateTimeline from '../TimeLine/TimeLine';
import { tlEspacios } from '../../data/tlEspacios';
const Propuesta = ()=>{
    return <div className="Propuesta">
        <div className="title">
            Espacios de bienestar en los que podrás:
        </div>
        <br />
        <AlternateTimeline data={tlEspacios} />
        
    </div>
}


export default Propuesta