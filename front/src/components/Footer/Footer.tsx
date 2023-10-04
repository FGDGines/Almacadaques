import './Footer.css'
import NewSletter from '../NewSletter/NewSletter';
import NavButton from "../NavButton/NavButton";
import { FaRegComment } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="Footer">
            <div className="ct1">
                <div className="ct_inf1_in2">
                    
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
                            <NavButton
                                className="rounded hoverable-primary contact"
                                target={3}
                                text={
                                    <>
                                        <p>Contactar</p> <FaRegComment className="comment-icon" />
                                    </>
                                }
                            />

                        </div>



                    </div>

                </div>

                <div className='col3' >
                    <span className='span1'>¡Mantente en contacto! Obtenga las últimas actualizaciones y ofertas.</span>
                    <NewSletter />
                    <span className='span2'>By clicking the button you agree to the Privacy Policy and Terms and Conditions</span>
                </div>
            </div>
            <div className="ct2">
                <div className="col1">
                    <span className='ref'>Almacadaqués © 2023. Reservados todos los derechos.</span>
                </div>

                <div className="col2">
                    <a href="#"> Terms & Conditions &nbsp;&nbsp; Privacy Policy</a>
                </div>

            </div>

        </div>

    );
}


export default Footer