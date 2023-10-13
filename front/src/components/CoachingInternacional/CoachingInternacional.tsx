import './CoachingInternacional.css'
import Navbar from '../Navbar/Navbar';
import Franja from '../Franja/Franja';
import Footer from '../Footer/Footer';

const CoachingInternacional = () => {
    return <div className="CoachingInternacional">
        <Navbar />
        <Franja text="Coaching & mentoring internacional" />
        <div className="containerInternacional">
        <div className="containerInnformacion1">
                <div className="containerimg2">
                    <img src="../../../src/assets/background/unnamed (2).jpg" alt="Elisabet" className='imgBienertar'/>
                </div>
                <div className="contseccionn1">
                    <h3>PREGUNTAS DESTACADAS:</h3>
                    <p className='parrafo'>¿quieres incrementar tu facturación de ventas en internacional?</p>
                    <p className='parrafo'>¿quieres mejorar el rendimiento de tu equipo internacional? </p>
                    <p className='parrafo'>¿eres un export manager y te planteas un cambio profesional?</p>
                    <p className='parrafo'>¿eres un expat y estás experimentando un vaivén en tu adaptación?</p>                    
                    <p className='parrafo'>Ya seas export manager o CEO de la empresa el proceso de crecimiento internacional puede ser más que retador y conllevar algún desajuste. <br /> Un proceso de coaching y mentoring te ayudará a gestionar los cambios de manera amable para llegar a los objetivos que te plantees. <b>¿Te acompaño?</b> </p>
                </div>

            </div>

            <div className="containerInnformacion2">
                <h3>¿Como te puedo ayudar?</h3>
                <p className='parrafo'>Como coach te escucho sin juzgar, te hago preguntas y te doy feedback, y con ello aclararás y ordenarás tus ideas e incrementarás tu autoconocimiento y liderazgo para descubrir nuevos enfoques y lograr aquello que quieres conseguir.</p>
                <p className='parrafo'>Como mentora internacional te comparto mis propias experiencias y con mucha empatía y sensibilidad te acompaño a alcanzar los objetivos que quieres lograr, logrando así mayor bienestar.</p>
                <p className='parrafo'>Contácta sin compromiso para definir juntos como te puedo ayudar a conseguir los resultados que buscas.</p>
                <p className='parrafo'>Pide más información sin compromiso</p>
            </div>
        </div>
        <Footer />
    </div>
}

export default CoachingInternacional