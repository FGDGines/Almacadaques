import { FC, useContext, useRef } from 'react'
import './DtmSelect.css'
import { tpDtmSelect } from '../../types/typesComponents'
import { GlobalContext } from '../../contexts/GlobalContext'

const DtmSelect: FC<tpDtmSelect> = ({ items, active }) => {

    const select  = useRef<HTMLDivElement>(null)
    const {setLanguajeActive} = useContext(GlobalContext)
    const toggleSelect = ()=>{
        select.current?.querySelector('.select-options')?.classList.toggle('active')
    }

    return <div className="select-container" ref={select}>
        {items.map((item) => {
            const { id, title, url } = item
            if (id == active)
                return <div key={id} className="select-active" onClick={toggleSelect}> <img src={`${url}`} width="24" height="24" alt="" />{title}</div>
        })}

        <div className="select-options">
            {items.map((item) => {
                const { id, title, url } = item
                return <div key={id} onClick={()=>{
                    setLanguajeActive(id)
                    toggleSelect()
                }} className="select-option" data-value={`${title}`}> <img src={`${url}`} width="24" height="24" alt="" />{title}</div>
            })}
        </div>
    </div>
}


export default DtmSelect
