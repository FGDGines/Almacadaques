import './Colaboradores.css'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Franja from '../Franja/Franja';
import { textos } from '../../data/textos';
import { GlobalContext } from '../../contexts/GlobalContext';
import { useContext, useEffect, useState } from 'react';
import { Tarjetacolaboradores } from '../TarjetaColaboradores/Tarjetacolaboradores';
import { Colaborador } from '../../data/colaboradores';
import { fetchDefault } from '../../helpers/Server';
import { tpDtmResponse } from '../../types/typesComponents';

function Colaboradores() {
    const [colaboradors, setColaboradors] = useState<Colaborador[]>([]);
    const { languageFlag } = useContext(GlobalContext)
    

    useEffect(() => {
        const api = async () => {
            const colaborador: Colaborador[] = []
            fetchDefault("/collaborator/read", {}, (d: tpDtmResponse) => {
                if(!d.bag) return 
                for (let index = 0; index < d.bag.length; index++) {
                    const element: {id: number , nombre: string  , descripcion: string, imagen: string, contacto: string, cargo: string } = d.bag[index];
                    const r = "src/collaborador/";
                    colaborador.push(
                        {
                            id: element.id,
                            nombre: element.nombre,
                            descripcion: element.descripcion,
                            imagen: r + element.imagen,
                            contacto: element.contacto,
                            cargo: element.cargo
                        });
                }
                setColaboradors(colaborador);
            }) 
        };
        api();
        // eslint-disable-next-line
    }, []);
    return (
        <>
            <Navbar />
            <Franja text={textos[languageFlag].textoColaboradores}/>
            <div className="colaboradores">
                    <Tarjetacolaboradores colaboradores={colaboradors} />
            </div>
            <Footer />
        </>
    )
}

export { Colaboradores }