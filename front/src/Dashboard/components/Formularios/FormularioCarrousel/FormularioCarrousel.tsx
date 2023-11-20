import { NarbarAdmin } from '../../NarbarAdmin/NarbarAdmin';
import '../FormularioCarrousel/FormularioCarrousel.css';
import { BarSession } from '../../barSession/barSession';
import { useState, ChangeEvent, useContext } from 'react';
import { fetchForm } from '../../../../helpers/Server';
import { formDataToObject } from '../../../../helpers/Forms';
import { GlobalContext } from '../../../../contexts/GlobalContext';
import { getToken } from '../../../../helpers/JWT';
import { tpDtmResponse } from '../../../../types/typesComponents';


interface FormData {
    Frase: string;
    Firma: string;
    Url: string;
    archivo: File | null;
}

export const FormularioCarrousel = () => {
    const [formData, setFormData] = useState<FormData>({
        Frase: '',
        Firma: '',
        Url: '',
        archivo: null,
    });

    const { languageFlag } = useContext(GlobalContext)
    const lf = languageFlag.toLowerCase() 

    const { indexCarrousel } = useContext(GlobalContext)
    

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
        if (formData.Firma) {
            da.append("autor", formData.Firma)
        }
        if (formData.Url) {
            da.append("link_autor", formData.Url)
        }
        if (formData.Frase){
            da.append(`frase_${lf}`, formData.Frase)
        }
        da.append("token", getToken()) 
        
        if (formData.archivo) {
            da.append("src", formData.archivo);
            da.append("fileExtension", "jpg");
        }
        if (indexCarrousel != -1) {
            da.append("id", `${indexCarrousel}`)
            fetchForm("/carousel/update", da)
    
        } else {
            da.append("frase_es", ".")
            da.append("frase_en", ".")
            da.append("frase_cat", ".")
            da.set(`frase_${lf}`, formData.Frase)
            fetchForm("/carousel/create", da)
        }
        
    };

    
    return (
        <div className='formularioCarrousel'>
            <NarbarAdmin></NarbarAdmin>

            <div className="contenidoFormCarrousel">
                <BarSession direccion={17} tituloVista='Inicio' segundoTitulo='Carrousel' nombre='Kristine' img='../../../../src/assets/Dashboard-almacadaques/users/user.svg' />


                <form className='formCarrousel'>
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
                        <label className='labelsCarrousel' form='Frase'>Frase</label>
                        <input className='inputsFormCarrousel'
                            type="text"
                            name="Frase"
                            value={formData.Frase}
                            onChange={handleInputChange}
                        />

                        <label className='labelsCarrousel' form='Firma'>Firma autor</label>
                        <input className='inputsFormCarrousel'
                            type="text"
                            name="Firma"
                            value={formData.Firma}
                            onChange={handleInputChange}
                        />

                        <label className='labelsCarrousel' form='Url'>Link autor</label>
                        <input className='inputsFormCarrousel'
                            type="url"
                            name="Url"
                            value={formData.Url}
                            onChange={handleInputChange}
                        />
                        

                    </div>
                </form>


                <div className="botonesFormCarrousel">
                    <a href="#" className='CancelarCarousel'>Cancelar</a>
                    <a href="#" className='AgregarCarousel' onClick={handleSubmit}>Agregar</a>
                </div>
            </div>
        </div>
    );
};
