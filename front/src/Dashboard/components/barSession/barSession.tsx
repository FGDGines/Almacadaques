import './barSession.css';
import React, { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../../../contexts/GlobalContext';
import {Loader} from '../LoaderOverlay/LoaderOverlay';


import b from "../../../../src/assets/Dashboard-almacadaques/inicio/back.svg"

interface BarSessionProps {
    tituloVista?: string;
    segundoTitulo?: string;
    img?: string;
    nombre?: string;
    direccion?: number;
}

export const BarSession: React.FC<BarSessionProps> = ({ tituloVista, segundoTitulo, img, nombre, direccion }) => {
    const { setLayoutID } = useContext(GlobalContext);

    const [showLoader, setShowLoader] = useState(false);

    const handleClick = () => {
        if (direccion !== undefined) {
            setShowLoader(true);

            // Simula un redireccionamiento
            setTimeout(() => {
                setLayoutID(direccion);
            }, 1000); // Simulando una espera de 3 segundos
        }
    };

    // Oculta el loader después de 3 segundos
    useEffect(() => {
        let timeout: NodeJS.Timeout;
        if (showLoader) {
            timeout = setTimeout(() => {
                setShowLoader(false);
            }, 1000);
        }

        return () => {
            clearTimeout(timeout);
        };
    }, [showLoader]);

    return (
        <div className='barSession'>
            {showLoader && (
                          <Loader></Loader>
            )}
            {direccion && (
                <div className="volverVista">
                    <i onClick={handleClick}><img src={b} alt="" /></i>
                </div>
            )}

            <div className="informacionBarSession">
                <div className="containerTitulos">
                    <h3>{tituloVista}</h3>
                    <h2>{segundoTitulo}</h2>
                </div>

                <div className="containerUser">
                    <div className="user">
                        <img src={img} alt="" />
                    </div>

                    <div className="nombrePerfil">
                        <h3>{nombre}</h3>
                        <a href="">ver perfil</a>
                    </div>
                </div>

            </div>


        </div>
    );
};
