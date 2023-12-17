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


import contcImg from "./../../assets/background/contactanos.jpg" 
import u from "../../../src/assets/background/unnamed (2).jpg"


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
                        testimony: element.data_testimony.es || element.data_testimony.en || element.data_testimony.cat
                    })
                }
                setTestimonies(testimony)
            })  
            
        };
        api()
    }, [l]);

    return <div className="CoachingInternacional">
        <Navbar />
        <Franja text={textos[languageFlag].textcoachingtitleInternacional} />
        <div className="containerInternacional">
            <div className="containerInnformacion1">
                <div className="containerimg2">
                    <img src={u} alt="Elisabet" className='imgBienertar' />
                </div>
                <div className="contseccionn1">
                <br/>
                    {/* <h3>PREGUNTAS DESTACADAS:</h3> */}
                    <p className='parrafo'>{textos[languageFlag].textcoachinginterna1}</p>
                    <p className='parrafo'>{textos[languageFlag].textcoachinginterna2}</p>
                    <p className='parrafo'>{textos[languageFlag].textcoachinginterna3}</p>
                    <p className='parrafo'>{textos[languageFlag].textcoachinginterna4}</p>
                    <p className='parrafo'>{textos[languageFlag].textcoachinginterna5} 
                    <span className='TeAcompaño'>¿{textos[languageFlag].coachingAcompa}?</span></p>

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
                                // day={testimony.day}
                                // month={testimony.month}
                                // year={testimony.year}
                                testimony={testimony.testimony}
                            />
                        ))}
                    </div>
                </div>



            </div>
            <div className='ct3 containerInnformacion2'>
                <h3>¿{textos[languageFlag].coachInf}?</h3>
                <p className='parrafo'>{textos[languageFlag].chachText1}</p>
                <p className='parrafo'>{textos[languageFlag].chachText2}</p>
                <p className='parrafo'>{textos[languageFlag].chachText3}</p>
            </div>
            <div className="imgCoachingInternacional">
                
            </div>
            <div className='ct3 containerInnformacion2'>
                <p className='parrafo info'>{textos[languageFlag].textcoachinginterPideinfo}</p>

                <div className='ctForm'>
                    <FormDefault  hSubmit={subtmitOnFormDefault}/>
                    <img className='imgEquip' src={contcImg} alt="Equipo de trabajo" />
                </div>

            </div>
            </div>
            <Footer />
        </div>
}

        export default CoachingInternacional