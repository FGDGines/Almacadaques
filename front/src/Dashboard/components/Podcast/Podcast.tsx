import './Podcast.css'

function Podcast() {
  return (
    <>
      
        <div  className="podcast">
          <div className="IconoEditarPodcast">
            <img src="../../../../src/assets/Dashboard-almacadaques/iconBtn/editar.svg" alt="" className="IconEditarPodcast" />
            <p className="TitleBtnEditarColaborador">Editar</p>
          </div>
          <img src="../../../../src/assets/Dashboard-almacadaques/users/Ellipse 3551 (3).svg" alt="" className="imgUsuarioPodcast" />

       
          <p className="TituloPodcastAdmin">Meditación scanner corporal</p>
          <p className="AutorPodcastAdmin"><span className="TitleAutor">Autor:</span> Rodrigo Lopez</p>
          <p className="AutorPodcastAdmin"><span className="TitleAutor">Fecha:</span> October 17, 2023</p>
          <p className="AutorPodcastAdmin"><span className="TitleAutor">Categoria:</span> libros con alma</p>
          <a href="" className="EnlaceYoutubePodcast">
            <p className='enlaceAdminpodc'> <span className="TitleYoutubePodcast">URL:</span> https://www.youtube.com/embed/uT5fJSzpGd8?si=u3O5KRoAeMhGSEm8</p>
          </a>
        </div>
     
    </>
  )
}

export  {Podcast}