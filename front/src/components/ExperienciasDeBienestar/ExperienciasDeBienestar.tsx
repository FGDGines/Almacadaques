import './ExperienciasDeBienestar.css'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Franja from '../Franja/Franja';

const ExperienciasDeBienestar = () => {
    return <div className='ExperienciasDeBienestar'>
        <Navbar />
        <Franja text='Experiencias de Bienestar' />
        <div className='ctMain'>
            <div className='ctTitle'>
                <span style={{ color: "#75151E" }}> ❝ </span>
                        ¡Invierte en tu bienestar!
                 <span style={{ color: "#75151E" }}> ❞ </span>
            </div>
            <div className='ctCarousel'>

            </div>
        </div>
        <Footer />
    </div>
}

export default ExperienciasDeBienestar