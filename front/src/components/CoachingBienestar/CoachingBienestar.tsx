import './CoachingBienestar.css'
import Navbar from '../Navbar/Navbar';
import Franja from '../Franja/Franja';
import Footer from '../Footer/Footer';

const CoachingBienestar = () => {
    return <div className="CoachingBienestar">
        <Navbar />
        <Franja text="Coaching para el Bienestar " />
        <div className="containerBienestar">
            <span style={{ color: "#75151E" }}> ❝ </span>
            ¿Sientes que existe una brecha entre la vida que llevas y la que quieres llevar? <br /> ¿Quieres convertirte en tu mejor versión?
            <span style={{ color: "#75151E" }}> ❞ </span>
            <p>Un proceso de coaching, respetuoso, amable y profesional, te ayudará a alcanzar tu objetivo. ¿Te acompaño?</p>
            <h3>¿Como te puedo ayudar?</h3>
            <p>Definiremos un objetivo claro de cambio y con las sesiones personalizadas darás un empujón y romperás los bloqueos actuales que no te permiten avanzar.
                Te escucharé sin juzgar, te haré preguntas y te daré feedback, y con ello aclararás y ordenarás tus ideas e incrementarás tu autoconocimiento y liderazgo para descubrir nuevos enfoques y lograr aquello que quieres conseguir.
                Como coach acompaño a la persona a través de un viaje de exploración interior. Empezamos desde donde empieza su conflicto o malestar hasta la resolución del mismo logrando así tu bienestar.</p>

            

            <span style={{ color: "#75151E" }}> ❝ </span>
            Cuando uno toma la determinación de liderar su vida, posiblemente después de alguna crisis o desajuste, el acompañamiento de un coach lo puede ayudar a acelerar y lograr mejores resultados
            <span style={{ color: "#75151E" }}> ❞ </span>

        </div>
        <Footer />
    </div>
}

export default CoachingBienestar