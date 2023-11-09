import "./ContainerRetiro.css"

function ContainerRetiro() {
    return (
        <div className="ContainerRetiro">
            <div className="titleContainerRetiro">
                <p className="titleRetiro">Effective Comunication</p>
                <div className="paddinIcono">
                    <img src="../../../../src/assets/Dashboard-almacadaques/iconBtn/editar.svg" alt="" className="BtnEditarEvento" />
                </div>
               
            </div>
            <img src="../../../../src/assets/Dashboard-almacadaques/ImagenesEventos/FondoRetiro.svg" alt="" className="ImgFondoRetiro"/>
            <div className="infoRetiroAdmin">
            
                <div className="infoRetiro">
                    <p className="parraforetiroAdmin">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p className="fechaRetiroAdmin"> De 1 al 3 de sep, 2023</p>
                    <p className="fechaRetiroAdmin">Ana Sanchez</p>
                </div>
            </div>
        </div>
    )
}

export { ContainerRetiro }