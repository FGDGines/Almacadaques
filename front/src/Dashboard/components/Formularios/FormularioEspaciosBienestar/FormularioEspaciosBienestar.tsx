import { NarbarAdmin } from '../../NarbarAdmin/NarbarAdmin';
import '../FormularioEspaciosBienestar/FormularioEspaciosBienestar.css';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { redes as datosRedes } from '../../../../data/redes';

interface FormData {
    url: string;
    cuenta: string;
    archivo: File | null;
}

export const FormularioEspaciosBienestar = () => {
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
            const response = await fetch('http://tu-backend.com/api/EspaciosBienestar', {
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
        <div className='formularioEspaciosBienestar'>
            <NarbarAdmin></NarbarAdmin>

            <div className="contenidoFormEspaciosBienestar">

                <div className="tituloFormEspaciosBienestar">
                    <h2>Formulario de Espacios de Bienestar</h2>

                </div>


                <form className='formEspaciosBienestar' onSubmit={handleSubmit}>
                    <div className="subirArchivos">
                        <label  htmlFor="File" className='labelArchivo'>Subir archivo:</label>
                        <input id='File' className='cargarArchivo'
                            type="file"
                            onChange={handleFileChange}
                        />
                    </div>
                    <div className="restInputs">
                        <label className='labelsEspaciosBienestar'>URL:</label>
                        <input className='inputsFormEspaciosBienestar'
                            type="text"
                            name="url"
                            value={formData.url}
                            onChange={handleInputChange}
                        />

                        <label className='labelsEspaciosBienestar'>Cuenta:</label>
                        <input className='inputsFormEspaciosBienestar'
                            type="text"
                            name="cuenta"
                            value={formData.cuenta}
                            onChange={handleInputChange}
                        />
                        <button type="submit">Guardar EspaciosBienestar</button>

                    </div>




                </form>
            </div>
        </div>
    );
};
