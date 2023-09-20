import { FC } from "react"
import { tpFranja } from "../../types/typesComponents"
import './Franja.css'

const Franja:FC<tpFranja>= ({text}) => {
    return <div className='ctFranja'>
        <div className='Franja'>
            {text}
        </div>
    </div>
}   

export default Franja