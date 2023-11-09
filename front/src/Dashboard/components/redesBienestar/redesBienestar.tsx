
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

            <div className="itemsBienestar">
                        <img src="../../../../src/assets/Dashboard-almacadaques/inicio/checks.svg" alt="" className="iconoBienestar" />
                        <p className="fraseBienestar">"La salud mental es tan esencial como la física; cuidemos ambas”</p>
                        <div className="iconosAcciones">
                            <div className="accionEditar">
                                <img src="../../../../src/assets/Dashboard-almacadaques/iconBtn/editar.svg" alt="" />
                                <p className="TextAcciones">Editar</p>
                            </div>
                        </div>
                    </div>
                    <div className="itemsBienestar">
                        <img src="../../../../src/assets/Dashboard-almacadaques/inicio/checks.svg" alt="" className="iconoBienestar" />
                        <p className="fraseBienestar">"La salud mental es tan esencial como la física; cuidemos ambas”</p>
                        <div className="iconosAcciones">
                            <div className="accionEditar">
                                <img src="../../../../src/assets/Dashboard-almacadaques/iconBtn/editar.svg" alt="" />
                                <p className="TextAcciones">Editar</p>
                            </div>
                        </div>
                    </div>
                    <div className="itemsBienestar">
                        <img src="../../../../src/assets/Dashboard-almacadaques/inicio/checks.svg" alt="" className="iconoBienestar" />
                        <p className="fraseBienestar">"La salud mental es tan esencial como la física; cuidemos ambas”</p>
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