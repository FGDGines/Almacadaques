import './ExperienciasDeBienestar.css'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Franja from '../Franja/Franja';
import Carousel from '../Carousel/Carousel';
import { carouselExperiencias } from '../../data/carousel';
import StatisticComponent from '../StatisticComponent/StatisticComponent';

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
            <div className='ctDescription'>
                <span style={{ color: "#75151E" }}> ❝ </span>
                    Talleres y retiros con colaboradores expertos en distintas disciplinas.
                <span style={{ color: "#75151E" }}> ❞ </span>
            </div>
            <StatisticComponent />
            <div className='ctCarousel'>
                <Carousel items={carouselExperiencias} />
            </div>
        </div>
        <Footer />
    </div>
}

export default ExperienciasDeBienestar