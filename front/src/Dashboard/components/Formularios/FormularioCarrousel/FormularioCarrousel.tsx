import { NarbarAdmin } from '../../NarbarAdmin/NarbarAdmin';
import '../FormularioCarrousel/FormularioCarrousel.css';
import { BarSession } from '../../barSession/barSession';
import React, { useState, ChangeEvent, FormEvent } from 'react';


interface FormData {
    url: string;
    cuenta: string;
    archivo: File | null;
}

export const FormularioCarrousel = () => {
    const [formData, setFormData] = useState<FormData>({
        url: '',
        cuenta: '',
        archivo: null,
    });

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

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        try {
            // Enviar datos al backend usando fetch
            const response = await fetch('http://tu-backend.com/api/Carrousel', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Datos del formulario enviados exitosamente');
                // Limpiar el formulario después de enviar los datos
                setFormData({
                    url: '',
                    cuenta: '',
                    archivo: null,
                });
            } else {
                console.error('Error al enviar los datos del formulario');
            }
        } catch (error) {
            console.error('Error al enviar los datos del formulario:', error);
        }
    };

    return (
        <div className='formularioCarrousel'>
            <NarbarAdmin></NarbarAdmin>

            <div className="contenidoFormCarrousel">
                <BarSession direccion={17} tituloVista='Inicio' segundoTitulo='Carrousel'></BarSession>


                <form className='formCarrousel' onSubmit={handleSubmit}>
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
                        <label className='labelsCarrousel'>URL:</label>
                        <input className='inputsFormCarrousel'
                            type="text"
                            name="url"
                            value={formData.url}
                            onChange={handleInputChange}
                        />

                        <label className='labelsCarrousel'>Cuenta:</label>
                        <input className='inputsFormCarrousel'
                            type="text"
                            name="cuenta"
                            value={formData.cuenta}
                            onChange={handleInputChange}
                        />
                        <button type="submit">Guardar Carrousel</button>

                    </div>
                </form>


                <div className="botonesFormCarrousel">

                </div>
            </div>
        </div>
    );
};
