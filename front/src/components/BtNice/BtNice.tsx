import { FC } from 'react'
import './BtNice.css'
import { tpBtNice } from '../../types/typesComponents'

const BtNice: FC<tpBtNice> = ({handler, text, tp}) => {
    return <div className={"BtNice " + tp} onClick={()=>handler()}>
        {text}
    </div>
}


export default BtNice
