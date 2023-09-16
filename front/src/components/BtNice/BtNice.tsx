import { FC } from 'react'
import './BtNice.css'
import { tpBtNice } from '../../types/typesComponents'

const BtNice: FC<tpBtNice> = ({handler, text}) => {
    return <div className="BtNice" onClick={()=>handler()}>
        {text}
    </div>
}


export default BtNice
