import "./FormularioRetiros.css"
import { NarbarAdmin } from '../../NarbarAdmin/NarbarAdmin';
import { BarSession } from '../../barSession/barSession';
import { useState, ChangeEvent, useContext, useEffect } from 'react';
import { getToken } from "../../../../helpers/JWT";
import { GlobalContext } from "../../../../contexts/GlobalContext";
import { fetchDefault, fetchForm } from "../../../../helpers/Server";
import { formDataToObject } from "../../../../helpers/Forms";
import { tpDtmResponse } from "../../../../types/typesComponents"; 

import userImg from '../../../../../src/assets/Dashboard-almacadaques/users/user.svg'
import { mostrarAlerta } from "../../../../helpers/MostrarAlerta";


interface FormData {
    Titulo_es: string;
    Titulo_en: string;
    Titulo_cat: string;
    Autor: string
    Fecha: Date,
    day: number;
    Descripcion_es: string;
    Descripcion_en: string;
    Descripcion_cat: string;
    Estado: string;
    archivo: File | null;
  }

function FormularioRetiros() {
  const { indexBlogRetiro, setLayoutID, dataRetiro } = useContext(GlobalContext)


  function formatDate(date: Date): string {
    const year = date.getUTCFullYear();
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
    const day = date.getUTCDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  const separatedDate = (date: Date): number[] => {
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth() + 1;
    const day = date.getUTCDate();
    return [day, month, year];
  }

  const [formData, setFormData] = useState<FormData>({
    Titulo_es: '',
    Titulo_en: '',
    Titulo_cat: '',
    Autor: '',
    Fecha: new Date(),
    day: 0,
    Descripcion_es: '',
    Descripcion_en: '',
    Descripcion_cat: '',
    Estado: '',
    archivo: null,
  });
  const [imageURL, setImageURL] = useState<string | null>(dataRetiro?.image[0] || null);

  
  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
  
    if (name === "Fecha") {
      const [year, month, day] = value.split('-').map(Number);
      setFormData({
        ...formData,
        [name]: new Date(Date.UTC(year, month - 1, day)),
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
      Titulo_es: '',
      Titulo_en: '',
      Titulo_cat: '',
      Autor: '',
      Fecha: new Date(),
      day: 0,
      Descripcion_es: '',
      Descripcion_en: '',
      Descripcion_cat: '',
      Estado: '',
      archivo: null,
    })
    setImageURL("")
  }
    
  const handleSubmit = () => {
    const da = new FormData()
    if (formData.Titulo_es) {
      da.append("title_es", formData.Titulo_es)
    }
    if (formData.Titulo_en) {
      da.append("title_en", formData.Titulo_en)
    }
    if (formData.Titulo_cat) {
      da.append("title_cat", formData.Titulo_cat)
    }
    if (formData.Autor) {
        da.append("author", formData.Autor)
    }
    if (!isNaN(formData.Fecha.getTime())){
      const sd = separatedDate(formData.Fecha)
      let day: number = sd[0]
      if (formData.day) {
        day = formData.day
      }
      da.append("day", `[${sd[0]}, ${day}]`)
      da.append("month", `${sd[1]}`)
      da.append("year", `${sd[2]}`)
    }
    if (formData.Descripcion_es) {
        da.append("description_es", formData.Descripcion_es)
    }
    if (formData.Descripcion_en) {
        da.append("description_en", formData.Descripcion_en)
    }
    if (formData.Descripcion_cat) {
        da.append("description_cat", formData.Descripcion_cat)
    }
    if (formData.Estado) {
      da.append("estado", formData.Estado)
    }
    da.append("token", getToken()) 
    
    if (formData.archivo) {
        da.append("src", formData.archivo);
        da.append("image_number", "0")
        da.append("fileExtension", "jpg");
    }
    if (indexBlogRetiro != -1) {
        da.append("id", `${indexBlogRetiro}`)
        fetchForm("/blog_retiro/update", da, (d: tpDtmResponse) => {
          if (d.status == 200) {
             clear()
          }
          mostrarAlerta(d)
        })

    } else {
        da.set("index", "1")
        fetchForm("/blog_retiro/create", da, (d: tpDtmResponse) => {
          if (d.status == 200) {
             clear()
          }
          mostrarAlerta(d)
        })
    }
  };

  useEffect(() => {
    const api = async () => {
        if (indexBlogRetiro == -1) return
        const da = new FormData()
        da.set("id", `${indexBlogRetiro}`)
        const dat = {body: JSON.stringify(formDataToObject(da))}
        fetchDefault("/blog_retiro/readbyid", dat, (d: tpDtmResponse) => {
            if(!d.bag) return 
            for (let index = 0; index < d.bag.length; index++) {
              const element: {id: number , day: string, month: number, year: number, author: string, image: string, title_lang: {es: string, en: string , cat: string},  description_lang: {es: string, en: string , cat: string}, estado: string } = d.bag[index];
              const r = "src/blog_retiro/";
              let image: string[] =  JSON.parse(element.image)
              for (let i = 0; i < image.length; i++) {
                  image[i] = r + image[i]
              }
              const day: number[] = JSON.parse(JSON.parse(element.day))
              
              const date = new Date(`${element.year}-${element.month}-${day[0]}`);

              const value = { 
                  Titulo_es: element.title_lang.es,
                  Titulo_en: element.title_lang.en,
                  Titulo_cat: element.title_lang.cat,
                  Autor: element.author,
                  Fecha: date,
                  day: day[1],
                  Descripcion_es: element.description_lang.es,
                  Descripcion_en: element.description_lang.en,
                  Descripcion_cat: element.description_lang.cat,
                  Estado: element.estado,
                  archivo: null,
              }
              setFormData(value);
            }
        }) 
    };
    api();
        // eslint-disable-next-line
}, []);

  return (
    <div className="FormularioRetiros">
    <NarbarAdmin></NarbarAdmin>

    <div className="contenidoFormCarrousel">
      <BarSession direccion={22} tituloVista='Retiro' segundoTitulo={`${indexBlogRetiro == -1 ? "Añadir": "Editar"} Retiro`} nombre='Elisabeth' img={userImg} />


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
      <label className='labelsCarrousel' form='Titulo_es'>Titulo_es</label>
      <input className='inputsFormCarrousel'
        type="text"
        name="Titulo_es"
        value={formData.Titulo_es}
        onChange={handleInputChange}
      />
 
      <label className='labelsCarrousel' form='Titulo_en'>Titulo_en</label>
      <input className='inputsFormCarrousel'
        type="text"
        name="Titulo_en"
        value={formData.Titulo_en}
        onChange={handleInputChange}
      />
 
      <label className='labelsCarrousel' form='Titulo_es'>Titulo_cat</label>
      <input className='inputsFormCarrousel'
        type="text"
        name="Titulo_cat"
        value={formData.Titulo_cat}
        onChange={handleInputChange}
      />




      <label className='labelsCarrousel ' form='Fecha'>Fecha</label>
      <input className='inputsFormCarrousel InicioEvento'
        type="date"
        name="Fecha"
        value={formatDate(formData.Fecha)}
        onChange={handleInputChange}
      />

      <label className='labelsCarrousel' form='day'>Dia fin</label>
      <input className='inputsFormCarrousel'
        type="number"
        name="day"
        value={formData.day}
        onChange={handleInputChange}
      />




      <label className='labelsCarrousel' form='Autor'>Autor</label>
      <input className='inputsFormCarrousel'
        type="text"
        name="Autor"
        value={formData.Autor}
        onChange={handleInputChange}
      />

      <label className='labelsCarrousel' form='Descripcion_es'>Descripcion_es</label>
      <input className='inputsFormCarrousel'
        type="text"
        name="Descripcion_es"
        value={formData.Descripcion_es}
        onChange={handleInputChange}
      />

      <label className='labelsCarrousel' form='Descripcion_en'>Descripcion_en</label>
      <input className='inputsFormCarrousel'
        type="text"
        name="Descripcion_en"
        value={formData.Descripcion_en}
        onChange={handleInputChange}
      />

      <label className='labelsCarrousel' form='Descripcion_cat'>Descripcion_cat</label>
      <input className='inputsFormCarrousel'
        type="text"
        name="Descripcion_cat"
        value={formData.Descripcion_cat}
        onChange={handleInputChange}
      />

      <label className='labelsCarrousel' form='Estado'>Estado</label>
      <select className='inputsFormCarrousel'
        name="Estado"
        value={formData.Estado}
        onChange={handleInputChange}
>
    <option value="" selected disabled >Seleccione un estado</option>
    <option value="Plazas limitadas">Plazas limitadas</option>
    <option value="Completo">Completo</option>
    <option value="Aplazado">Aplazado</option>
</select>

      
      
    </div>
  </form>


  <div className="botonesFormCarrousel">
    <a href="#" className='CancelarCarousel' onClick={() => setLayoutID(22)}>Cancelar</a>
    <a href="#" className='AgregarCarousel'  onClick={handleSubmit}>Agregar</a>
  </div>
</div>
</div>


)

}

export { FormularioRetiros }