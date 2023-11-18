
import './espaciosBienestar.css'
import { tlEspacios } from '../../../data/tlEspacios';
import { useState } from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../../../contexts/GlobalContext';

export const EspaciosBienestar = () => {
    const { setLayoutID } = useContext(GlobalContext);
    const tlData = tlEspacios.ES;
    const [data, setData] = useState(tlData);

    //Mirar en la consola que si funciona

    const handleEliminar = (id: number) => {
        // console.log('Eliminar', id);
        const updatedData = data.filter(item => item.id !== id);
        setData(updatedData);
        // console.log(updatedData);
    };

    return (
        <div className="espaciosBienestar">
            <div className="barraBienestar">
                <h2>Espacios de Bienestar</h2>
                <div className='Buton'>
                    <a href="#" className='EnlaceBton' onClick={() => setLayoutID(27)}>
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

                    {tlData.map((item) => (
                        <div key={item.id} className="itemsBienestar">
                            <img src="../../../../src/assets/Dashboard-almacadaques/inicio/checks.svg" alt="" className="iconoBienestar" />
                            <p className="fraseBienestar">{item.text}</p>
                            <div className="iconosAcciones">
                                <div className="accionEditar" onClick={() => setLayoutID(27)}>
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