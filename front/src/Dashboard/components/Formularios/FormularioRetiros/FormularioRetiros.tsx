import "./FormularioRetiros.css"
import { NarbarAdmin } from '../../NarbarAdmin/NarbarAdmin';
import { BarSession } from '../../barSession/barSession';
import { useState, ChangeEvent, FormEvent, useContext } from 'react';
import { getToken } from "../../../../helpers/JWT";
import { GlobalContext } from "../../../../contexts/GlobalContext";
import { fetchForm } from "../../../../helpers/Server";
import { tpDtmResponse } from "../../../../types/typesComponents";

interface FormData {
    Titulo: string;
    Autor: string
    Fecha: Date,
    Descripcion: string;
    Estado: string;
    archivo: File | null;
  }

function FormularioRetiros() {
  const { languageFlag, indexBlogRetiro } = useContext(GlobalContext)
  const lf = languageFlag.toLowerCase() 


  function formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  const separatedDate = (date: Date): number[] => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return [day, month, year];
  }

  const [formData, setFormData] = useState<FormData>({
    Titulo: '',
    Autor: '',
    Fecha: new Date(),
    Descripcion: '',
    Estado: '',
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

    
  const handleSubmit = () => {
    const da = new FormData()
    if (formData.Titulo) {
        da.append(`title_${lf}`, formData.Titulo)
    }
    if (formData.Autor) {
        da.append("author", formData.Autor)
    }
    if (formData.Fecha){
      const sd = separatedDate(formData.Fecha)
      console.log(sd[0], sd[1], sd[2])
      da.append("day", `[${sd[0]},${sd[0]}]`)
      da.append("month", `${sd[1]}`)
      da.append("year", `${sd[2]}`)
    }
    if (formData.Descripcion) {
        da.append(`descripction_${lf}`, formData.Descripcion)
    }
    da.append("token", getToken()) 
    
    if (formData.archivo) {
        da.append("src", formData.archivo);
        da.append("fileExtension", "jpg");
    }
    console.log(indexBlogRetiro)
    if (indexBlogRetiro != -1) {
        da.append("id", `${indexBlogRetiro}`)
        fetchForm("/blog_retiro/update", da, (d: tpDtmResponse) => {
          console.log(d)
        })

    } else {
        da.set("title_es", formData.Titulo)
        da.set("title_en", formData.Titulo)
        da.set("title_cat", formData.Titulo)
        da.set("description_es", formData.Titulo)
        da.set("description_en", formData.Titulo)
        da.set("description_cat", formData.Titulo)
        da.set("index", "1")
        fetchForm("/blog_retiro/create", da, (d: tpDtmResponse) => {
          console.log(d)
        })
    }
  };
  return (
    <div className="FormularioRetiros">
    <NarbarAdmin></NarbarAdmin>

    <div className="contenidoFormCarrousel">
      <BarSession direccion={22} tituloVista='Retiro' segundoTitulo='Añadir nuevo Retiro' nombre='Kristine' img='../../../../src/assets/Dashboard-almacadaques/users/user.svg' />


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

      <label className='labelsCarrousel' form='Descripcion'>Descripcion</label>
      <input className='inputsFormCarrousel'
        type="text"
        name="Descripcion"
        value={formData.Descripcion}
        onChange={handleInputChange}
      />
      <label className='labelsCarrousel' form='Estado'>Estado</label>
      <input className='inputsFormCarrousel'
        type="text"
        name="Estado"
        value={formData.Estado}
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

export { FormularioRetiros }