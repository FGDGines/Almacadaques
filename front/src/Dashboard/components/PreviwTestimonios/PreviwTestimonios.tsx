import { useState } from 'react';
import "./PreviwTestimonios.css";
import { testimonies } from "../../../data/testimonies";

function PreviwTestimonios() {
  const [data, setData] = useState(testimonies);

  const handleEliminar = (id: number) => {
    const updatedData = data.filter((testimonial) => testimonial.id !== id);
    setData(updatedData);
  };

  return (
    <>
      {data.map((testimonial) => (
        <div key={testimonial.id} className="testimonioMain">
          <div className="testimonioItem">
            <img
              src={testimonial.image}
              alt={testimonial.witness}
              className="imgUsertestimonio"
            />
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
