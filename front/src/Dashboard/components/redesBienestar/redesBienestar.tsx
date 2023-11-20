
import './redesBienestar.css';
import { BtnMasAgregar } from '../BtnMasAgregar/BtnMasAgregar';
// import { redes } from '../../../data/redes'; // Asegúrate de ajustar la ruta según la ubicación real del archivo
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../../contexts/GlobalContext';
import { formDataToObject } from '../../../helpers/Forms';
import { fetchDefault } from '../../../helpers/Server';
import { tpDtmResponse } from '../../../types/typesComponents';
import { RedesProps } from "../../../types/typesComponents";

export const RedesBienestar = () => {
  const { setLayoutID } = useContext(GlobalContext);
  const { setIndexRed } = useContext(GlobalContext);
  const [ redes, setRedes ] = useState<RedesProps>([])

  const edit = (e: number) => {
    setIndexRed(e)
    setLayoutID(24)
  }

  // carga los carrousel
  useEffect(() => {
    const api = async () => {
      const da = new FormData() 
      const dat = {body: JSON.stringify(formDataToObject(da))}
      const reds: RedesProps = []
      fetchDefault("/red/read", dat, (d: tpDtmResponse) => {
          if(!d.bag) return 
          for (let index = 0; index < d.bag.length; index++) {
              const element: { id: number, archivo: string  , url: string, cuenta:string } = d.bag[index];
              const r = "src/redes/";
              const value = {
                index: element.id,
                archivo: element.archivo, 
                url: r + element.url,
                cuenta: element.cuenta
              }
              reds.push(value)
          }
          setRedes(reds);
      }) 
    };
    api();
    // eslint-disable-next-line
}, []);
  return (
    <div className="redesBienestar">
      <div className="barraRedes">
        <h2>Redes</h2>
        <div onClick={() => setIndexRed(-1)}>
          <BtnMasAgregar direccion={24}></BtnMasAgregar>
        </div>
        
      </div>

      <div className="containerBiernestarRedes">
        {redes.map((red, index) => (
          <div className="itemsRedes" key={red.index}>
            <img src={red.archivo} alt="" className="iconoRedes" />
            <p className="fraseRedes">
              <a href={red.url} target="_blank" rel="noopener noreferrer">
                {red.cuenta}
              </a>
            </p>
            <div className="iconosAcciones">
              <div className="accionEditar" onClick={() => edit(red.index)}>
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
