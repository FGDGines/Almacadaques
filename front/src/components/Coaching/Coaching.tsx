import './Coaching.css'
import Navbar from '../Navbar/Navbar';
import Franja from '../Franja/Franja';
import Footer from '../Footer/Footer';
import TestimonyBar from "../TestimonyBar/TestimonyBar";
import { testimonies } from '../../data/testimonies';

const Coaching = () => {
    return <div className="Coaching">
        <Navbar />
        <Franja text="Coaching" />
        <br />
        <br />
        <div className='ctTitle1'>
            ¿Sientes que existe una brecha entre la vida que llevas y la que quieres llevar?<br />
            ¿Quieres convertirte en tu mejor versión?
        </div>
        <div className='ctMain'>
            <div className='timeLineContainer'>
                <p>
                    Definiremos un objetivo claro de cambio y con las sesiones personalizadas darás un empujón y romperás los bloqueos actuales que no te permiten avanzar.
                </p>
                <p>
                    Te escucharé sin juzgar, te haré preguntas y te daré feedback, y con ello aclararás y ordenarás tus ideas e incrementarás tu autoconocimiento y liderazgo para descubrir nuevos enfoques y lograr aquello que quieres conseguir.
                </p>
                <p>
                    Como coach acompaño a la persona a través de un viaje de exploración interior. Empezamos desde donde empieza su conflicto o malestar hasta la resolución del mismo logrando así tu bienestar.
                </p>
                <p>
                Cuando uno toma la determinación de liderar su vida, posiblemente después  de alguna crisis o desajuste, el acompañamiento de un coach lo puede ayudar a acelerar y lograr mejores resultados.
                </p>
            </div>
            <div className='ctPhoto'>
                <img className='Picture' src="./src/assets/background/unnamed (5).jpg" alt="" />
            </div>
        </div>
        <TestimonyBar
            quantityPerLayout={3}
            testimonies={testimonies}
        />

        <Footer />
    </div>
}

export default Coaching