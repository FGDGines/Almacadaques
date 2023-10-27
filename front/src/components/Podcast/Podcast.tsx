import './Podcast.css'
import Navbar from '../Navbar/Navbar';
import Franja from '../Franja/Franja';
import Footer from '../Footer/Footer';
import FormDefault from '../FormDefault/FormDefault';
import { formDataToObject } from '../../helpers/Forms';
import { fetchDefault } from '../../helpers/Server';
import { AudioPlayer } from "../ItemPodcast/AudioPlayer";
import { podcastData } from "../../data/listPodcast";



const Podcast = () => {

    const enviarFormulario = (bag: FormData) => {
        bag.set('fragment', 'Contactar')
        fetchDefault('/mail/create', { body: JSON.stringify(formDataToObject(bag)) })
    }



    return <div className="Podcast">
        <Navbar />
        <Franja text='Podcast' />

        <div className="ctPricipalPod">
            <div className="ctFormVistos">

                <div className="ctMiniaturas">
                     <h2 className='ctTitulos'>Mas recientes</h2>
                    <div className="ctMasrecientes">
                        {podcastData.map((podcast, index) => (
                            <AudioPlayer
                                key={index}
                                url={podcast.url}
                                title={podcast.title}
                                thumbnail={podcast.thumbnail}
                                hideControls={true} 
                            />
                        ))}
                    </div>  
                    <h2 className='ctTitulos'>Mas vistos</h2>
                    <div className="ctMasvistos">
                    
                        {podcastData.map((podcast, index) => (
                            <AudioPlayer
                                key={index}
                                url={podcast.url}
                                title={podcast.title}
                                thumbnail={podcast.thumbnail}
                                hideControls={true} 
                            />
                        ))}

                    </div>


                </div>

                <div className="formPodcast">
                    <FormDefault hSubmit={enviarFormulario} />
                </div>


            </div>

            <div className="ctPodcast">
                {podcastData.map((podcast, index) => (
                    <AudioPlayer
                        key={index}
                        url={podcast.url}
                        title={podcast.title}
                        author={podcast.author}
                        thumbnail={podcast.thumbnail}
                        reseña={podcast.reseña}
                        
                    />
                ))}
            </div>

        </div>
        <Footer />
    </div>

}

export default Podcast 