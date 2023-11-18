
import "./EventosPrevo.css";
import { pastEvent } from "../../../data/calendar";

function EventosPrevo() {
    return (
        <div className="OrdenarItem">
            {pastEvent.map((event) => (
                <div className="eventosPrevios" key={event.id}>
                    <div className="imgEventos">
                        <div className="titleEventos">
                            <p className="titleDejarSoltar" >{event.title}</p>
                            <div className="paddinIcono">
                                <img src="../../../../src/assets/Dashboard-almacadaques/iconBtn/editar.svg" alt="" className="BtnEditarEvento" />
                            </div>
                        </div>
                        <img src={event.src} alt="" className="ImgFondoEventos" />
                    </div>
                    <div className="infoeventos">
                        <div className="informacionEvenetosMain">
                            <div className="fechaInicio">
                                <p className="titleMainEvento">Inicio:</p>
                                <p className="DescripcionMainEvento">{event.start.toString()}</p>
                            </div>
                            <div className="fechaInicio">
                                <p className="titleMainEvento">Fin:</p>
                                <p className="DescripcionMainEvento"> {event.end.toString()}</p>
                            </div>
                            <div className="fechaInicioo">
                                <p className="titleMainEvento">Descripción:</p>
                                <p className="DescripcionMainEvento">{event.description}</p>
                            </div>
                            <div className="fechaInicio">
                                <p className="titleMainEvento">Enlace:</p>
                                <p className="DescripcionMainEvento">{event.colaborator_link}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export { EventosPrevo };
