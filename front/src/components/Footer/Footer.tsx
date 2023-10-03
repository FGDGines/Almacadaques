import './Footer.css'
import NewSletter from '../NewSletter/NewSletter';
const Footer = ()=>{
    return (
        <div className="Footer">
            <div className="ct1">
                <div className='col1'>

                    <div className="inf1">
                        <span> Avenida borbon 215 </span>
                        <span>Barcelona, 08031</span>
                    </div>
                    <div className="inf1">
                        <span className='tel'> Telf: +34 660 30 54 21</span>
                        <span>elisabetcollvinent@gmail.com</span>
                    </div>                    
                    

                    <span className='socialRed' >
                        <a href="#"> <img src="../../../src/assets/images/youtube.png" alt="Youtube" /> </a>
                        <a href="#"> <img src="../../../src/assets/images/instagram.png" alt="Instagram" /> </a>
                        <a href="#"> <img src="../../../src/assets/images/facebook.png" alt="Facebook" /> </a>
                        <a href="#"> <img src="../../../src/assets/images/twiter.png" alt="Twiter" /> </a>
                        <a href="#"> <img src="../../../src/assets/images/linkedin.png" alt="Linkedin" /> </a>
                    </span>

                    <span className='ref'>Almacadaqués © 2023. Reservados todos los derechos.</span>
                    
                </div>
                <div className='col2'>

                    <div className="inf1">
                        <span>Sobre mi</span>
                        <span>Coaching</span>
                        <span>Agenda</span>
                        <span>Colaborad@rs</span>
                        <span>Blog</span>
                    </div>

                    <div className="btCont">
                        <a href="" >Contáctame <img src="../../../src/assets/images/chat.png" alt="" /> </a>
                    </div>
                    
                    <div className="inf1">
                        <a href="#"> Terms & Conditions &nbsp;&nbsp; Privacy Policy</a>
                    </div>

                    
                    
                    
                </div>
                <div className='col3' >
                    <span >¡Mantente en contacto! Obtenga las últimas actualizaciones y ofertas.</span>
                    <NewSletter />
                </div>
            </div>

        </div>

    );
}


export default Footer