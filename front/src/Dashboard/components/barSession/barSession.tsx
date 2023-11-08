import React from 'react';
import './barSession.css';

interface BarSessionProps {
    tituloVista?: string;
    segundoTitulo?: string;
    img?: string;
    nombre?: string
}

export const BarSession: React.FC<BarSessionProps> = ({ tituloVista, segundoTitulo, img, nombre }) => {
    return (
        <div className='barSession'>

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
    );
};
