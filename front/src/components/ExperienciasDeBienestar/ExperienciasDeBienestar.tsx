import './ExperienciasDeBienestar.css'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Franja from '../Franja/Franja';
import StatisticComponent from '../StatisticComponent/StatisticComponent';
import CardM1 from '../CardM1/CardM1';
import { cardsData } from '../../data/cardsExp';
import Agenda from '../Agenda/Agenda';
import FormAgenda from '../FormAgenda/FormAgenda';
import { tpCalendarDates } from '../../types/typesComponents';
import { eventos, pastEvent } from '../../data/calendar';
import DialogMUI1 from '../DialogMUI1/DialogMUI1';
import { statisticInfo } from '../../data/StatisticComponent';

import { useState } from 'react';
import RetiroAnterior from '../RetirosAnteriores/RetiroAnterior';

const ExperienciasDeBienestar = () => {
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
    const bienestarTitles = statisticInfo.bienestar;

    
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
                    const { title, body } = item;
                    
                    return <CardM1 key={index} title={title} body={body} />
                    
                })}
            </div>
            {/* <AboutMeAbstract /> */}
            <div className='ctDescription'>
                <span style={{ color: "#75151E" }}> ❝ </span>
                Talleres y retiros con colaboradores expertos en distintas disciplinas.
                <span style={{ color: "#75151E" }}> ❞ </span>
            </div>

            <StatisticComponent titles={bienestarTitles} />

            <div className='ctAgenda'>
                <div className="ctAgendaCalendar">
                    <Agenda hSelect={SeleccionarEvento} />
                </div>
                <div className="ctFormRetiros">
                    <FormAgenda actividades={eventos} />
                    <div className="retirosPasados">
                        <div className='RTitle'>Retiros anteriores</div>
                        <div className='ctPreviews'>
                            {pastEvent.map((item) => {
                                const { id, end, start, title, colaborator_link, colaborator_name, description, src } = item
                                return <RetiroAnterior key={id} end={end} start={start} id={id} title={title} colaborator_link={colaborator_link} colaborator_name={colaborator_name} description={description} hselect={SeleccionarEvento} src={src} />
                            })}
                        </div>
                    </div>
                </div>

            </div>

            <DialogMUI1 open={open} handlerClose={handleClose} handleClickOpen={handleClickOpen} evento={evento} />

        </div>
        <Footer />
    </div>
}

export default ExperienciasDeBienestar