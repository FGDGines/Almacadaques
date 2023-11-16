import './Footer.css';
import { textos } from '../../data/textos';
import { FormEvent, useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import { fetchDefault } from '../../helpers/Server';
import { formDataToObject } from '../../helpers/Forms';


const Footer = () => {
    const { languageFlag } = useContext(GlobalContext)
    const { setLayoutID } = useContext(GlobalContext);

    const send = (event: FormEvent<HTMLFormElement>) => {
        event.stopPropagation()
        event.preventDefault()
        if(event.target instanceof HTMLFormElement){
            const bag  = new FormData(event.target)
            bag.set('nombre',"NewsLetterUser"); 
            bag.set('msg', 'Este usuario quere Unirse a tu newsletter')
            bag.set('fragment', 'Newsletter Footer')
            console.log(bag.getAll("email"))
            const res = fetchDefault('/mail/create', {body: JSON.stringify(formDataToObject(bag))})
    
            console.log('Datos enviados:', res);
            event.target.reset()
        }
    }
    return (
        <div className="Footer">
            <div className="container1">
                <div className="contTablet">
                    <div className="containerRight">
                        <h3 className='titleFooter'>{textos[languageFlag].textfooteraviso}</h3>
                        <div className="span1"></div>
                        <p className='subtitlefooter'>
                            <a href='#' className='enlaceFooter' onClick={() => setLayoutID(11)}>{textos[languageFlag].textfooterpolitica}</a> </p>
                        <div className="span2"></div>
                        <p className='subtitlefooter'><a href='#' className='enlaceFooter' onClick={() => setLayoutID(12)}>  {textos[languageFlag].textfootercoockies}</a>  </p>
                        <div className="span3"></div>
                        <p className='subtitlefooter'>
                            <a href='#' className='enlaceFooter' onClick={() => setLayoutID(13)}>{textos[languageFlag].textfooteraviso2}</a></p>
                    </div>
                    <div className="containerCenter">
                        <h3 className='titleFooter'>{textos[languageFlag].textfooterInfo}</h3>
                        <div className="span4"></div>
                        <p className='subtitlefooter'>
                            <img src="../../../src/assets/images/mensaje-de-telefono.png" alt="Telefono" className='whatsapp ' />
                            <a href='https://wa.me/+34660305421?text=Hola Almacadaques' target='_blank' className='enlaceFooter'>
                                +34 660 30 54 21</a> </p>
                        <div className="span5"></div>
                        <p className='subtitlefooter' >
                            <a href='#' target='_blank' className='enlaceFooter'> hola@almacadaques.com</a> </p>
                        <div className="span6"></div>
                        <p className='subtitlefooter'>
                            <a href='mailto:hola@almacadaques.com' target='_blank' className='enlaceFooter'> Almacadaques.com </a> </p>
                    </div>

                </div>

                <div className="containerLeft">
                    <h3 className='titleFooter'>Newlester </h3>
                    <div className="span7"></div>
                    <form onSubmit={send}>
                        <p className='correo'>{textos[languageFlag].textfooteremail}</p>
                        <div className="input-group">
                            <input required type="email" name="correo"  placeholder={`${textos[languageFlag].textfooteremail2}`} autoComplete="on" className="input1" />
                            {/* <label className="user-label">{textos[languageFlag].textfooteremail2}</label> */}
                        </div>
                        <button className='buttonFooter' type='submit'>{textos[languageFlag].textfooterregistro}</button>
                    </form>
                </div>

                
            </div>
            
            <div className="container2">
                <div className="infofooter">
                    <div className="redes">
                        <div className="socialRed">
                            <a href="https://www.facebook.com/almacadaques?locale=es_LA" target='_blank'><img className="img " src="../../../src/assets/images/facebook.png" alt="Facebook" /></a>
                            <a href="https://www.linkedin.com/in/elisabet-coll-vinent-b9765530" target='_blank'><img className="img " src="../../../src/assets/images/linkedin.png" alt="Linkedin" /></a>
                            <a href="mailto:hola@almacadaques.com" target='_blank'><img className="img email" src="../../../src/assets/images/email.png" alt="Email" /></a>
                            <a href="https://www.instagram.com/almacadaques" target='_blank'><img className="img " src="../../../src/assets/images/instagram.png" alt="Instagram" /></a>
                        </div>
                        <div className="whats">
                            <a href="https://wa.me/+34660305421?text=Hola Almacadaques" target='_blank'><img className="img1 " src="../../../src/assets/images/whatsapp.png" alt="whatsapp" /></a>
                        </div>
                        
                    </div>
                    
                    <h4 className='textFooteer'>© 2023 Almacadaques reservado todos los derechos Diseño: FGD Desarrollo Web</h4>
                    
                </div>
                

            </div>
        </div>

    );
}


export default Footer