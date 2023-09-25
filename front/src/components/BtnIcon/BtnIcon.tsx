import { tpBtnIcon } from '../../types/typesComponents'
import './BtnIcon.css'
import {FC} from 'react'
const BtnIcon:FC<tpBtnIcon> = ({text, Icon, clase})=>{
    return <div className={`BtnIcon   ${clase}`}>
        <div className='ctText'>
            {text}
        </div>
        <div className='ctIcon'>
            {Icon}
        </div>
    </div>
}


export default BtnIcon