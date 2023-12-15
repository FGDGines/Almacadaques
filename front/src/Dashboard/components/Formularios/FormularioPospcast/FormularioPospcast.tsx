import "./FormularioPospcast.css"
import { NarbarAdmin } from '../../NarbarAdmin/NarbarAdmin';
import { BarSession } from '../../barSession/barSession';
import { useState, ChangeEvent, useContext } from 'react';
import { getToken } from "../../../../helpers/JWT";
import { GlobalContext } from "../../../../contexts/GlobalContext";
import { fetchForm } from "../../../../helpers/Server";
import { tpDtmResponse } from "../../../../types/typesComponents";

import userImg from '../../../../../src/assets/Dashboard-almacadaques/users/user.svg'
import { mostrarAlerta } from "../../../../helpers/MostrarAlerta";


interface FormData {
  Titulo: string;
  Autor: string;
  Fecha: Date,
  Categoria: string;
  Url: string;
  archivo: File | null;
}


function FormularioPospcast() {
  const { indexPodcast, setLayoutID, dataPodcast} = useContext(GlobalContext)

  function formatDate(date: Date): string {
    const year = date.getUTCFullYear();
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
    const day = date.getUTCDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  const [formData, setFormData] = useState<FormData>({
    Titulo: dataPodcast?.titulo || '',
    Autor: dataPodcast?.autor || '',
    Fecha: dataPodcast?.fecha ? new Date(dataPodcast.fecha) : new Date(),
    Categoria: dataPodcast?.categoria || '',
    Url: dataPodcast?.url || '',
    archivo: null,
  });

  const [imageURL, setImageURL] = useState<string | null>(dataPodcast?.imagen || null);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    
    if (name === "Fecha") {
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

  const clear = () => {
    setFormData({
      Titulo: '',
      Autor: '',
      Fecha: new Date(),
      Categoria: '',
      Url: '',
      archivo: null,
    })
    setImageURL("")
  }

  const handleSubmit = () => {
    const da = new FormData()
    if (formData.Titulo) {
        da.append("titulo", formData.Titulo)
    }
    if (formData.Autor) {
        da.append("autor", formData.Autor)
    }
    if (formData.Fecha){
        da.append("fecha", formatDate(formData.Fecha))
    }
    if (formData.Categoria) {
        da.append("categoria", formData.Categoria)
    }
    if (formData.Url) {
        da.append("url", formData.Url)
    }
    da.append("token", getToken()) 
    if (formData.archivo) {
        da.append("src", formData.archivo);
        da.append("fileExtension", "jpg");
    }

    if (indexPodcast != -1) {
        da.append("id", `${indexPodcast}`)
        fetchForm("/podcast/update", da, (d: tpDtmResponse) => {
          if (d.status == 200) {
             clear()
          }
          mostrarAlerta(d)
        })

    } else {
      fetchForm("/podcast/register", da, (d: tpDtmResponse) => {
        if (d.status == 200) {
          clear()
        }
        mostrarAlerta(d)
      })
    }

    
  };

  return (
    <div className="FormularioPospcast">
      <NarbarAdmin></NarbarAdmin>

      <div className="contenidoFormCarrousel">
        <BarSession direccion={26} tituloVista='Blog' segundoTitulo={`${indexPodcast == -1 ? "Añadir": "Editar"} Podcast`} nombre='Elisabeth' img={userImg} />


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
            <label className='labelsCarrousel' form='Titulo'>Titulo</label>
            <input className='inputsFormCarrousel'
              type="text"
              name="Titulo"
              value={formData.Titulo}
              onChange={handleInputChange}
            />




            <label className='labelsCarrousel ' form='Fecha'>Fecha</label>
            <input className='inputsFormCarrousel InicioEvento'
              type="date"
              name="Fecha"
              value={formatDate(formData.Fecha)}
              onChange={handleInputChange}
            />






            <label className='labelsCarrousel' form='Autor'>Autor</label>
            <input className='inputsFormCarrousel'
              type="text"
              name="Autor"
              value={formData.Autor}
              onChange={handleInputChange}
            />

            <label className='labelsCarrousel' form='Categoria'>Categoria</label>
            <input className='inputsFormCarrousel'
              type="text"
              name="Categoria"
              value={formData.Categoria}
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
          <a href="#" className='CancelarCarousel' onClick={() => setLayoutID(26)}>Cancelar</a>
          <a href="#" className='AgregarCarousel'  onClick={handleSubmit}>Agregar</a>
        </div>
      </div>
    </div>


  )

}


export { FormularioPospcast }