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
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
                    <Tarjetacolaboradores key={index} />
                ))}
            </div>
            <Footer />
        </>
    )
}

export { Colaboradores }