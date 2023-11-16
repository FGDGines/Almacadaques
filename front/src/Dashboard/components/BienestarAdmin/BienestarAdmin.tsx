import "./BienestarAdmin.css"

function BienestarAdmin() {
    return (
        <div className='BienestarAdmin'>
            <div className="editarContBienestar">
                <div className="accionEditar">
                    <img src="../../../../src/assets/Dashboard-almacadaques/iconBtn/editar.svg" alt="" />
                    <p className="TextAcciones">Editar</p>
                </div>
                <div className="accionEliminar" >
                    <img src="../../../../src/assets/Dashboard-almacadaques/iconBtn/Borrar.svg" alt="" />
                    <p className="TextAcciones">Eliminar</p>
                </div>
            </div>
            <img src="../../../../src/assets/FotosRetiros/1.jpg" alt="" className="ImgBienestarAdmin" />
            <div className="infoBienestarAdmin">
                <p className="textBienestarAdmin"><span className="TitleBienestarAdmin">Titulo: </span>  TIPS BIENESTAR. ARTICULO 1.</p>
            </div>
        </div>
    )
}

export { BienestarAdmin }