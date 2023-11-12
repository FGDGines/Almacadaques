import "./PreviwTestimonios.css"

function PreviwTestimonios() {
  return (
    <div className="testimonioMain">
            <img src="../../../../src/assets/Dashboard-almacadaques/users/Ellipse 3551.svg" alt="" className="imgUsertestimonio"/>
            <p className="FraseTestimonio">"La salud mental es tan esencial como la física; cuidemos ambas”</p>
            <div className="iconEditar">
                <div className="editar">
                    <img src="../../../../src/assets/Dashboard-almacadaques/iconBtn/editar.svg" alt=""  />
                    <p className="Textedit">Editar</p>
                </div>
                <div className="eliminar">
                    <img src="../../../../src/assets/Dashboard-almacadaques/iconBtn/Borrar.svg" alt="" />
                    <p className="TextElim">Eliminar</p>
                </div>
            </div>
    </div>
  )
}

export {PreviwTestimonios}