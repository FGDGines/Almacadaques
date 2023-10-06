import './ExperienciasDeMedida.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Franja from '../Franja/Franja';


function ExperienciasDeMedida() {
    return (
        <div className="ExperienciasdeMedida">
            <Navbar />
            <Franja text='Experiencias de Medida' />
            <div className="ctMain">
                <div className="ct">
                    <div className="ctPhrase">
                        <span style={{ color: "#75151E" }}> ❝ </span>
                        ¿Eres una empresa consciente de que invierte en el bienestar de sus trabajadores? Contáctanos para organizarte la experiencia a medida que mejor se adapte a tu perfil!
                        <span style={{ color: "#75151E" }}> ❞ </span>
                    </div>
                    <div className="ctphoto">
                        <img src="../../../src/assets/images/no-foto.png" alt="Equipo de trabajo" />
                    </div>
                    
                    
                </div>

            </div>
            <Footer />
        </div>
    )
}

export { ExperienciasDeMedida }