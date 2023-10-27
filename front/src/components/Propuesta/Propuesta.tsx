import './Propuesta.css'
import AlternateTimeline from '../TimeLine/TimeLine';
import { tlEspacios } from '../../data/tlEspacios';
import { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
const Propuesta = ()=>{
    const {languageFlag} = useContext(GlobalContext)
    return <div className="Propuesta">
        <div className="title">
            Espacios de bienestar en los que podrás:
        </div>
        <br />
        <AlternateTimeline data={tlEspacios[languageFlag]} />
        
    </div>
}


export default Propuesta