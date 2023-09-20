import './Contactar.css'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Franja from '../Franja/Franja';
import BtNice from '../BtNice/BtNice';
const Contactar = ()=>{


    return <div className="Contactar">
        <Navbar />
        <Franja text='Contactar' />
        <div className='ctSections'>
            <div className='ctLeft'>
                <div className='title1'>
                    Estoy aquí para responder cualquier pregunta que puedas tener.
                </div>
                <br />
                <div className='title2'>
                    Cuéntame todo sobre tu problema, estaré encantado de ayudarte. Rellena el formulario, o si lo prefieres envíanos un email.
                </div>
                <br />
                <div className='ctTelef'>
                    Teléfono:  +1 (256) 1087 000
                </div>
                <div className='ctCorreo'>
                    correo@demolink.org
                </div>
                <br />
                <div className='ctDireccion'>
                    3828 Fincham Road <br />
                    Los Ángeles, CA <br />
                    California 90017 <br />
                </div>
            </div>
            <div className='ctRight'>
                <div className='TitleForm'>
                    Ponerse en contacto                    
                </div>

                <form action="" className='Form'>
                    <div className='formRow'>
                        <div className='Label'>
                            Nombre
                        </div>
                        <input type="text" placeholder='Escribe tu nombre aquí'  required />
                    </div>
                    <div className='formRow'>
                        <div className='Label'>
                            Correo electrónico
                        </div>
                        <input type="email" placeholder='Déjame saber como contactarte'  required />
                    </div>
                    <div className='formRow'>
                        <div className='Label'>
                            Nombre
                        </div>
                        <input type="text" placeholder='Como te Llamas ?'  required />
                    </div>
                    <div className='formRow'>
                        <div className='Label'>
                            Nombre
                        </div>
                        <input type="text" placeholder='Como te Llamas ?'  required />
                    </div>

                    <div className='formRow'>
                        <BtNice text='Aceptar' handler={()=>0}  />
                    </div>
                </form>
            </div>
        </div>
        <Footer />

    </div>
}

export default Contactar