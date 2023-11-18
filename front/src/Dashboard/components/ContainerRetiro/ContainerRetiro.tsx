import "./ContainerRetiro.css"
import retiroInfo from "../../../data/blogRetiro"

function formatFecha(day, month, year) {
    const options = { month: 'short', year: 'numeric' };
    const startDate = new Date(year, month - 1, day[0]).toLocaleDateString('es-ES', options);
    const endDate = new Date(year, month - 1, day[1]).toLocaleDateString('es-ES', options);
    return `Del ${day[0]} al ${day[1]} ${startDate}`;
}
function ContainerRetiro() {
    return (
        <div className="OrdenarItem">
        {retiroInfo.map((retiro) => (
            <div key={retiro.index} className="ContainerRetiro">
                <div className="titleContainerRetiro">
                    <p className="titleRetiro">{retiro.title}</p>
                    <div className="paddinIcono">
                        <img src="../../../../src/assets/Dashboard-almacadaques/iconBtn/editar.svg" alt="" className="BtnEditarEvento" />
                    </div>
                </div>
                <img src={retiro.image[0]} alt="" className="ImgFondoRetiro" />
                <div className="infoRetiroAdmin">
                    <div className="infoRetiro">
                        <p className="parraforetiroAdmin">{retiro.description}</p>
                        <p className="fechaRetiroAdmin">{formatFecha(retiro.day, retiro.month, retiro.year)}</p>
                        <p className="textBienestarAdmin"><span className="TitleBienestarAdmin">Estado: </span>{retiro.estado}</p>
                    </div>
                </div>
            </div>
        ))}
        </div>
    )
}

export { ContainerRetiro }