import './FormularioColaboradores.css'
import { NarbarAdmin } from '../../NarbarAdmin/NarbarAdmin';
import { BarSession } from '../../barSession/barSession';
import { useState, ChangeEvent, FormEvent, useContext } from 'react';
import { fetchForm } from '../../../../helpers/Server';
import { tpDtmResponse } from '../../../../types/typesComponents';
import { GlobalContext } from '../../../../contexts/GlobalContext';
import { getToken } from '../../../../helpers/JWT';


interface FormData {
    Nombre: string;
    Cargo: string;
    Descripcion: string;
    Contacto: string;
    archivo: File | null;
}


function FormularioColaboradores() {
    const [formData, setFormData] = useState<FormData>({

        Nombre: '',
        Cargo: '',
        Descripcion: '',
        Contacto: '',
        archivo: null,
    });

    const { indexCollaborator } = useContext(GlobalContext)

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
        if (formData.Nombre) {
            da.append("nombre", formData.Nombre)
        }
        if (formData.Contacto) {
            da.append("nombre", formData.Contacto)
        }
        if (formData.Cargo) {
            da.append("nombre", formData.Cargo)
        }
        if (formData.Descripcion) {
            da.append("nombre", formData.Descripcion)
        }
        da.append("token", getToken()) 
        
        if (formData.archivo) {
            da.append("src", formData.archivo);
            da.append("fileExtension", "jpg");
        }
        if (indexCollaborator != -1) {
            da.append("id", `${indexCollaborator}`)
            fetchForm("/collaborator/update", da,(d: tpDtmResponse) => {
                console.log(d)
            }, (d: tpDtmResponse) => {
               console.log(d) 
            })
    
        } else {
            fetchForm("/collaborator/create", da,(tp: tpDtmResponse) => {
                console.log(tp)
            })
        }
    };


    return (
        <div className='FormularioColaboradores'>
            <NarbarAdmin></NarbarAdmin>

            <div className="contenidoFormCarrousel">
                <BarSession direccion={20} tituloVista='Colaboradores' segundoTitulo='Añadir nuevo Colaborador' nombre='Kristine' img='../../../../src/assets/Dashboard-almacadaques/users/user.svg' />


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
                        <label className='labelsCarrousel' form='Nombre'>Nombre</label>
                        <input className='inputsFormCarrousel'
                            type="text"
                            name="Nombre"
                            value={formData.Nombre}
                            onChange={handleInputChange}
                        />

                        <label className='labelsCarrousel' form='Cargo'>Cargo</label>
                        <input className='inputsFormCarrousel'
                            type="text"
                            name="Cargo"
                            value={formData.Cargo}
                            onChange={handleInputChange}
                        />

                        <label className='labelsCarrousel' form='Descripcion'>Descripcion</label>
                        <input className='inputsFormCarrousel'
                            type="text"
                            name="Descripcion"
                            value={formData.Descripcion}
                            onChange={handleInputChange}
                        />

                        <label className='labelsCarrousel' form='Contacto'>Contacto</label>
                        <input className='inputsFormCarrousel'
                            type="url"
                            name="Contacto"
                            value={formData.Contacto}
                            onChange={handleInputChange}
                        />

                    </div>
                </form>


                <div className="botonesFormCarrousel">
                    <a href="#" className='CancelarCarousel'>Cancelar</a>
                    <a href="#" className='AgregarCarousel'  onClick={handleSubmit}>Agregar</a>
                </div>
            </div>
        </div>


    )

}

export { FormularioColaboradores }