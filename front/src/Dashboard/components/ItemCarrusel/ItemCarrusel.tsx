import React from 'react';
import './ItemCarrusel.css';


export const ItemCarrusel = () => {
    return (
        <div className='ItemCarrusel'>

            <div className="barraCarrusel">

                <div className="tituloCarrusel"><p>Item de Carrousel</p></div>
                <div className="botonesCarrusel">

                    <i className='left'><img src="../../../../src/assets/Dashboard-almacadaques/ItemCarrusel/left.svg" alt="" /></i>


                    <i className='right'><img src="../../../../src/assets/Dashboard-almacadaques/ItemCarrusel/right.svg" alt="" /></i>
                </div>
            </div>

            <div className="itemsCarrusel">

                <div className="items">
                    <img src="" alt="" />
                    <div className="ctOverlay">
                        <p>Es importante la salud Mental</p>
                    </div>
                </div>
                <div className="items">
                    <img src="" alt="" />
                    <div className="ctOverlay">
                        <p>Es importante la salud Mental</p>
                    </div>
                </div>
                <div className="items">
                    <img src="" alt="" />
                    <div className="ctOverlay">
                        <p>Es importante la salud Mental</p>
                    </div>
                </div>
                <div className="items">
                    <img src="" alt="" />
                    <div className="ctOverlay">
                        <p>Es importante la salud Mental</p>
                    </div>
                </div>
                <div className="items">
                    <img src="" alt="" />
                    <div className="ctOverlay">
                        <p>Es importante la salud Mental</p>
                    </div>
                </div>

            </div>

        </div>
    );
};
