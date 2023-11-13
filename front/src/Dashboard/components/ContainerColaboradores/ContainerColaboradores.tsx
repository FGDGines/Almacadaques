
import './ContainerColaboradores.css';
import { ListaColaboradores } from '../../../data/colaboradores';

function ContainerColaboradores() {
  return (
    <>
      {ListaColaboradores.map((colaborador) => (
        <div key={colaborador.id} className="ContainerColaboradores">
          <div className="IconoEditarColaboradores">
            <img src="../../../../src/assets/Dashboard-almacadaques/iconBtn/editar.svg" alt="" className="IconEditarColaboradores" />
            <p className="TitleBtnEditarColaborador">Editar</p>
          </div>
          <img src={colaborador.imagen} alt={colaborador.nombre} className="imgUsuarioColaboradores" />

          <div className="NombreCargo">
            <p className="NombreColaboradorAdmin">{colaborador.nombre}</p>
            <p className="CargocolaboradorAdmin"><span className="TitleCargoColaborador">Cargo:</span> {colaborador.cargo}</p>
          </div>
          <p className="DescripcionColaboradores">Descripción:</p>
          <p className="ParrafoDescripcion">{colaborador.descripcion}</p>
          <a href={colaborador.contacto} className="EnlaceContactoColaborador">
            <p> <span className="TitleContactoColaborador">Contacto:</span> {colaborador.contacto}</p>
          </a>
        </div>
      ))}
    </>
  );
}

export { ContainerColaboradores };
