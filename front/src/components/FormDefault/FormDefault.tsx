import BtNice from '../BtNice/BtNice'
import './FormDefault.css'

const FormDefault = () => {
    return <form action="" className='FormDefault'>
        <div className='formRow'>
            <div className='Label'>
                Nombre
            </div>
            <input type="text" placeholder='Escribe tu nombre aquí' required />
        </div>
        <div className='formRow'>
            <div className='Label'>
                Correo electrónico
            </div>
            <input type="email" placeholder='Déjame saber como contactarte' required />
        </div>
        <div className='formRow'>
            <div className='Label'>
                Comentario
            </div>
            <textarea name="" id="" rows={6} required placeholder='Que te gustaría decir ?'></textarea>
        </div>

        <div className='formRow rowConact'>
            <BtNice text='Aceptar' handler={() => 0} />
        </div>
    </form>

}


export default FormDefault