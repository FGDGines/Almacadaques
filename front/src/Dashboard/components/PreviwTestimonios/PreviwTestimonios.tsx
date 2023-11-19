import { useContext, useEffect, useState } from 'react';
import "./PreviwTestimonios.css";
import { testimonies } from "../../../data/testimonies";
import { getToken } from '../../../helpers/JWT';
import { formDataToObject } from '../../../helpers/Forms';
import { fetchDefault } from '../../../helpers/Server';
import { tpDtmResponse, tpTestimony } from '../../../types/typesComponents';
import { GlobalContext } from '../../../contexts/GlobalContext';

function PreviwTestimonios() {
  const [data, setData] = useState<tpTestimony[]>([]);
  const { setLayoutID, setIndexTestimony } = useContext(GlobalContext);
  const { languageFlag } = useContext(GlobalContext)
  const lg = languageFlag.toLowerCase() 

  const handleEliminar = (id: number) => {
    const da = new FormData()
    da.set("id", `${id}`)
    da.set("token", getToken())
    const dat = {body: JSON.stringify(formDataToObject(da))}

    fetchDefault("/testimony/delete", dat, (d: tpDtmResponse) => {
        if (d.status != 200) return
        const updatedData = data.filter((item) => item.id!== id);
        setData(updatedData);
    }, (d: tpDtmResponse) => {
        console.log(d)
    }) 
  };


  // para editar el elemento
  const edit = (index: number) => {
    setIndexTestimony(index)
    setLayoutID(27)
  }

  // agregar elemento
  const add = () => {
      setIndexTestimony(-1)
      setLayoutID(27)
  }

    
  // carga los carrousel
  useEffect(() => {
      const api = async () => {
      const da = new FormData()
      da.set("lang", lg)
      const dat = {body: JSON.stringify(formDataToObject(da))}
      const test: tpTestimony[] = []
      fetchDefault("/testimony/read", dat, (d: tpDtmResponse) => {
          if(!d.bag) return 
          for (let index = 0; index < d.bag.length; index++) {
              console.log(d)
              const element: {id: number, witness: string, data_testimony: {es: string, en: string , cat: string} } = d.bag[index];
              const value = { 
                  id: element.id, 
                  witness: element.witness,
                  testimony: element.data_testimony.es || element.data_testimony.en || element.data_testimony.cat
              }
              console.log(value)
              test.push(value)
          }
          setData(test);
      }) 
      };
      api();
      // eslint-disable-next-line
  }, []);

  return (
    <>
      {data.map((testimonial) => (
        <div key={testimonial.id} className="testimonioMain">
          <div className="testimonioItem">
            <p className="FraseTestimonio">{testimonial.testimony}</p>
            <div className="iconEditar">
              <div className="editar">
                <img
                  src="../../../../src/assets/Dashboard-almacadaques/iconBtn/editar.svg"
                  alt=""
                />
                <p className="Textedit">Editar</p>
              </div>
              <div className="eliminar" onClick={() => handleEliminar(testimonial.id)}>
                <img
                  src="../../../../src/assets/Dashboard-almacadaques/iconBtn/Borrar.svg"
                  alt=""
                />
                <p className="TextElim">Eliminar</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export { PreviwTestimonios };
