import './Colaboradores.css'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Franja from '../Franja/Franja';
import { Tarjetacolaboradores } from '../TarjetaColaboradores/Tarjetacolaboradores';
import { ListaColaboradores } from '../../data/colaboradores';

function Colaboradores() {
    return (
        <>
            <Navbar />
            <Franja text='Colaborador@s' />
            <div className="colaboradores">
                    <Tarjetacolaboradores colaboradores={ListaColaboradores} />
            </div>
            <Footer />
        </>
    )
}

export { Colaboradores }