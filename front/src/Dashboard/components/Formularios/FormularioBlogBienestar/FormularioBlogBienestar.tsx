import './FormularioBlogBienestar.css'
import { NarbarAdmin } from '../../NarbarAdmin/NarbarAdmin';
import { BarSession } from '../../barSession/barSession';
import { useState, ChangeEvent, FormEvent } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

interface FormData {
    Titulo: string;
    Contenido: string;
    archivo: File | null;
}


function FormularioBlogBienestar() {
    const [editorData, setEditorData] = useState('');





    const [formData, setFormData] = useState<FormData>({

        Titulo: '',
        Contenido: '',
        archivo: null,
    });

    // eslint-disable-next-line no-unused-vars
    const handleEditorChange = (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        _event: any,
        editor: { getData: () => string }
    ) => {
        const data = editor.getData();
        setEditorData(data);
    };

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
                // console.log('Datos del formulario enviados exitosamente');
                // Limpiar el formulario después de enviar los datos
                setFormData({
                    Titulo: '',
                    Contenido: '',
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
        <div className='FormularioBlogBienestar'>
            <div className='FormularioColaboradores'>
                <NarbarAdmin></NarbarAdmin>

                <div className="contenidoFormCarrousel">
                    <BarSession direccion={25} tituloVista='Blog' segundoTitulo='Blog Bienestar' nombre='Kristine' img='../../../../src/assets/Dashboard-almacadaques/users/user.svg' />


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

                            <div className="editordeLibroFormulario">
                                {/* Agrega el componente CKEditor aquí */}
                                <CKEditor
                                    editor={ClassicEditor}
                                    data={editorData}
                                    onChange={(event, editor) => handleEditorChange(event, editor)}
                                />
                            </div>



                        </div>
                    </form>


                    <div className="botonesFormCarrousel">
                        <a href="#" className='CancelarCarousel'>Cancelar</a>
                        <a href="#" className='AgregarCarousel'>Agregar</a>
                    </div>
                </div>
            </div>


        </div>
    )
}

export { FormularioBlogBienestar }