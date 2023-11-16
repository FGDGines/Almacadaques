import './FormularioEventos.css'
import { NarbarAdmin } from '../../NarbarAdmin/NarbarAdmin';
import { BarSession } from '../../barSession/barSession';
import { useState, ChangeEvent, FormEvent } from 'react';


interface FormData {
    Titulo: string;
    Inicio: Date;
    Final: Date;
    Descripcion: string;
    Nombre: string;
    Url: string;
    archivo: File | null;
}


function FormularioEventos() {

    function formatDate(date: Date): string {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    const [formData, setFormData] = useState<FormData>({
        Titulo: '',
        Inicio: new Date(),
        Final: new Date(),
        Descripcion: '',
        Nombre: '',
        Url: '',
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
                    Titulo: '',
                    Inicio: new Date(),
                    Final: new Date(),
                    Descripcion: '',
                    Nombre: '',
                    Url: '',
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
        <div className='FormularioEventos'>
            <NarbarAdmin></NarbarAdmin>

            <div className="contenidoFormCarrousel">
                <BarSession direccion={19} tituloVista='Evento' segundoTitulo='Añadir nuevo eventos' nombre='Kristine' img='../../../../src/assets/Dashboard-almacadaques/users/user.svg' />


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
                        <label className='labelsCarrousel' form='Titulo'>Titulo</label>
                        <input className='inputsFormCarrousel'
                            type="text"
                            name="Titulo"
                            value={formData.Titulo}
                            onChange={handleInputChange}
                        />

                        <div className="Dataevent">
                            <div >
                                <label className='labelsCarrousel' form='Inicio'>Inicio</label>
                                <input className='inputsFormCarrousel InicioEvento'
                                    type="date"
                                    name="Inicio"
                                    value={formatDate(formData.Inicio)}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div >
                                <label className='labelsCarrousel ' form='Final'>Final</label>
                                <input className='inputsFormCarrousel InicioEvento'
                                    type="date"
                                    name="Final"
                                    value={formatDate(formData.Final)}
                                    onChange={handleInputChange}
                                />
                            </div>


                        </div>


                        <label className='labelsCarrousel' form='Descripcion'>Descripcion</label>
                        <input className='inputsFormCarrousel'
                            type="text"
                            name="Descripcion"
                            value={formData.Descripcion}
                            onChange={handleInputChange}
                        />

                        <label className='labelsCarrousel' form='Nombre'>Nombre</label>
                        <input className='inputsFormCarrousel'
                            type="text"
                            name="Nombre"
                            value={formData.Nombre}
                            onChange={handleInputChange}
                        />

                        <label className='labelsCarrousel' form='Url'>Enlace</label>
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
                    <a href="#" className='AgregarCarousel'>Agregar</a>
                </div>
            </div>
        </div>


    )

}

export { FormularioEventos }