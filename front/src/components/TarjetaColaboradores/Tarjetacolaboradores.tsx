import './Tarjetacolaboradores.css';
import { Colaborador } from '../../data/colaboradores';
import { textos } from '../../data/textos';
import { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';


import './Tarjetacolaboradores.css'

interface TarjetaColaboradoresProps {
    colaboradores: Colaborador[];
}

function Tarjetacolaboradores({ colaboradores }: TarjetaColaboradoresProps) {
  const { languageFlag } = useContext(GlobalContext)
  return (
    <>
      {colaboradores.map((colaborador, index) => (
        <div className="card" key={index}>
          <div className="head">
            <div className="circle"></div>
            <div className="img">
              <img src={colaborador.imagen} alt={`Foto de ${colaborador.nombre}`} />
            </div>
          </div>
          <div className="description">
            <h3>{colaborador.nombre}</h3>
            <h4>{colaborador.cargo}</h4>
            <p className="text-center">{colaborador.descripcion}</p>
          </div>
          <div className="contact">
            <a href={colaborador.contacto} target='_blank'>
              {textos[languageFlag].textcolaborcontact}
              
              </a>
          </div>
        </div>
      ))}
    </>
  );
}

export { Tarjetacolaboradores };
