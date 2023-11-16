import './ExperienciasDeBienestar.css'
import { useContext } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Franja from '../Franja/Franja';
import StatisticComponent from '../StatisticComponent/StatisticComponent';
import CardM1 from '../CardM1/CardM1';
import { cardsData } from '../../data/cardsExp';
import Agenda from '../Agenda/Agenda';
import FormAgenda from '../FormAgenda/FormAgenda';
import { tpCalendarDates } from '../../types/typesComponents';
import { eventos } from '../../data/calendar';
import DialogMUI1 from '../DialogMUI1/DialogMUI1';
import { statisticInfo } from '../../data/StatisticComponent';

import { GlobalContext } from '../../contexts/GlobalContext';
import { useState } from 'react';



const ExperienciasDeBienestar = () => {
    const { setLayoutID } = useContext(GlobalContext);
    const [evento, setEvento] = useState<tpCalendarDates>({ id: 0, start: '', end: '', title: '' })

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const SeleccionarEvento = (evento: tpCalendarDates) => {
        setEvento(evento)
        handleClickOpen()
    }


    return <div className='ExperienciasDeBienestar'>
        <Navbar />
        <Franja text='Experiencias de Bienestar' />
        <div className='ctMain'>
            <div className='ctTitle'>
                <span style={{ color: "#75151E" }}> ❝ </span>
                ¡Invierte en tu bienestar!
                <span style={{ color: "#75151E" }}> ❞ </span>
            </div>
            <div className='ctCards'>
                {cardsData.map((item, index) => {
                    const { title, body } = item
                    return <CardM1 key={index} title={title} body={body} />
                })}
            </div>
            {/* <AboutMeAbstract /> */}
            <div className='ctDescription'>
                <span style={{ color: "#75151E" }}> ❝ </span>
                Talleres y retiros con colaboradores expertos en distintas disciplinas.
                <span style={{ color: "#75151E" }}> ❞ </span>
            </div>

            <StatisticComponent titles={statisticInfo.bienestar} type="bienestar" />
   

            <div className='ctAgenda'>
 

                <div className="ctContentAgenda">
                    <div className="ctCalendario">
                        <Agenda hSelect={SeleccionarEvento} />
                    </div>

                    <div className="ctFormulario">
                        <FormAgenda actividades={eventos} />
                    </div>
                </div>

            </div>
            <div className="ctContentBoton">
                     
                     <div className="botonRetiros diagonal" onClick={() => setLayoutID(14)}>
                        Retiros Anteriores 
                     </div>
                 </div>

            <DialogMUI1 open={open} handlerClose={handleClose} handleClickOpen={handleClickOpen} evento={evento} />
           


        </div>
        <Footer />
    </div>
}

export default ExperienciasDeBienestar