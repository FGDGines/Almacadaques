import { useContext } from 'react'
import './ComoYDonde.css'
import { GlobalContext } from '../../contexts/GlobalContext'
import { textos } from '../../data/textos'


const ComoYDonde = () => {
    const {setLayoutID, languageFlag } = useContext(GlobalContext)
    return <div className="ComoYDonde">
        <div className="ct1" >
            <span style={{ color: "#75151E" }}> ❝ </span>
            {textos[languageFlag].textDesthome3}
            <span style={{ color: "#75151E" }}> ❞ </span>
        </div>
        <div className="ct2" style={{ color: "#75151E" }}  >
        {textos[languageFlag].textDesthome4}
        </div>
        <div className='nlink' style={{ color: "#75151E" }} onClick={()=>setLayoutID(4)} >
        {textos[languageFlag].textDesthome5}   
        </div>
        <div style={{ color: "#75151E" }}  className='nlink' onClick={()=>setLayoutID(6)} >
        {textos[languageFlag].textDesthome6}
        </div>
    </div>
}


export default ComoYDonde