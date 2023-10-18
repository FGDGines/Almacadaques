import BtNice from '../BtNice/BtNice';
import { textos } from '../../data/textos';
import { GlobalContext } from '../../contexts/GlobalContext';
import { useContext } from 'react';
import './FormDefault.css';

const FormDefault = () => {
    const { languageFlag } = useContext(GlobalContext)
    return <form action="" className='FormDefault'>
        <div className='formRow'>
            <div className='Label'>
            {textos[languageFlag].textnombre}</div>
            <input type="text" placeholder={textos[languageFlag].textplaceholdescribe} required />
        </div>
        <div className='formRow'>
            <div className='Label'>{textos[languageFlag].textemail}</div>
            <input type="email" placeholder={textos[languageFlag].textplaceholemail} required />
        </div>
        <div className='formRow'>
            <div className='Label'>{textos[languageFlag].textcomentario}</div>
            <textarea name="" id="" rows={6} required placeholder={textos[languageFlag].textplaceholcoment}></textarea>
        </div>

        <div className='formRow rowConact'>
            <BtNice text={textos[languageFlag].textaceptar} handler={() => 0} />
        </div>
    </form>

}


export default FormDefault