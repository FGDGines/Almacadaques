import './FormularioColaboradores.css'
import { NarbarAdmin } from '../../NarbarAdmin/NarbarAdmin';
import { BarSession } from '../../barSession/barSession';
import { useState, ChangeEvent, useContext, useEffect } from 'react';
import { fetchDefault, fetchForm } from '../../../../helpers/Server';
import { tpDtmResponse } from '../../../../types/typesComponents';
import { GlobalContext } from '../../../../contexts/GlobalContext';
import { getToken } from '../../../../helpers/JWT';


import userImg from '../../../../../src/assets/Dashboard-almacadaques/users/user.svg'
import { mostrarAlerta } from '../../../../helpers/MostrarAlerta';
import { formDataToObject } from '../../../../helpers/Forms';


interface FormData {
    Nombre_es: string;
    Cargo_es: string;
    Descripcion_es: string;
    Nombre_en: string;
    Cargo_en: string;
    Descripcion_en: string;
    Nombre_cat: string;
    Cargo_cat: string;
    Descripcion_cat: string;
    Contacto: string;
    archivo: File | null;
}


function FormularioColaboradores() {
    const { indexCollaborator, setLayoutID, dataColaborador } = useContext(GlobalContext)

    const [formData, setFormData] = useState<FormData>({
        Nombre_es: '',
        Cargo_es: '',
        Descripcion_es: '',
        Nombre_en: '',
        Cargo_en: '',
        Descripcion_en: '',
        Nombre_cat: '',
        Cargo_cat: '',
        Descripcion_cat: '',
        Contacto:'',
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
            Nombre_es: '',
            Cargo_es: '',
            Descripcion_es: '',
            Nombre_en: '',
            Cargo_en: '',
            Descripcion_en: '',
            Nombre_cat: '',
            Cargo_cat: '',
            Descripcion_cat: '',
            Contacto: '',
            archivo: null,
        })
        setImageURL("")
    }

    const handleSubmit = () => {
        const da = new FormData()
        if (formData.Nombre_es) {
            da.append("nombre_es", formData.Nombre_es)
        }
        if (formData.Descripcion_es) {
            da.append("descripcion_es", formData.Descripcion_es)
        }
        if (formData.Cargo_es) {
            da.append("cargo_es", formData.Cargo_es)
        }
        if (formData.Nombre_en) {
            da.append("nombre_en", formData.Nombre_en)
        }
        if (formData.Descripcion_en) {
            da.append("descripcion_en", formData.Descripcion_en)
        }
        if (formData.Cargo_en) {
            da.append("cargo_en", formData.Cargo_en)
        }
        if (formData.Nombre_cat) {
            da.append("nombre_cat", formData.Nombre_cat)
        }
        if (formData.Descripcion_cat) {
            da.append("descripcion_cat", formData.Descripcion_cat)
        }
        if (formData.Cargo_cat) {
            da.append("cargo_cat", formData.Cargo_cat)
        }
        if (formData.Contacto) {
            da.append("contacto", formData.Contacto)
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

    useEffect(() => {
        const api = async () => {
            if (indexCollaborator == -1) return
            const da = new FormData()
            da.set("id", `${indexCollaborator}`)
            const dat = {body: JSON.stringify(formDataToObject(da))}
            fetchDefault("/collaborator/readbyid", dat, (d: tpDtmResponse) => {
                console.log(d)
                if(!d.bag) return 
                for (let index = 0; index < d.bag.length; index++) {
                    const element: {id: number,  nombre_es: string, nombre_en: string, nombre_cat: string ,
                     cargo_es: string, cargo_en: string,cargo_cat: string ,
                    descripcion_es:string, descripcion_en:string, descripcion_cat:string , 
                    imagen: string, contacto: string  } = d.bag[index];
                    const r = "src/collaborator/";
                    const value = { 
                        Nombre_es: element.nombre_es,
                        Cargo_es: element.cargo_es,
                        Descripcion_es: element.descripcion_es,
                        Nombre_en: element.nombre_en,
                        Cargo_en: element.cargo_en,
                        Descripcion_en: element.descripcion_en,
                        Nombre_cat: element.nombre_cat,
                        Cargo_cat: element.cargo_cat,
                        Descripcion_cat: element.descripcion_cat,
                        Contacto: element.contacto,
                        archivo: null
                    } 
                    console.log(element.imagen)
                    setImageURL(r + element.imagen)
                    setFormData(value);
                }
            }) 
        };
        api();
            // eslint-disable-next-line
    }, []);

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
                        <label className='labelsCarrousel' form='Nombre'>Nombre_es</label>
                        <input className='inputsFormCarrousel'
                            type="text"
                            name="Nombre_es"
                            value={formData.Nombre_es}
                            onChange={handleInputChange}
                        />

                        <label className='labelsCarrousel' form='Nombre'>Nombre_en</label>
                        <input className='inputsFormCarrousel'
                            type="text"
                            name="Nombre_en"
                            value={formData.Nombre_en}
                            onChange={handleInputChange}
                        />

                        <label className='labelsCarrousel' form='Nombre'>Nombre_cat</label>
                        <input className='inputsFormCarrousel'
                            type="text"
                            name="Nombre_cat"
                            value={formData.Nombre_cat}
                            onChange={handleInputChange}
                        />
                        
                        <label className='labelsCarrousel' form='Cargo'>Cargo_es</label>
                        <input className='inputsFormCarrousel'
                            type="text"
                            name="Cargo_es"
                            value={formData.Cargo_es}
                            onChange={handleInputChange}
                        />

                        <label className='labelsCarrousel' form='Cargo'>Cargo_en</label>
                        <input className='inputsFormCarrousel'
                            type="text"
                            name="Cargo_en"
                            value={formData.Cargo_en}
                            onChange={handleInputChange}
                        />

                        <label className='labelsCarrousel' form='Cargo'>Cargo_cat</label>
                        <input className='inputsFormCarrousel'
                            type="text"
                            name="Cargo_cat"
                            value={formData.Cargo_cat}
                            onChange={handleInputChange}
                        />

                        <label className='labelsCarrousel' form='Descripcion'>Descripcion_es</label>
                        <input className='inputsFormCarrousel'
                            type="text"
                            name="Descripcion_es"
                            value={formData.Descripcion_es}
                            onChange={handleInputChange}
                        />

                        <label className='labelsCarrousel' form='Descripcion'>Descripcion_en</label>
                        <input className='inputsFormCarrousel'
                            type="text"
                            name="Descripcion_en"
                            value={formData.Descripcion_en}
                            onChange={handleInputChange}
                        />

                        <label className='labelsCarrousel' form='Descripcion'>Descripcion_cat</label>
                        <input className='inputsFormCarrousel'
                            type="text"
                            name="Descripcion_cat"
                            value={formData.Descripcion_cat}
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