import './Podcast.css'
import { podcastData } from '../../../data/listPodcast'
import { useContext, useEffect, useState } from 'react';
import { formDataToObject } from '../../../helpers/Forms';
import { AudioPlayerProps, tpDtmResponse } from '../../../types/typesComponents';
import { fetchDefault } from '../../../helpers/Server';
import { GlobalContext } from '../../../contexts/GlobalContext';

function Podcast() {
  const [ data, setData ] = useState<AudioPlayerProps[]>([])
  const { setLayoutID, setIndexPodcast } = useContext(GlobalContext);
  

  const edit = (id: number) => {
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
            const value = { 
                id: element.id, 
                url: element.url,
                titulo: element.titulo,
                autor: element.autor,
                fecha: element.fecha,
                categoria: element.categoria
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
        <div className="IconoEditarPodcast" onClick={() => edit(podcast.id)}>
          <img src="../../../../src/assets/Dashboard-almacadaques/iconBtn/editar.svg" alt="" className="IconEditarPodcast" />
          <p className="TitleBtnEditarColaborador">Editar</p>
        </div>
        <img src="../../../../src/assets/Dashboard-almacadaques/users/Ellipse 3551 (3).svg" alt="" className="imgUsuarioPodcast" />

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