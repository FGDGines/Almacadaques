import './FormularioBlogBienestar.css'
import { NarbarAdmin } from '../../NarbarAdmin/NarbarAdmin';
import { BarSession } from '../../barSession/barSession';
import { useState, ChangeEvent, useContext } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { fetchForm } from '../../../../helpers/Server';
// import { tpDtmResponse } from '../../../../types/typesComponents';
import { GlobalContext } from '../../../../contexts/GlobalContext';
import { getToken } from '../../../../helpers/JWT'; 

interface FormData {
    Titulo: string;
    Contenido: string;
    Subtitulo: string;
    archivo: File | null;
}


function FormularioBlogBienestar() {
    const { indexTextLibro, setLayoutID, dataText } = useContext(GlobalContext)
    const [editorData, setEditorData] = useState(dataText?.content);
    const [imageURL, setImageURL] = useState<string | null>(dataText?.imagenSrc || null);

    let image: string[] =  JSON.parse(dataText?.content || "")
    console.log(image)
    const [editors, setEditors] = useState<string[]>([]);

    const [formData, setFormData] = useState<FormData>({

        Titulo: dataText?.title || '',
        Contenido: dataText?.content || '',
        Subtitulo: dataText?.subtitle || '',
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
        setImageURL(URL.createObjectURL(selectedFile));
    };

    const handleSubmit = () => {
        const da = new FormData()
        if (formData.Titulo) {
            da.append("title", formData.Titulo)
        }
        if (editorData) {
            da.append("content", JSON.stringify(editors))
        }
        if (formData.Subtitulo) {
            da.append("subtitle", formData.Subtitulo)
        }
        da.append("token", getToken()) 
        
        if (formData.archivo) {
            da.append("src", formData.archivo);
            da.append("fileExtension", "jpg");
        }
        if (indexTextLibro != -1) {
            da.append("id", `${indexTextLibro}`)
            fetchForm("/text_libro/update", da)
    
        } else {
            fetchForm("/text_libro/register", da)
        }
        setFormData({
            Titulo: '',
            Contenido: '',
            Subtitulo: '',
            archivo: null,
        })
        setEditorData('')
        setImageURL('')
    };
    
  
    const handleEditorChange = (index: number, editor: { getData: () => string }) => {
        setEditors(prevEditors => {
            const newEditors = [...prevEditors];
            newEditors[index] = editor.getData();
            return newEditors;
        });
    };


    const addEditor = () => {
        const t = [
            ...editors,
            ""
        ]
        setEditors(t);
    };

 
    const removeEditor = (index: number) => {
        setEditors(prevEditors => prevEditors.filter((_, i) => i !== index));
    }
 
    return (
        <div className='FormularioBlogBienestar'>
            <div className='FormularioColaboradores'>
                <NarbarAdmin></NarbarAdmin>

                <div className="contenidoFormCarrousel">
                    <BarSession direccion={25} tituloVista='Blog' segundoTitulo='Blog Bienestar' nombre='Kristine' img='../../../../src/assets/Dashboard-almacadaques/users/user.svg' />


                    <form className='formCarrousel'>
                        <div className="subirArchivos">
                            <label htmlFor="File" className='labelArchivo'>
                                <img src={imageURL || ""} alt="Selected" />
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

                            <label className='labelsCarrousel' form='Titulo'>Subtitulo</label>
                            <input className='inputsFormCarrousel'
                                type="text"
                                name="Subtitulo"
                                value={formData.Subtitulo}
                                onChange={handleInputChange}
                            />
                            
                            

                            <div className="editordeLibroFormulario">
                                {/* Agrega el componente CKEditor aquí */}
                                
                                <div>
                        {editors.map((editorData, index) => (
                            <div key={index}>
                            <CKEditor
                                editor={ClassicEditor}
                                data={editorData}
                                onChange={(_event: any, editor: { getData: () => string; }) => handleEditorChange(index, editor)}
                            />
                            <button onClick={() => removeEditor(index)}>Remove</button>
                            </div>
                        ))}
                        <button onClick={addEditor}>Add Editor</button>
                        </div>
                            </div>



                        </div>
                    </form>


                    <div className="botonesFormCarrousel">
                        <a href="#" className='CancelarCarousel' onClick={() => setLayoutID(25)}>Cancelar</a>
                        <a href="#" className='AgregarCarousel' onClick={handleSubmit}>Agregar</a>
                    </div>
                </div>
            </div>


        </div>
    )
}

export { FormularioBlogBienestar }