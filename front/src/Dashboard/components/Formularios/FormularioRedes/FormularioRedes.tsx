import { NarbarAdmin } from '../../NarbarAdmin/NarbarAdmin';
import '../FormularioRedes/FormularioRedes.css';
import { BarSession } from '../../barSession/barSession';
import { useState, ChangeEvent, useContext } from 'react';
import { getToken } from '../../../../helpers/JWT';
import { fetchForm } from '../../../../helpers/Server';
// import { tpDtmResponse } from '../../../../types/typesComponents';
import { GlobalContext } from '../../../../contexts/GlobalContext';


interface FormData {
    url: string;
    archivo: File | null;
    cuenta: string;
}

export const FormularioRedes = () => {
    const [formData, setFormData] = useState<FormData>({
        url: '',
        archivo: null,
        cuenta: ''
    });
    const { indexRed } = useContext(GlobalContext)

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
        if (formData.url) {
            da.append("url", formData.url)
        }
        if (formData.cuenta) {
            da.append("cuenta", formData.cuenta)
        }
        da.append("token", getToken()) 
        if (formData.archivo) {
            da.append("src", formData.archivo);
            da.append("fileExtension", "jpg");
        }
        if (indexRed != -1) {
            da.append("id", `${indexRed}`)
            fetchForm("/red/update", da)
    
        } else {
            fetchForm("/red/create", da)
        }
    };

    return (
        <div className='formularioRedes'>
            <NarbarAdmin></NarbarAdmin>

            <div className="contenidoFormRedes">
                <BarSession direccion={17} tituloVista='Inicio' segundoTitulo='Redes' nombre='Kristine' img='../../../../src/assets/Dashboard-almacadaques/users/user.svg' />


                <form className='formRedes'>
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
                        <label className='labelsRedes' form='URL'>URL:</label>
                        <input className='inputsFormRedes'
                            type="text"
                            name="url"
                            value={formData.url}
                            onChange={handleInputChange}
                        />

                        <label className='labelsRedes' form='URL'>cuenta:</label>
                        <input className='inputsFormRedes'
                            type="text"
                            name="cuenta"
                            value={formData.cuenta}
                            onChange={handleInputChange}
                        />
                        
                        <div className="btnGuardarRedes">
                            <a href="#" onClick={handleSubmit} className='GuardarRedesSocialesAdmin'>Guardar</a>
                        </div>
                    </div>
                </form>


                <div className="botonesFormRedes">

                </div>
            </div>
        </div>
    );
};
