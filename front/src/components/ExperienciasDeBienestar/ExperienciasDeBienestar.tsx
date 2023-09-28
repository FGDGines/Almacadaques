import './ExperienciasDeBienestar.css'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Franja from '../Franja/Franja';
import StatisticComponent from '../StatisticComponent/StatisticComponent';
import CardM1 from '../CardM1/CardM1';
import { cardsData } from '../../data/cardsExp';

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
            <div className='ctCards'>
                {cardsData.map((item, index) => {
                    const { title, body } = item
                    return <CardM1 key={index} title={title} body={body} />
                })}
            </div>

            <div className='ctDescription'>
                <span style={{ color: "#75151E" }}> ❝ </span>
                Talleres y retiros con colaboradores expertos en distintas disciplinas.
                <span style={{ color: "#75151E" }}> ❞ </span>
            </div>
            <StatisticComponent />
        </div>
        <Footer />
    </div>
}

export default ExperienciasDeBienestar