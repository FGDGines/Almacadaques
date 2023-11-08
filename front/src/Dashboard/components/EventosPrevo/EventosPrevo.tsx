import "./EventosPrevo.css"

function EventosPrevo() {
    return (
        <div className="eventosPrevios">
            <div className="imgEventos">
                <div className="titleEventos">
                    <p className="titleDejarSoltar" >Dejar de soltar</p>
                    <div className="paddinIcono">
                        <img src="../../../../src/assets/Dashboard-almacadaques/iconBtn/editar.svg" alt="" className="BtnEditarEvento" />
                    </div>

                </div>

                <img src="../../../../src/assets/Dashboard-almacadaques/ImagenesEventos/imgEventos.svg" alt="" className="ImgFondoEventos" />
            </div>
            <div className="infoeventos">
                <div className="informacionEvenetosMain">
                    <div className="fechaInicio">
                        <p className="titleMainEvento">Inicio:</p>
                        <p className="DescripcionMainEvento"> 23 jun 2023</p>
                    </div>
                    <div className="fechaInicio">
                        <p className="titleMainEvento">Fin:</p>
                        <p className="DescripcionMainEvento"> 23 jun 2023</p>
                    </div>
                    <div className="fechaInicioo">
                        <p className="titleMainEvento">Descripción:</p>
                        <p className="DescripcionMainEvento">Taller de respiración profunda y técnicas para lidiar con la salud mental </p>
                    </div>
                    <div className="fechaInicio">
                        <p className="titleMainEvento">Enlace:</p>
                        <p className="DescripcionMainEvento">www.google.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { EventosPrevo }