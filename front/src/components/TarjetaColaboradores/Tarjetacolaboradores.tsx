import './Tarjetacolaboradores.css';
import { Colaborador } from '../../data/colaboradores';

interface TarjetaColaboradoresProps {
    colaboradores: Colaborador[];
}

function Tarjetacolaboradores({ colaboradores }: TarjetaColaboradoresProps) {
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
            <p>{colaborador.descripcion}</p>
          </div>
          <div className="contact">
            <a href={colaborador.contacto} target='_blank'>Contactame</a>
          </div>
        </div>
      ))}
    </>
  );
}

export { Tarjetacolaboradores };
