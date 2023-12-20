import './FormularioColaboradores.css'
import { NarbarAdmin } from '../../NarbarAdmin/NarbarAdmin';
import { BarSession } from '../../barSession/barSession';
import { useState, ChangeEvent, useContext } from 'react';
import { fetchForm } from '../../../../helpers/Server';
import { tpDtmResponse } from '../../../../types/typesComponents';
import { GlobalContext } from '../../../../contexts/GlobalContext';
import { getToken } from '../../../../helpers/JWT';


import userImg from '../../../../../src/assets/Dashboard-almacadaques/users/user.svg'
import { mostrarAlerta } from '../../../../helpers/MostrarAlerta';


interface FormData {
    Nombre: string;
    Cargo: string;
    Descripcion: string;
    Contacto: string;
    archivo: File | null;
}


function FormularioColaboradores() {
    const { indexCollaborator, setLayoutID, dataColaborador } = useContext(GlobalContext)

    const [formData, setFormData] = useState<FormData>({
        Nombre: dataColaborador?.nombre || '',
        Cargo: dataColaborador?.cargo || '',
        Descripcion: dataColaborador?.descripcion || '',
        Contacto: dataColaborador?.contacto || '',
        archivo: null,
    });

    const [imageURL, setImageURL] = useState<string | null>(dataColaborador?.imagen || null);

  
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

    const clear = () => {
        setFormData({
            Nombre: '',
            Cargo: '',
            Descripcion: '',
            Contacto: '',
            archivo: null,
        })
        setImageURL("")
    }

    const handleSubmit = () => {
        const da = new FormData()
        if (formData.Nombre) {
            da.append("nombre", formData.Nombre)
        }
        if (formData.Contacto) {
            da.append("contacto", formData.Contacto)
        }
        if (formData.Cargo) {
            da.append("cargo", formData.Cargo)
        }
        if (formData.Descripcion) {
            da.append("descripcion", formData.Descripcion)
        }
        da.append("token", getToken()) 
        if (formData.archivo) {
            da.append("src", formData.archivo);
            da.append("fileExtension", "jpg");
        }
        if (indexCollaborator != -1) {
            da.append("id", `${indexCollaborator}`)
            fetchForm("/collaborator/update", da, (d: tpDtmResponse) => {
                if (d.status == 200) {
                    clear()
                }
                mostrarAlerta(d)
            })
    
        } else {
            fetchForm("/collaborator/register", da, (d: tpDtmResponse) => {
                if (d.status == 200) {
                    clear()
                }
                mostrarAlerta(d)
            })
        }
        
    };


    return (
        <div className='FormularioColaboradores'>
            <NarbarAdmin></NarbarAdmin>

            <div className="contenidoFormCarrousel">
                <BarSession direccion={20} tituloVista='Colaboradores' segundoTitulo={`${indexCollaborator == -1 ? 'Añadir' : "Editar"} Colaborador`} nombre='Elisabeth' img={userImg} />


                <form className='formCarrousel'>
                    <div className="subirArchivos">
                        <label htmlFor="File" className='labelArchivo'>
                        <img src={imageURL || ""} className="img" alt="Selected" />
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

                        <label className='labelsCarrousel' form='Contacto'>Url de contacto</label>
                        <input className='inputsFormCarrousel'
                            type="url"
                            name="Contacto"
                            value={formData.Contacto}
                            onChange={handleInputChange}
                        />

                    </div>
                </form>


                <div className="botonesFormCarrousel">
                    <a href="#" className='CancelarCarousel' onClick={() => setLayoutID(20)}>Cancelar</a>
                    <a href="#" className='AgregarCarousel'  onClick={handleSubmit}>Agregar</a>
                </div>
            </div>
        </div>


    )

}

export { FormularioColaboradores }