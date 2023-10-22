import { useContext } from 'react'
import './ComoYDonde.css'
import { GlobalContext } from '../../contexts/GlobalContext'
import { textos } from '../../data/textos'


const ComoYDonde = () => {
    const { setLayoutID, languageFlag } = useContext(GlobalContext)
    return <div className="ComoYDonde">
        <div className="ct1" >
            <span style={{ color: "#75151E" }}> ❝ </span>
            {textos[languageFlag].textDesthome3}
            <span style={{ color: "#75151E" }}> ❞ </span>
        </div>
        <div className="ct2" style={{ color: "#75151E" }}  >
            {textos[languageFlag].textDesthome4}
        </div>
        <div  className='ctList'>
            {textos[languageFlag].textDesthome5}
            <span className='nlink' onClick={() => setLayoutID(4)}>
            {textos[languageFlag].textDesthome50}
            </span>
            {textos[languageFlag].textDesthome51}
        </div>
        <div className='ctList'>
            {textos[languageFlag].textDesthome6}
            <span className='nlink' onClick={() => setLayoutID(6)} >
            {textos[languageFlag].textDesthome60}
            </span>
            {textos[languageFlag].textDesthome61}
        </div>
    </div>
}


export default ComoYDonde