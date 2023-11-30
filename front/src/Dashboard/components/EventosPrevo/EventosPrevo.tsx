
import "./EventosPrevo.css";
// import { pastEvent } from "../../../data/calendar";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../contexts/GlobalContext";
import { tpCalendarEvent, tpDtmResponse } from "../../../types/typesComponents";
import { fetchDefault } from "../../../helpers/Server";
import { formDataToObject } from "../../../helpers/Forms";
import { getToken } from "../../../helpers/JWT";
import { title } from "process";

function EventosPrevo() {
    const [data, setData] = useState<tpCalendarEvent[]>([]);
    const { setIndexCalendarEvent, setLayoutID, setDataEvent } = useContext(GlobalContext)

    const handleDelete = (index: number) => {
        // elimina de la base de datos
        const da = new FormData()
        da.set("id", `${index}`)
        da.set("token", getToken())
        const dat = {body: JSON.stringify(formDataToObject(da))}
    
        fetchDefault("/calendar_event/delete", dat, (d: tpDtmResponse) => {
          if (d.status != 200) return
          const updatedData = data.filter((item) => item.id !== index);
          setData(updatedData);
        })
      };
    
     
     
      
    const edit = (index: number, data: tpCalendarEvent) => {
        setDataEvent(data)
        setIndexCalendarEvent(index)
        setLayoutID(30)
    }

    
    // carga los carrousel
    useEffect(() => {
        const api = async () => {
        const event: tpCalendarEvent[] = []
        fetchDefault("/calendar_event/read", {}, (d: tpDtmResponse) => {
            if(!d.bag) return 
            for (let index = 0; index < d.bag.length; index++) {
                const element: {id: number , titulo: string, inicio: string, final:string, descripcion: string, nombre: string, enlace: string, src: string } = d.bag[index];
                const r = "src/calendar_event/";
                const value = { 
                    id: element.id,
                    title: element.titulo,
                    colaborator_name: element.nombre,
                    colaborator_link: element.enlace,
                    description: element.descripcion,
                    start: element.inicio,
                    end: element.final,
                    src: r + element.src
                }
                event.push(value)
            }
            setData(event);
        }) 
        };
        api();
        // eslint-disable-next-line
    }, []);


    return (
        <div className="OrdenarItem">
            {data.map((event) => (
                <div className="eventosPrevios" key={event.id}>
                    <div className="imgEventos">
                        <div className="titleEventos">
                            <p className="titleDejarSoltar" >{event.title}</p>
                            <div className="editarContBienestar">
                                <div className="paddinIcono" onClick={() => edit(event.id, event)}>
                                    <img src="../../../../src/assets/Dashboard-almacadaques/iconBtn/editar.svg" alt="" className="BtnEditarEvento" />
                                </div>
                                <div className="paddinIcono" onClick={() => handleDelete(event.id)}>
                                    <img src="../../../../src/assets/Dashboard-almacadaques/iconBtn/Borrar.svg" alt="" className="BtnEditarEvento" />
                                </div>
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
