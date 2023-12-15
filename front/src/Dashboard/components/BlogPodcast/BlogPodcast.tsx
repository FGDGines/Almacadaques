import './BlogPodcast.css'
import { NarbarAdmin } from '../NarbarAdmin/NarbarAdmin'
import { BarSession } from '../barSession/barSession'
import { Podcast } from '../Podcast/Podcast'
import { BtnMas } from '../BtnMas/BtnMas'
import { GlobalContext } from '../../../contexts/GlobalContext'; 
import { useContext } from 'react';

import userImg from '../../../../src/assets/Dashboard-almacadaques/users/user.svg'

function BlogPodcast() {
  const { setLayoutID, setIndexPodcast, setDataPodcast } = useContext(GlobalContext);

  const add = () => {
    setDataPodcast(null)
    setIndexPodcast(-1)
    setLayoutID(37)
  }

  return (
    <div className='BlogPodcast'>
      <NarbarAdmin />
      <div className="BlogPodcastAdmin">
        <BarSession tituloVista='Blog' segundoTitulo='Podcast' nombre='Elisabeth' img={userImg} />
          <div className="conatinerInfopodcast">
            <Podcast/>
          </div>
          <div className="BtonAgregarEventosmain" onClick={add}>
            <BtnMas/>
          </div>
      </div>
    </div>
  )
}

export { BlogPodcast }