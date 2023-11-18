
import './espaciosBienestar.css'
import { tlEspacios } from '../../../data/tlEspacios';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../../../contexts/GlobalContext';
import { formDataToObject } from '../../../helpers/Forms';
import { tpDtmResponse, tpTimeLineData } from '../../../types/typesComponents';
import { fetchDefault } from '../../../helpers/Server';
import { getToken } from '../../../helpers/JWT';

export const EspaciosBienestar = () => {
    const { setLayoutID, setIndexEspacio } = useContext(GlobalContext);
    const { languageFlag } = useContext(GlobalContext)
    const lg = languageFlag.toLowerCase() 
    const tlData = tlEspacios.ES;
    const [data, setData] = useState(tlData);

    //Mirar en la consola que si funciona

    const handleEliminar = (id: number) => {
        const da = new FormData()
        da.set("id", `${id}`)
        da.set("token", getToken())
        const dat = {body: JSON.stringify(formDataToObject(da))}

        fetchDefault("/espacio/delete", dat, (d: tpDtmResponse) => {
            if (d.status != 200) return
            const updatedData = data.filter((item) => item.id!== id);
            setData(updatedData);
        }, (d: tpDtmResponse) => {
            console.log(d)
        }) 
    };


    // para editar el elemento
    const edit = (index: number) => {
        setIndexEspacio(index)
        setLayoutID(27)
    }

    // agregar elemento
    const add = () => {
        setIndexEspacio(-1)
        setLayoutID(27)
    }
    
      
    // carga los carrousel
    useEffect(() => {
        const api = async () => {
        const da = new FormData()
        da.set("lang", lg)
        const dat = {body: JSON.stringify(formDataToObject(da))}
        console.log(1)
        const esp: tpTimeLineData[] = []
        fetchDefault("/espacio/read", dat, (d: tpDtmResponse) => {
            if(!d.bag) return 
            for (let index = 0; index < d.bag.length; index++) {
                const element: {id: number ,es: string, en: string , cat: string } = d.bag[index];
                const value = { 
                    id: element.id, 
                    text: element.es || element.en || element.cat
                }
                console.log(value)
                esp.push(value)
            }
            setData(esp);
        }) 
        };
        api();
        // eslint-disable-next-line
    }, []);

    return (
        <div className="espaciosBienestar">
            <div className="barraBienestar">
                <h2>Espacios de Bienestar</h2>
                <div className='Buton'>
                    <a href="#" className='EnlaceBton' onClick={add}>
                        <img src="../../../../src/assets/Dashboard-almacadaques/iconBtn/mingcute_add-line.svg" alt="" className='Img+' />
                        Agregar
                    </a>
                </div>
            </div>
            <div className="containerBienestarItems">

                <div className="bienestarTitulos">
                    <p>Frase</p>
                    <p>Acciones</p>
                </div>

                <div className="ctBienestarItems">

                    {data.map((item) => (
                        <div key={item.id} className="itemsBienestar">
                            <img src="../../../../src/assets/Dashboard-almacadaques/inicio/checks.svg" alt="" className="iconoBienestar" />
                            <p className="fraseBienestar">{item.text}</p>
                            <div className="iconosAcciones">
                                <div className="accionEditar" onClick={() => edit(item.id)}>
                                    <img src="../../../../src/assets/Dashboard-almacadaques/iconBtn/editar.svg" alt="" />
                                    <p className="TextAcciones">Editar</p>
                                </div>
                                <div className="accionEliminar" onClick={() => handleEliminar(item.id)}>
                                    <img src="../../../../src/assets/Dashboard-almacadaques/iconBtn/Borrar.svg" alt="" />
                                    <p className="TextAcciones">Eliminar</p>
                                </div>
                            </div>
                        </div>
                    ))}


                </div>



            </div>

        </div>
    );

};