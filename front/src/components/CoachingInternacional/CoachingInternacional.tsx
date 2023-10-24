import './CoachingInternacional.css'
import Navbar from '../Navbar/Navbar';
import Franja from '../Franja/Franja';
import Footer from '../Footer/Footer';
import FormDefault from '../FormDefault/FormDefault';
import { testimonies } from '../../data/testimonies';
import Testimony from '../Testimony/Testimony';

const CoachingInternacional = () => {
    return <div className="CoachingInternacional">
        <Navbar />
        <Franja text="Coaching & mentoring internacional" />
        <div className="containerInternacional">
            <div className="containerInnformacion1">
                <div className="containerimg2">
                    <img src="../../../src/assets/background/unnamed (2).jpg" alt="Elisabet" className='imgBienertar' />
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
<br />
<br />
                <span style={{ color: "#75151E" }} > ❝ </span>
                <h3 className='parrafoSpan'>Cuando uno toma la determinación de liderar su vida, posiblemente después de alguna crisis o desajuste, el acompañamiento de un coach lo puede ayudar a acelerar y lograr mejores resultados</h3>
                <span style={{ color: "#75151E" }}> ❞ </span>. Herminia Gomá.

                <div className="containerImg1">
                    <img src="../../../src/assets/images/img_coaching_internacional.jpg" className='imgInternacional' alt="Imagen de coaching" />
                </div>

                <div className="testimonio">
                    <h3 className='titletestimonio'>Testimonios</h3>
                    <div className="infotestimonios">
                        {testimonies.map((testimony) => (
                            <Testimony
                                key={testimony.id}
                                id={testimony.id}
                                witness={testimony.witness}
                                image={testimony.image}
                                day={testimony.day}
                                month={testimony.month}
                                year={testimony.year}
                                testimony={testimony.testimony}
                            />
                        ))}
                    </div>
                </div>



            </div>
            <div className='ct3 containerInnformacion2'>
                <p className='parrafo info'>Pide más información sin compromiso</p>
                <div className='ctForm'>
                    <FormDefault  />
                    <img className='imgEquip'  src=".../../../src/assets/background/contactanos.jpg" alt="Equipo de trabajo" />
                </div>
            </div>
        </div>
        <Footer />
    </div>
}

export default CoachingInternacional