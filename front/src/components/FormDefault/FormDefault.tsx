
import { textos } from '../../data/textos';
import { GlobalContext } from '../../contexts/GlobalContext';
import { FC, FormEvent, useContext, useRef } from 'react';
import './FormDefault.css';
import { tpFormDefault } from '../../types/typesComponents';
import '../BtNice/BtNice.css'
const FormDefault: FC<tpFormDefault> = ({hSubmit}) => {

    const form = useRef<HTMLFormElement>(null)

    const submitFormulario =(event: FormEvent<HTMLFormElement>)=>{
        event.stopPropagation()
        event.preventDefault()
        if(event.target instanceof HTMLFormElement){
            const bag  = new FormData(event.target)
            hSubmit(bag)
            event.target.reset()
        }
    }

    const { languageFlag } = useContext(GlobalContext)
    return <form ref={form} onSubmit={submitFormulario} className='FormDefault'>
        <div className='formRow'>
            <div className='Label'>
            {textos[languageFlag].textnombre}</div>
            <input type="text" name='nombre' placeholder={textos[languageFlag].textplaceholdescribe} required />
        </div>
        <div className='formRow'>
            <div className='Label'>{textos[languageFlag].textemail}</div>
            <input type="email" name='correo' placeholder={textos[languageFlag].textplaceholemail} required />
        </div>
        <div className='formRow'>
            <div className='Label'>{textos[languageFlag].textcomentario}</div>
            <textarea name="msg" id="" rows={6} required placeholder={textos[languageFlag].textplaceholcoment}></textarea>
        </div>

        <div className='formRow rowConact'>
            <button className='BtNice'>
                {textos[languageFlag].textaceptar}
            </button>
        </div>
    </form>

}


export default FormDefault