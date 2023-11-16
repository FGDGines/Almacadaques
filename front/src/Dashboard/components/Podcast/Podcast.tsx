import './Podcast.css'
import { podcastData } from '../../../data/listPodcast'

function Podcast() {
  return (
    <>
    {podcastData.map((podcast, index) => (
      <div key={index} className="podcast">
        <div className="IconoEditarPodcast">
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