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



function ExperienciasDeMedida() {
    const { languageFlag } = useContext(GlobalContext)
    return (
        <div className="ExperienciasdeMedida">
            <Navbar />
            <Franja text='Experiencias de Medida' /> 
            <div className="ctMain">
                <div className="ct">
                    <div className="ctPhrase">
                        <span style={{ color: "#75151E" }}> ❝ </span>{textos[languageFlag].textoeresunaempersa}<span style={{ color: "#75151E" }}> ❞ </span>
                    </div>
                    <div className="ctStatitis">
                    <StatisticComponent titles={statisticInfo.medida} type="medida" />
                    </div>
                    <div className="ctphoto">
                        <img className='imgEquip' src="../../../src/assets/background/contactanos.jpg" alt="Equipo de trabajo" />
                        <div className='ctFor'>
                            <h3>{textos[languageFlag].textotrabajemosjuntos}</h3>
                            <FormDefault />
                        </div>

                    </div>


                </div>

            </div>
            <Footer />
        </div>
    )
}

export { ExperienciasDeMedida }