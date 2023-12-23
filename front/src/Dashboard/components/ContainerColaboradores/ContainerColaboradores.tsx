
import './ContainerColaboradores.css';
import { Colaborador } from '../../../data/colaboradores';
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../../contexts/GlobalContext';
import { getToken } from '../../../helpers/JWT';
import { formDataToObject } from '../../../helpers/Forms';
import { fetchDefault, fetchForm } from '../../../helpers/Server';
import { tpDtmResponse } from '../../../types/typesComponents';


import delImg from "../../../../src/assets/Dashboard-almacadaques/iconBtn/Borrar.svg"
import edtImg from "../../../../src/assets/Dashboard-almacadaques/iconBtn/editar.svg"
import { mostrarAlerta } from '../../../helpers/MostrarAlerta';

function ContainerColaboradores() {

  const { languageFlag, } = useContext(GlobalContext)
  const l = languageFlag.toLowerCase()
  const [data, setData] = useState<Colaborador[]>([]);
  const { setIndexCollaborator, setLayoutID, setDataColaborador } = useContext(GlobalContext)

  const handleDeleteItemCarrusel = (index: number) => {
    // elimina de la base de datos
    const da = new FormData()
    da.set("id", `${index}`)
    da.set("token", getToken())
    const dat = {body: JSON.stringify(formDataToObject(da))}

    fetchDefault("/collaborator/delete", dat, (d: tpDtmResponse) => {
      mostrarAlerta(d)
      if (d.status != 200) return
      const updatedData = data.filter((item) => item.id !== index);
      setData(updatedData);
    })
  };

 
 
  
  const edit = (index: number, data: Colaborador) => {
    setDataColaborador(data)
    setIndexCollaborator(index)
    setLayoutID(31)
  }

  
  // carga los carrousel
  useEffect(() => {
      const api = async () => {
        const da = new FormData()
        da.set("lang", l)
        const colaborador: Colaborador[] = []
        fetchForm("/collaborator/read", da, (d: tpDtmResponse) => {
            if(!d.bag) return 
            for (let index = 0; index < d.bag.length; index++) {
              const element: { id: number, nombre_es: string, nombre_en: string, nombre_cat: string,
                 cargo_es: string, cargo_en: string,cargo_cat: string ,
                descripcion_es:string, descripcion_en:string, descripcion_cat:string , 
                imagen: string, contacto: string } = d.bag[index];
              const r = "src/collaborator/";
              console.log(element)
              const value = { 
                  id: element.id,
                  nombre: element.nombre_es || element.nombre_en || element.nombre_cat,
                  cargo: element.cargo_es || element.cargo_es || element.cargo_cat,
                  descripcion: element.descripcion_es || element.descripcion_en || element.descripcion_cat,
                  imagen: r + element.imagen,
                  contacto: element.contacto,
              }
              console.log(value)
              colaborador.push(value)
            }
            setData(colaborador);
        }) 
      };
      api();
      // eslint-disable-next-line
  }, []);


  return (
    <>
      {data.map((colaborador) => (
        <div key={colaborador.id} className="ContainerColaboradores">
          
          <div className="editarContBienestar">
            <div className="accionEliminar" onClick={() => handleDeleteItemCarrusel(colaborador.id)}>
              <img src={delImg} alt="" className="IconEditarColaboradores"/>
              <p className="TitleBtnEditarColaborador">Eliminar</p>
            </div>
            <div className="IconoEditarColaboradores" onClick={() => edit(colaborador.id, colaborador)}>
              <img src={edtImg} alt="" className="IconEditarColaboradores" />
              <p className="TitleBtnEditarColaborador">Editar</p>
            </div>
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
