import { NarbarAdmin } from '../../NarbarAdmin/NarbarAdmin';
import '../FormularioTestimonios/FormularioTestimonios.css';
import { BarSession } from '../../barSession/barSession';
import  { useState, ChangeEvent, FormEvent, useContext } from 'react';
import { getToken } from '../../../../helpers/JWT';
import { GlobalContext } from '../../../../contexts/GlobalContext';
import { fetchForm } from '../../../../helpers/Server';
import { tpDtmResponse } from '../../../../types/typesComponents';


interface FormData {
    Frase: string;
    archivo: File | null;
}

export const FormularioTestimonios = () => {
    const [formData, setFormData] = useState<FormData>({
        Frase: '',
        archivo: null,
    });
    const { indexTestimony, languageFlag } = useContext(GlobalContext)
    const lf = languageFlag.toLowerCase()

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
        console.log(indexTestimony)
        if (formData.Frase) {
            da.append("testimony_es", formData.Frase)
            da.append("testimony_en", formData.Frase)
            da.append("testimony_cat", formData.Frase)
        }
        da.append("token", getToken()) 
        
        if (formData.archivo) {
            da.append("src", formData.archivo);
            da.append("fileExtension", "jpg");
        }
        if (indexTestimony != -1) {
            da.append("id", `${indexTestimony}`)
            fetchForm("/testimony/update", da)
        } else {
            da.append("witness", formData.Frase)
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
                        <label className='labelsTestimonios' form='Frase'>Frase de Testimonios</label>
                        <input className='inputsFormTestimonios'
                            type="text"
                            name="Frase"
                            value={formData.Frase}
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
