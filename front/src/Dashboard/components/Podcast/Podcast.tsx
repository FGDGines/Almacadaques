import './Podcast.css'
import { useContext, useEffect, useState } from 'react';
import { formDataToObject } from '../../../helpers/Forms';
import { AudioPlayerProps, tpDtmResponse } from '../../../types/typesComponents';
import { fetchDefault } from '../../../helpers/Server';
import { GlobalContext } from '../../../contexts/GlobalContext';
import { getToken } from '../../../helpers/JWT';

function Podcast() {
  const [ data, setData ] = useState<AudioPlayerProps[]>([])
  const { setLayoutID, setIndexPodcast, setDataPodcast } = useContext(GlobalContext);
  
  const handleDelete = (id:number) => {
    // elimina de la base de datos
    const da = new FormData()
    da.set("id", `${id}`)
    da.set("token", getToken())
    const dat = {body: JSON.stringify(formDataToObject(da))}

    fetchDefault("/podcast/delete", dat, (d: tpDtmResponse) => {
      if (d.status != 200) return
      const updatedData = data.filter((item) => item.id !== id);
      setData(updatedData);
    })
  }

  const edit = (id: number, data: AudioPlayerProps) => {
    setDataPodcast(data)
    setIndexPodcast(id)
    setLayoutID(37)
  }

  useEffect(() => {
    const api = async () => {
    const podcast: AudioPlayerProps[] = []
    fetchDefault("/podcast/read", {}, (d: tpDtmResponse) => {
        if(!d.bag) return 
        for (let index = 0; index < d.bag.length; index++) {
            const element: {id: number, url: string, titulo: string, autor: string, imagen: string, fecha: string, categoria: string } = d.bag[index];
            const r = "src/podcast/";
            const value = { 
                id: element.id, 
                url: element.url,
                titulo: element.titulo,
                autor: element.autor,
                fecha: element.fecha,
                categoria: element.categoria,
                imagen: r + element.imagen
            }
            podcast.push(value)
        }
        setData(podcast);
    }) 
    };
    api();
    // eslint-disable-next-line
}, []);

  return (
    <>
    {data.map((podcast, index) => (
      <div key={index} className="podcast">

        <div className="editarContBienestar">
          <div className="accionEliminar" onClick={() => handleDelete(podcast.id)}>
            <img src="../../../../src/assets/Dashboard-almacadaques/iconBtn/Borrar.svg" alt="" className="IconEditarColaboradores"/>
            <p className="TitleBtnEditarColaborador">Eliminar</p>
          </div>
          <div className="IconoEditarPodcast" onClick={() => edit(podcast.id, podcast)}>
            <img src="../../../../src/assets/Dashboard-almacadaques/iconBtn/editar.svg" alt="" className="IconEditarPodcast" />
            <p className="TitleBtnEditarColaborador">Editar</p>
          </div>
        </div>

        
        {/* <img src="../../../../src/assets/Dashboard-almacadaques/users/Ellipse 3551 (3).svg" alt="" className="imgUsuarioPodcast" /> */}
        <img src={podcast.imagen} alt="" className="imgUsuarioPodcast" />

        <p className="TituloPodcastAdmin">{podcast.titulo}</p>
        <p className="AutorPodcastAdmin"><span className="TitleAutor">Autor:</span> {podcast.autor}</p>
        <p className="AutorPodcastAdmin"><span className="TitleAutor">Fecha:</span> {podcast.fecha}</p>
        <p className="AutorPodcastAdmin"><span className="TitleAutor">Categoria:</span> {podcast.categoria}</p>
        <a href={podcast.url} className="EnlaceYoutubePodcast">
          <p className='enlaceAdminpodc'> <span className="TitleYoutubePodcast">URL:</span> {podcast.url}</p>
        </a>
      </div>
    ))}
  </>
  )
}

export  {Podcast}