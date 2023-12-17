import './ExperienciasDeMedida.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Franja from '../Franja/Franja';
import { textos } from '../../data/textos';
import { GlobalContext } from '../../contexts/GlobalContext';
import { useContext } from 'react';
import FormDefault from '../FormDefault/FormDefault';
import StatisticComponent from '../StatisticComponent/StatisticComponent';
import { statisticInfo } from '../../data/StatisticComponent';
import { formDataToObject } from '../../helpers/Forms';
// // import { tpDtmResponse } from '../../types/typesComponents';
import { fetchDefault } from '../../helpers/Server';


import contcImg from "./../../assets/background/contactanos.jpg" 

function ExperienciasDeMedida() {
    const { languageFlag } = useContext(GlobalContext)
    const subtmitOnFormDefault = (bag: FormData) => {
        bag.append("fragment", "Experiencias de medida")
        const data = {body: JSON.stringify(formDataToObject(bag))}
        fetchDefault("/mail/create", data)
        
        // console.log('Datos enviados:', data);
    }

    return (
        <div className="ExperienciasdeMedida">
            <Navbar />
            <Franja text={textos[languageFlag].expDeMedida} /> 
            <div className="ctMain">
                <div className="ct">
                    <div className="ctPhrase">
                        <span style={{ color: "#75151E" }}> ❝ </span>{textos[languageFlag].textoeresunaempersa}<span style={{ color: "#75151E" }}> ❞ </span>
                    </div>
                    <div className="ctStatitis">
                    <StatisticComponent titles={statisticInfo.medida} type="medida" />
                    </div>
                    <div className="ctphoto">
                        <img className='imgEquip' src={contcImg} alt="Equipo de trabajo" />
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