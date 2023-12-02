import './FormularioEventos.css'
import { NarbarAdmin } from '../../NarbarAdmin/NarbarAdmin';
import { BarSession } from '../../barSession/barSession';
import { useState, ChangeEvent, useContext } from 'react';
import { getToken } from '../../../../helpers/JWT';
import { GlobalContext } from '../../../../contexts/GlobalContext';
import { fetchForm } from '../../../../helpers/Server';
// import { tpDtmResponse } from '../../../../types/typesComponents';


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
    const { indexCalendarEvent, setLayoutID, dataEvent } = useContext(GlobalContext)

    function formatDate(date: Date): string {
        const year = date.getUTCFullYear();
        const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
        const day = date.getUTCDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
      }

    const [formData, setFormData] = useState<FormData>({
        Titulo: dataEvent?.title || '',
        Inicio: dataEvent?.start ? (new Date(dataEvent.start)) : new Date(),
        Final: dataEvent?.end ? new Date(dataEvent.end) : new Date(),
        Descripcion: dataEvent?.description || '',
        Nombre: dataEvent?.colaborator_name || '',
        Url: dataEvent?.colaborator_link || '',
        archivo: null
    }); 
    const [imageURL, setImageURL] = useState<string | null>(dataEvent?.src || null);

  
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        
        if (name === "Inicio" || name === "Final") {
          setFormData({
            ...formData,
            [name]: new Date(value),
          });
        } else {
          setFormData({
            ...formData,
            [name]: value,
          });
        }
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
        if (formData.Nombre) da.append("nombre", formData.Nombre)
        if (formData.Descripcion) da.append("descripcion", formData.Descripcion)
        if (formData.Titulo) da.append("titulo", formData.Titulo)
        if (formData.Url) da.append("enlace", formData.Url)
        if (formData.Final) da.append("final", formatDate(formData.Final))
        if (formData.Inicio) da.append("inicio", formatDate(formData.Inicio))
        da.append("token", getToken()) 
        if (formData.archivo) {
            da.append("src", formData.archivo);
            da.append("fileExtension", "jpg");
        }
        if (indexCalendarEvent != -1) {
            da.append("id", `${indexCalendarEvent}`)
            fetchForm("/calendar_event/update", da)
    
        } else {
            fetchForm("/calendar_event/create", da)
        }

        setFormData({
            Titulo: '',
            Inicio: new Date(),
            Final: new Date(),
            Descripcion: '',
            Nombre: '',
            Url: '',
            archivo: null
        })
        setImageURL("")
    };

    const hSubmit = (event: React.FormEvent) => {
        console.log(1)
        event.preventDefault();
        // Resto de tu lógica de envío
    };

    return (
        <div className='FormularioEventos'>
            <NarbarAdmin></NarbarAdmin>

            <div className="contenidoFormCarrousel">
                <BarSession direccion={19} tituloVista='Evento' segundoTitulo='Añadir nuevo eventos' nombre='Kristine' img='../../../../src/assets/Dashboard-almacadaques/users/user.svg' />


                <form className='formCarrousel' onSubmit={hSubmit}>
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
                    <a href="#" className='CancelarCarousel' onClick={() => setLayoutID(19)}>Cancelar</a>
                    <a href="#" className='AgregarCarousel' onClick={handleSubmit}>Agregar</a>
                </div>
            </div>
        </div>


    )

}

export { FormularioEventos }