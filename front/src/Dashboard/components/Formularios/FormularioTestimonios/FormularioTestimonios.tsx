import { NarbarAdmin } from '../../NarbarAdmin/NarbarAdmin';
import '../FormularioTestimonios/FormularioTestimonios.css';
import { BarSession } from '../../barSession/barSession';
import  { useState, ChangeEvent, useContext } from 'react';
import { getToken } from '../../../../helpers/JWT';
import { GlobalContext } from '../../../../contexts/GlobalContext';
import { fetchForm } from '../../../../helpers/Server';
import { tpDtmResponse } from '../../../../types/typesComponents';


interface FormData {
    Frase_es: string;
    Frase_en: string;
    Witness: string;
    Frase_cat: string;
    archivo: File | null;
}

export const FormularioTestimonios = () => {
    const [formData, setFormData] = useState<FormData>({
        Frase_es: '',
        Frase_en: '',
        Frase_cat: '',
        Witness: '',
        archivo: null,
    });
    const { indexTestimony } = useContext(GlobalContext) 

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0] as File;

        if (selectedFile) {
            setFormData({
                ...formData,
                archivo: selectedFile,
            });
        }
    };

    const handleSubmit = () => {
        const da = new FormData()
        if (formData.Frase_es) da.append("testimony_es", formData.Frase_es)
        if (formData.Frase_en) da.append("testimony_en", formData.Frase_en)
        if (formData.Frase_cat) da.append("testimony_cat", formData.Frase_cat)
        if (formData.Witness) da.append("witness", formData.Witness)
        da.append("token", getToken()) 
        
        if (formData.archivo) {
            da.append("src", formData.archivo);
            da.append("fileExtension", "jpg");
        }
        if (indexTestimony != -1) {
            da.append("id", `${indexTestimony}`)
            fetchForm("/testimony/update", da)
        } else {
            fetchForm("/testimony/create", da, (d: tpDtmResponse) => {
                console.log(d)
            })
        }
    };

    return (
        <div className='formularioTestimonios'>
            <NarbarAdmin></NarbarAdmin>

            <div className="contenidoFormTestimonios">
            <BarSession direccion={18} tituloVista='Inicio' segundoTitulo='Testimonios'></BarSession>


                <form className='formTestimonios'>
                    <div className="subirArchivos">
                    <label htmlFor="File" className='labelArchivo'>
                            <img src="../../../../src/assets/Dashboard-almacadaques/inicio/nube.svg" alt="" />
                            <span className='arrastra'>Arrastra y suelta o <span>sube</span> </span>
                            <span className='formatos'>Supported formates: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT</span>
                        </label>
                        <input id='File' className='cargarArchivo'
                            type="file"
                            onChange={handleFileChange}
                        />
                    </div>
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
