import { NarbarAdmin } from '../../NarbarAdmin/NarbarAdmin';
import { BarSession } from '../../barSession/barSession';
import '../FormularioEspaciosBienestar/FormularioEspaciosBienestar.css';
import { useState, ChangeEvent, useContext, useEffect } from 'react';
import { getToken } from '../../../../helpers/JWT';
import { GlobalContext } from '../../../../contexts/GlobalContext';
// import { tpDtmResponse } from '../../../../types/typesComponents';
import { fetchDefault, fetchForm } from '../../../../helpers/Server';
import { tpDtmResponse } from '../../../../types/typesComponents';
import { formDataToObject } from '../../../../helpers/Forms';


import userImg from '../../../../../src/assets/Dashboard-almacadaques/users/user.svg'
import { mostrarAlerta } from '../../../../helpers/MostrarAlerta';


interface FormData {
    Frase_es: string;
    Frase_en: string;
    Frase_cat: string;
}

export const FormularioEspaciosBienestar = () => {
    const [formData, setFormData] = useState<FormData>({
        Frase_es: '',
        Frase_en: '',
        Frase_cat: '',
    });
    const { indexEspacio } = useContext(GlobalContext)

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const clear = () => {
        setFormData({
            Frase_es: '',
            Frase_en: '',
            Frase_cat: '',
        })
    }

    const handleSubmit = () => {
        const da = new FormData()
        if (formData.Frase_es) da.append("text_es", formData.Frase_es)
        if (formData.Frase_en) da.append("text_en", formData.Frase_en)
        if (formData.Frase_cat) da.append("text_cat", formData.Frase_cat)
        da.append("token", getToken()) 
        
        if (indexEspacio != -1) {
            da.append("id", `${indexEspacio}`)
            fetchForm("/espacio/update", da, (d: tpDtmResponse) => {
                if (d.status == 200) {
                    clear()
                }
                mostrarAlerta(d)
            })
    
        } else {
            fetchForm("/espacio/create", da, (d: tpDtmResponse) => {
                if (d.status == 200) {
                    clear()
                }
                mostrarAlerta(d)
            })
        }
        
    };

    useEffect(() => {
        const api = async () => {
            if (indexEspacio == -1) return
            const da = new FormData()
            da.set("id", `${indexEspacio}`)
            const dat = {body: JSON.stringify(formDataToObject(da))}
            fetchDefault("/espacio/readbyid", dat, (d: tpDtmResponse) => {
                if(!d.bag) return 
                for (let index = 0; index < d.bag.length; index++) {
                    const element: { es: string, en: string , cat: string } = d.bag[index];
                    const value = { 
                        Frase_es: element.es,
                        Frase_en: element.en,
                        Frase_cat: element.cat
                    } 
                    setFormData(value);
                }
            }) 
        };
        api();
            // eslint-disable-next-line
    }, []);

    return (
        <div className='formularioEspaciosBienestar'>
            <NarbarAdmin></NarbarAdmin>

            <div className="contenidoFormEspaciosBienestar">

                <BarSession direccion={17} tituloVista='Inicio' segundoTitulo='Espacios de Bienestar' nombre='Elisabeth' img={userImg} />



                <form className='formEspaciosBienestar' >


                    <div className="restInputs">
                        <label className='labelsEspaciosBienestar' form='Frase'>Frase_es</label>
                        <input className='inputsFormEspaciosBienestar'
                            type="text"
                            name="Frase_es"
                            value={formData.Frase_es}
                            onChange={handleInputChange}
                        />

                        <label className='labelsEspaciosBienestar' form='Frase'>Frase_en</label>
                        <input className='inputsFormEspaciosBienestar'
                            type="text"
                            name="Frase_en"
                            value={formData.Frase_en}
                            onChange={handleInputChange}
                        />

                        <label className='labelsEspaciosBienestar' form='Frase'>Frase_cat</label>
                        <input className='inputsFormEspaciosBienestar'
                            type="text"
                            name="Frase_cat"
                            value={formData.Frase_cat}
                            onChange={handleInputChange}
                        />
                    </div>
                    
                </form>
                <div className="GuardarEspaciosBienestar">
                        <a href="#" onClick={handleSubmit} className='btnGuardarEspaciosBienestarAdmin'>Guardar</a>
                    </div>
            </div>
        </div>
    );
};
