import { NarbarAdmin } from '../../NarbarAdmin/NarbarAdmin';
import '../FormularioTestimonios/FormularioTestimonios.css';
import { BarSession } from '../../barSession/barSession';
import  { useState, ChangeEvent, useContext, useEffect } from 'react';
import { getToken } from '../../../../helpers/JWT';
import { GlobalContext } from '../../../../contexts/GlobalContext';
import { fetchDefault, fetchForm } from '../../../../helpers/Server'; 
import { formDataToObject } from '../../../../helpers/Forms';
import { tpDtmResponse } from '../../../../types/typesComponents';


import userImg from '../../../../../src/assets/Dashboard-almacadaques/users/user.svg'


interface FormData {
    Frase_es: string;
    Frase_en: string;
    Witness: string;
    Frase_cat: string;
}

export const FormularioTestimonios = () => {
    const [formData, setFormData] = useState<FormData>({
        Frase_es: '',
        Frase_en: '',
        Frase_cat: '',
        Witness: '',
    });
    const { indexTestimony } = useContext(GlobalContext) 

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    

    const handleSubmit = () => {
        const da = new FormData()
        if (formData.Frase_es) da.append("testimony_es", formData.Frase_es)
        if (formData.Frase_en) da.append("testimony_en", formData.Frase_en)
        if (formData.Frase_cat) da.append("testimony_cat", formData.Frase_cat)
        if (formData.Witness) da.append("witness", formData.Witness)
        da.append("token", getToken()) 
        
        if (indexTestimony != -1) {
            da.append("id", `${indexTestimony}`)
            fetchForm("/testimony/update", da)
        } else {
            fetchForm("/testimony/create", da)
        }
        setFormData({
            Frase_es: '',
            Frase_en: '',
            Frase_cat: '',
            Witness: '',
        })
    };


    // carga los carrousel
  useEffect(() => {
    const api = async () => {
        if (indexTestimony == -1) return
        const da = new FormData()
        da.set("id", `${indexTestimony}`)
        const dat = {body: JSON.stringify(formDataToObject(da))}
        fetchDefault("/testimony/readbyid", dat, (d: tpDtmResponse) => {
            if(!d.bag) return 
            for (let index = 0; index < d.bag.length; index++) {
                const element: { witness: string, data_testimony: {es: string, en: string , cat: string} } = d.bag[index];
                const value = { 
                    Witness: element.witness,
                    Frase_es: element.data_testimony.es,
                    Frase_en: element.data_testimony.en,
                    Frase_cat: element.data_testimony.cat
                } 
                setFormData(value);
            }
        }) 
    };
    api();
        // eslint-disable-next-line
    }, []);

    return (
        <div className='formularioTestimonios'>
            <NarbarAdmin></NarbarAdmin>

            <div className="contenidoFormTestimonios">
            <BarSession direccion={18} tituloVista='Inicio' segundoTitulo='Testimonios' nombre='Kristine' img={userImg} ></BarSession>


                <form className='formTestimonios'>
                    
                    <div className="restInputs">
                    <label className='labelsTestimonios' form='Witness'>Witness</label>
                        <input className='inputsFormTestimonios'
                            type="text"
                            name="Witness"
                            value={formData.Witness}
                            onChange={handleInputChange}
                        />

                        <label className='labelsTestimonios' form='Frase_es'>Frase de Testimonios español</label>
                        <input className='inputsFormTestimonios'
                            type="text"
                            name="Frase_es"
                            value={formData.Frase_es}
                            onChange={handleInputChange}
                        />

                        <label className='labelsTestimonios' form='Frase_en'>Frase de Testimonios inglés</label>
                        <input className='inputsFormTestimonios'
                            type="text"
                            name="Frase_en"
                            value={formData.Frase_en}
                            onChange={handleInputChange}
                        />

                        <label className='labelsTestimonios' form='Frase_cat'>Frase de Testimonios catalán</label>
                        <input className='inputsFormTestimonios'
                            type="text"
                            name="Frase_cat"
                            value={formData.Frase_cat}
                            onChange={handleInputChange}
                        />
                    </div>


                    <div className="GuardarEspaciosBienestar">
                        <a href="#" className='btnGuardarEspaciosBienestarAdmin'  onClick={handleSubmit}>Guardar Testimonios</a>
                    </div>

                </form>
            </div>
        </div>
    );
};
