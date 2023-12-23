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
import { formDataToObject } from '../../helpers/Forms';

function Colaboradores() {
    const [colaboradors, setColaboradors] = useState<Colaborador[]>([]);
    const { languageFlag } = useContext(GlobalContext)
    const l = languageFlag.toLowerCase()
    

    useEffect(() => {
        const api = async () => {
            const da = new FormData()
            da.set("lang", l)
            const data = { body: JSON.stringify(formDataToObject(da)) }
            const colaborador: Colaborador[] = []
            fetchDefault("/collaborator/read", data, (d: tpDtmResponse) => {
                if(!d.bag) return 
                for (let index = 0; index < d.bag.length; index++) {
                    const element: { id: number, nombre_es: string, nombre_en: string, nombre_cat: string,
                        cargo_es: string, cargo_en: string,cargo_cat: string ,
                        descripcion_es:string, descripcion_en:string, descripcion_cat:string , 
                        imagen: string, contacto: string } = d.bag[index];
                    
                    const r = "src/collaborator/";
                    console.log(element)
                    const value = { 
                        id: element.id,
                        nombre: element.nombre_es || element.nombre_en || element.nombre_cat,
                        cargo: element.cargo_es || element.cargo_en || element.cargo_cat,
                        descripcion: element.descripcion_es || element.descripcion_en || element.descripcion_cat,
                        imagen: r + element.imagen,
                        contacto: element.contacto,
                    }
                    colaborador.push(value)
                }
                setColaboradors(colaborador);
            }) 
        };
        api();
        // eslint-disable-next-line
    }, [l]);
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