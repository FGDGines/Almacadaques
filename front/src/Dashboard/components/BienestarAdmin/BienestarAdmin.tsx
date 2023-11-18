import "./BienestarAdmin.css"
import { textLibro } from "../../../../src/data/TextLibro"


function BienestarAdmin() {
    return (
        <div className="OrdenarItem">
        {textLibro.map((item, index) => (
            <div key={index} className='BienestarAdmin'>
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
                <img src={item.imageSrc} alt="" className="ImgBienestarAdmin" />
                <div className="infoBienestarAdmin">
                    <p className="textBienestarAdmin"><span className="TitleBienestarAdmin">Titulo: </span>{item.title}</p>
                </div>
            </div>
        ))}
    </div>
    )
}

export { BienestarAdmin }