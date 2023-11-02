import './CoachingInternacional.css'
import Navbar from '../Navbar/Navbar';
import Franja from '../Franja/Franja';
import Footer from '../Footer/Footer';
import FormDefault from '../FormDefault/FormDefault';
import { textos } from '../../data/textos';
import { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import { testimonies } from '../../data/testimonies';
import Testimony from '../Testimony/Testimony';

const CoachingInternacional = () => {
    const { languageFlag } = useContext(GlobalContext)
    return <div className="CoachingInternacional">
        <Navbar />
        <Franja text={textos[languageFlag].textcoachingtitleInternacional} />
        <div className="containerInternacional">
            <div className="containerInnformacion1">
                <div className="containerimg2">
                    <img src="../../../src/assets/background/unnamed (2).jpg" alt="Elisabet" className='imgBienertar' />
                </div>
                <div className="contseccionn1">
                    {/* <h3>PREGUNTAS DESTACADAS:</h3> */}
                    <p className='parrafo'>{textos[languageFlag].textcoachinginterna1}</p>
                    <p className='parrafo'>{textos[languageFlag].textcoachinginterna2}</p>
                    <p className='parrafo'>{textos[languageFlag].textcoachinginterna3}</p>
                    <p className='parrafo'>{textos[languageFlag].textcoachinginterna4}</p>
                    <p className='parrafo'>{textos[languageFlag].textcoachinginterna5} <span className='TeAcompaño'>¿Te acompaño?</span></p>

                </div>

            </div>


            <div className="containerInnformacion2">


                <div className="testimonio">
                    <h3 className='titletestimonio'>{textos[languageFlag].textcoachinginternaTestimonio}</h3>
                    <div className="infotestimonios">
                        {testimonies.map((testimony) => (
                            <Testimony
                                key={testimony.id}
                                id={testimony.id}
                                witness={testimony.witness}
                                // image={testimony.image}
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
            <h3>¿Como te puedo ayudar?</h3>
                <p className='parrafo'>Como coach te escucho sin juzgar, te hago preguntas y te doy feedback, y con ello aclararás y ordenarás tus ideas e incrementarás tu autoconocimiento y liderazgo para descubrir nuevos enfoques y lograr aquello que quieres conseguir.</p>
                <p className='parrafo'>Como mentora internacional te comparto mis propias experiencias y con mucha empatía y sensibilidad te acompaño a alcanzar los objetivos que quieres lograr, logrando así mayor bienestar.</p>
                <p className='parrafo'>Contácta  para definir juntos como te puedo ayudar a conseguir los resultados que buscas.</p>
                <img src="../../../src/assets/background/panoramica.jpg" alt="Fondo" className='imgCoachingInternacional' />
                <p className='parrafo info'>{textos[languageFlag].textcoachinginterPideinfo}</p>
                
                <div className='ctForm'>
                    <FormDefault />
                    <img className='imgEquip' src=".../../../src/assets/background/contactanos.jpg" alt="Equipo de trabajo" />
                </div>
            </div>
        </div>
        <Footer />
    </div>
}

export default CoachingInternacional