
import './redesBienestar.css'
import { BtnMasAgregar } from "../BtnMasAgregar/BtnMasAgregar";

export const RedesBienestar = () => {
    return (


        <div className="redesBienestar">
            <div className="barraRedes">
                <h2>Redes</h2>
                <BtnMasAgregar></BtnMasAgregar>
            </div>

            <div className="containerBiernestarRedes">

            <div className="itemsRedes">
                        <img src="../../../../src/assets/Dashboard-almacadaques/inicio/facebook.svg" alt="" className="iconoRedes" />
                        <p className="fraseRedes"><a href="">sasha234@gmail.com</a></p>
                        <div className="iconosAcciones">
                            <div className="accionEditar">
                                <img src="../../../../src/assets/Dashboard-almacadaques/iconBtn/editar.svg" alt="" />
                                <p className="TextAcciones">Editar</p>
                            </div>
                        </div>
                    </div>
                    <div className="itemsRedes">
                        <img src="../../../../src/assets/Dashboard-almacadaques/inicio/instagram.svg" alt="" className="iconoRedes" />
                       <p className="fraseRedes"><a href="">sasha234@gmail.com</a></p>
                        <div className="iconosAcciones">
                            <div className="accionEditar">
                                <img src="../../../../src/assets/Dashboard-almacadaques/iconBtn/editar.svg" alt="" />
                                <p className="TextAcciones">Editar</p>
                            </div>
                        </div>
                    </div>
                    <div className="itemsRedes">
                        <img src="../../../../src/assets/Dashboard-almacadaques/inicio/whatsapp.svg" alt="" className="iconoRedes" />
                       <p className="fraseRedes"><a href="">sasha234@gmail.com</a></p>
                        <div className="iconosAcciones">
                            <div className="accionEditar">
                                <img src="../../../../src/assets/Dashboard-almacadaques/iconBtn/editar.svg" alt="" />
                                <p className="TextAcciones">Editar</p>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );

};