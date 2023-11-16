import { NarbarAdmin } from '../../NarbarAdmin/NarbarAdmin';
import '../FormularioTestimonios/FormularioTestimonios.css';
import { BarSession } from '../../barSession/barSession';
import  { useState, ChangeEvent, FormEvent } from 'react';


interface FormData {
    Frase: string;
    archivo: File | null;
}

export const FormularioTestimonios = () => {
    const [formData, setFormData] = useState<FormData>({
        Frase: '',
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
            const response = await fetch('http://tu-backend.com/api/FormularioTestimonios', {
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
                    Frase: '',
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
        <div className='formularioTestimonios'>
            <NarbarAdmin></NarbarAdmin>

            <div className="contenidoFormTestimonios">
            <BarSession direccion={17} tituloVista='Inicio' segundoTitulo='Testimonios'></BarSession>


                <form className='formTestimonios' onSubmit={handleSubmit}>
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
                        <a href="" className='btnGuardarEspaciosBienestarAdmin'>Guardar Testimonios</a>
                    </div>

                </form>
            </div>
        </div>
    );
};
