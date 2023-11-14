
import './redesBienestar.css';
import { BtnMasAgregar } from '../BtnMasAgregar/BtnMasAgregar';
import { redes } from '../../../data/redes'; // Asegúrate de ajustar la ruta según la ubicación real del archivo
import { useContext } from 'react';
import { GlobalContext } from '../../../contexts/GlobalContext';

export const RedesBienestar = () => {
  const { setLayoutID } = useContext(GlobalContext);


  return (
    <div className="redesBienestar">
      <div className="barraRedes">
        <h2>Redes</h2>
        <BtnMasAgregar direccion={24}></BtnMasAgregar>
      </div>

      <div className="containerBiernestarRedes">
        {redes.map((red, index) => (
          <div className="itemsRedes" key={index}>
            <img src={red.archivo} alt="" className="iconoRedes" />
            <p className="fraseRedes">
              <a href={red.url} target="_blank" rel="noopener noreferrer">
                {red.cuenta}
              </a>
            </p>
            <div className="iconosAcciones">
              <div className="accionEditar" onClick={() => setLayoutID(24)}>
                <img
                  src="../../../../src/assets/Dashboard-almacadaques/iconBtn/editar.svg"
                  alt=""
                />
                <p className="TextAcciones">Editar</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
