import { FC } from 'react'
import './RetiroAnterior.css'
import { tpRetiroAnterior } from '../../types/typesComponents'
const RetiroAnterior: FC<tpRetiroAnterior> = (event) => {
    const {description, title, src, hselect} = event
    
    return <div className='RetiroAnterior' onClick={()=>hselect(event)}>
        <div className='ct1'>
            <div className='ctImagen'>
                <img src={src} alt="" />
            </div>
            <div className='ctBody'>
                <div className='rTatitle'>
                    {title}
                </div>
                <div className='rTaDescripcion'>
                    {description}
                </div>
            </div>
        </div>
    </div>
}



export default RetiroAnterior