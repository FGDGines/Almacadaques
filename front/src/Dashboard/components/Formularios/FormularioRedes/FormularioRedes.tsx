import { NarbarAdmin } from '../../NarbarAdmin/NarbarAdmin';
import '../FormularioRedes/FormularioRedes.css';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { redes as datosRedes } from '../../../../data/redes';

interface FormData {
    url: string;
    cuenta: string;
    archivo: File | null;
}

export const FormularioRedes = () => {
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
            const response = await fetch('http://tu-backend.com/api/redes', {
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
        <div className='formularioRedes'>
            <NarbarAdmin></NarbarAdmin>

            <div className="contenidoFormRedes">
                <h2>Formulario de Redes</h2>

                <form onSubmit={handleSubmit}>
                    <label>URL:</label>
                    <input
                        type="text"
                        name="url"
                        value={formData.url}
                        onChange={handleInputChange}
                    />

                    <label>Cuenta:</label>
                    <input
                        type="text"
                        name="cuenta"
                        value={formData.cuenta}
                        onChange={handleInputChange}
                    />

                    <label>Subir archivo:</label>
                    <input
                        type="file"
                        onChange={handleFileChange}
                    />

                    <button type="submit">Guardar Redes</button>
                </form>
            </div>
        </div>
    );
};
