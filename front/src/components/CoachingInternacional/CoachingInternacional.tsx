import './CoachingInternacional.css'
import Navbar from '../Navbar/Navbar';
import Franja from '../Franja/Franja';
import Footer from '../Footer/Footer';
import FormDefault from '../FormDefault/FormDefault';
import { textos } from '../../data/textos';
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import Testimony from '../Testimony/Testimony';
import { tpDtmResponse } from '../../types/typesComponents';
import { formDataToObject } from '../../helpers/Forms';
import { fetchDefault } from '../../helpers/Server';
import { tpTestimony} from "../../types/typesComponents"
const CoachingInternacional = () => {
    const { languageFlag } = useContext(GlobalContext)


    const subtmitOnFormDefault = (bag: FormData) => {
        bag.append("fragment", "Coaching Internacional")
        const data = {body: JSON.stringify(formDataToObject(bag))}
        fetchDefault("/mail/create", data)
        
        // console.log('Datos enviados:', data);
    }


    const [testimonies, setTestimonies] = useState<tpTestimony[]>([]);
    const l = languageFlag.toLowerCase() 

    useEffect(() => {
        const api = async () => {
            const da = new FormData()
            da.set("lang", l)
        
            const data = {body: JSON.stringify(formDataToObject(da))}
            const testimony: tpTestimony[] = []
            fetchDefault("/testimony/read", data, (d: tpDtmResponse) => {
                if (!d.bag) {
                    return
                }
                for (let index = 0; index < d.bag.length; index++) {
                    const element: { id: number, witness: string, createdAt: string, data_testimony: { es: string, en: string, cat: string}}= d.bag[index];
                    testimony.push({
                        id: element.id,
                        witness: element.witness,
                        day: 0,
                        month: 0,
                        year: 0,
                        testimony: element.data_testimony.es || element.data_testimony.en || element.data_testimony.cat
                    })
                }
                setTestimonies(testimony)
            })  
            
        };
        api()
    }, []);

    return <div className="CoachingInternacional">
        <Navbar />
        <Franja text={textos[languageFlag].textcoachingtitleInternacional} />
        <div className="containerInternacional">
            <div className="containerInnformacion1">
                <div className="containerimg2">
                    <img src="../../../src/assets/background/unnamed (2).jpg" alt="Elisabet" className='imgBienertar' />
                </div>
                <div className="contseccionn1">
                <br/>
                    {/* <h3>PREGUNTAS DESTACADAS:</h3> */}
                    <p className='parrafo'>{textos[languageFlag].textcoachinginterna1}</p>
                    <p className='parrafo'>{textos[languageFlag].textcoachinginterna2}</p>
                    <p className='parrafo'>{textos[languageFlag].textcoachinginterna3}</p>
                    <p className='parrafo'>{textos[languageFlag].textcoachinginterna4}</p>
                    <p className='parrafo'>{textos[languageFlag].textcoachinginterna5} 
                    <span className='TeAcompaño'>¿Te acompaño?</span></p>

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
            </div>
            <div className="imgCoachingInternacional">
                
            </div>
            <div className='ct3 containerInnformacion2'>
                <p className='parrafo info'>{textos[languageFlag].textcoachinginterPideinfo}</p>

                <div className='ctForm'>
                    <FormDefault  hSubmit={subtmitOnFormDefault}/>
                    <img className='imgEquip' src=".../../../src/assets/background/contactanos.jpg" alt="Equipo de trabajo" />
                </div>

            </div>
            </div>
            <Footer />
        </div>
}

        export default CoachingInternacional