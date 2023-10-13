import './CoachingInternacional.css'
import Navbar from '../Navbar/Navbar';
import Franja from '../Franja/Franja';
import Footer from '../Footer/Footer';

const CoachingInternacional = () => {
    return <div className="CoachingInternacional">
        <Navbar />
        <Franja text="Coaching & mentoring internacional" />
        <div className="containerInternacional">
            <h3>PREGUNTAS DESTACADAS:</h3>
            <p>¿quieres incrementar tu facturación de ventas en internacional?</p>
            <p>
¿quieres mejorar el rendimiento de tu equipo internacional?</p>

<p>¿eres un export manager y te planteas un cambio profesional?</p>
<p>¿eres un expat y estás experimentando un vaivén en tu adaptación?</p>
        </div>
        <Footer />
    </div>
}

export default CoachingInternacional