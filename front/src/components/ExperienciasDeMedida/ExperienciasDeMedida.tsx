import './ExperienciasDeMedida.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Franja from '../Franja/Franja';
import FormDefault from '../FormDefault/FormDefault';
import StatisticComponent from '../StatisticComponent/StatisticComponent';
import { statisticInfo } from '../../data/StatisticComponent';
import { formDataToObject } from '../../helpers/Forms';
import { tpDtmResponse } from '../../types/typesComponents';
import { fetchDefault } from '../../helpers/Server';



function ExperienciasDeMedida() {
    const subtmitOnFormDefault = (bag: FormData) => {
        bag.append("fragment", "Experiencias de medida")
        const data = {body: JSON.stringify(formDataToObject(bag))}
        fetchDefault("/mail/create", data)
        
        // console.log('Datos enviados:', data);
    }

    return (
        <div className="ExperienciasdeMedida">
            <Navbar />
            <Franja text='Experiencias de Medida' /> 
            <div className="ctMain">
                <div className="ct">
                    <div className="ctPhrase">
                        <span style={{ color: "#75151E" }}> ❝ </span>
                        ¿Eres una empresa consciente de que invierte en el bienestar de sus trabajadores? Contáctanos para organizarte la experiencia a medida que mejor se adapte a tu perfil!
                        <span style={{ color: "#75151E" }}> ❞ </span>
                    </div>
                    <div className="ctStatitis">
                    <StatisticComponent titles={statisticInfo.medida} type="medida" />
                    </div>
                    <div className="ctphoto">
                        <img className='imgEquip' src="../../../src/assets/background/contactanos.jpg" alt="Equipo de trabajo" />
                        <div className='ctFor'>
                            <h3>Trabajemos Juntos</h3>
                            <FormDefault hSubmit={subtmitOnFormDefault}/>
                        </div>

                    </div>


                </div>

            </div>
            <Footer />
        </div>
    )
}

export { ExperienciasDeMedida }