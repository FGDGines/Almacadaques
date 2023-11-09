import "./ContainerColaboradores.css"

function ContainerColaboradores() {
  return (
    <div className="ContainerColaboradores">
        <div className="IconoEditarColaboradores">
            <img src="../../../../src/assets/Dashboard-almacadaques/iconBtn/editar.svg" alt="" className="IconEditarColaboradores"/>
            <p className="TitleBtnEditarColaborador">Editar</p>
        </div>
        <img src="../../../../src/assets/Dashboard-almacadaques/users/Ellipse 3551 (1).svg" alt="" className="imgUsuarioColaboradores"/>

        <div className="NombreCargo">
          <p className="NombreColaboradorAdmin">Julian Lopez</p>
          <p className="CargocolaboradorAdmin"><span className="TitleCargoColaborador">Cargo:</span> Asesora nutricional</p>
        </div>
        <p className="DescripcionColaboradores">Descripción:</p>
        <p className="ParrafoDescripcion">Dietas equilibradas para perdida de peso excesiva</p>
        <a href="" className="EnlaceContactoColaborador"> <p> <span className="TitleContactoColaborador">Contacto:</span> 987654321</p></a>
        
    </div>
  )
}

export  {ContainerColaboradores}