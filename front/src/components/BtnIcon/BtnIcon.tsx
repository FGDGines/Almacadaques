import { GlobalContext } from '../../contexts/GlobalContext'
import { tpBtnIcon } from '../../types/typesComponents'
import './BtnIcon.css'
import {FC, useContext} from 'react'
const BtnIcon:FC<tpBtnIcon> = ({text, Icon, clase})=>{
    const {setLayoutID} = useContext(GlobalContext)
    return <div className={`BtnIcon   ${clase}`} onClick={()=>setLayoutID(3) }>
        <div className='ctText'>
            {text}
        </div>
        <div className='ctIcon'>
            {Icon}
        </div>
    </div>
}


export default BtnIcon