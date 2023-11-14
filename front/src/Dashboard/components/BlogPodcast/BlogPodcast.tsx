import './BlogPodcast.css'
import { NarbarAdmin } from '../NarbarAdmin/NarbarAdmin'
import { BarSession } from '../barSession/barSession'
import { Podcast } from '../Podcast/Podcast'

function BlogPodcast() {
  return (
    <div className='BlogPodcast'>
      <NarbarAdmin />
      <div className="BlogPodcastAdmin">
        <BarSession tituloVista='Blog' segundoTitulo='Podcast' nombre='Kristine' img='../../../../src/assets/Dashboard-almacadaques/users/user.svg' />
          <div className="conatinerInfopodcast">
            <Podcast/>
            <Podcast/>
            <Podcast/>
            <Podcast/>
            <Podcast/>
          </div>
      </div>
    </div>
  )
}

export { BlogPodcast }