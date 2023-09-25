import './Footer.css'
import NewSletter from '../NewSletter/NewSletter';
const Footer = ()=>{
    return <div className="Footer">
        <div className="ct1">
            <div className='col1'>
                <span>
                    Avenida borbon 215
                </span>
                <span>
                    Barcelona, 08031
                </span>
                <br />
                <br />
                <span style={{fontSize: 25}}>
                    Telf: +34 660 30 54 21
                </span>
                <span>
                    elisabetcollvinent@gmail.com
                </span>
            </div>
            <div className='col2'>
                <span>
                    Sobre mi
                </span>
                <span>
                    Coaching
                </span>
                <span>
                    Agenda
                </span>
                <span>
                    Colaborad@rs
                </span>
                <span>
                    Blog
                </span>
            </div>
            <div className='col3' >
                <span style={{fontSize: 30}}>
                    ¡Mantente en contacto! Obtenga las últimas actualizaciones y ofertas.
                </span>
                <NewSletter />
            </div>
        </div>
        <div className="ct2">
            Almacadaqués © 2023. Reservados todos los derechos.
        </div>

    </div>
}


export default Footer