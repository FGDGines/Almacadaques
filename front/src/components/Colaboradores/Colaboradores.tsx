import './Colaboradores.css'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Franja from '../Franja/Franja';
import { textos } from '../../data/textos';
import { GlobalContext } from '../../contexts/GlobalContext';
import { useContext } from 'react';
import { Tarjetacolaboradores } from '../TarjetaColaboradores/Tarjetacolaboradores';
import { ListaColaboradores } from '../../data/colaboradores';

function Colaboradores() {
    const { languageFlag } = useContext(GlobalContext)
    return (
        <>
            <Navbar />
            <Franja text= {textos[languageFlag].textoColaboradores} />
            <div className="colaboradores">
                    <Tarjetacolaboradores colaboradores={ListaColaboradores} />
            </div>
            <Footer />
        </>
    )
}

export { Colaboradores }