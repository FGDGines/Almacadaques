import { NarbarAdmin } from '../../NarbarAdmin/NarbarAdmin';
import { BarSession } from '../../barSession/barSession';
import '../FormularioEspaciosBienestar/FormularioEspaciosBienestar.css';
import { useState, ChangeEvent, FormEvent } from 'react';


interface FormData {
    Frase: string;
}

export const FormularioEspaciosBienestar = () => {
    const [formData, setFormData] = useState<FormData>({
        Frase: '',
    });

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
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
                // console.log('Datos del formulario enviados exitosamente');
                // Limpiar el formulario después de enviar los datos
                setFormData({
                    Frase: '',
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

                <BarSession direccion={17} tituloVista='Inicio' segundoTitulo='Espacios de Bienestar' nombre='Kristine' img='../../../../src/assets/Dashboard-almacadaques/users/user.svg' />



                <form className='formEspaciosBienestar' onSubmit={handleSubmit}>


                    <div className="restInputs">
                        <label className='labelsEspaciosBienestar' form='Frase'>Frase</label>
                        <input className='inputsFormEspaciosBienestar'
                            type="text"
                            name="Frase"
                            value={formData.Frase}
                            onChange={handleInputChange}
                        />


                    </div>
                    
                </form>
                <div className="GuardarEspaciosBienestar">
                        <a href="" className='btnGuardarEspaciosBienestarAdmin'>Guardar</a>
                    </div>
            </div>
        </div>
    );
};
