import './Colaboradores.css'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Franja from '../Franja/Franja';
import { Tarjetacolaboradores } from '../TarjetaColaboradores/Tarjetacolaboradores';

function Colaboradores() {
    return (
        <>
            <Navbar />
            <Franja text='Colaborad@res' />
            <div className="colaboradores">
                <Tarjetacolaboradores /> 
            </div>
            <Footer />
        </>
    )
}

export { Colaboradores }