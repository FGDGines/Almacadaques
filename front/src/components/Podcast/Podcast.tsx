import './Podcast.css'
import Navbar from '../Navbar/Navbar';
import Franja from '../Franja/Franja';
import Footer from '../Footer/Footer';
import FormDefault from '../FormDefault/FormDefault';
import { formDataToObject } from '../../helpers/Forms';
import { fetchDefault } from '../../helpers/Server';
import { podcastData } from "../../data/listPodcast";
import { AudioP } from '../ItemPodcast/ItemPodcast'
import React, { useState } from 'react';
import { AudioPlayerProps } from '../../types/typesComponents';




const Podcast = () => {

    const enviarFormulario = (bag: FormData) => {
        bag.set('fragment', 'Contactar')
        fetchDefault('/mail/create', { body: JSON.stringify(formDataToObject(bag)) })
    }
    const [currentPodcast, setCurrentPodcast] = useState<AudioPlayerProps | null>(podcastData[0] || null); // Establecer el primer podcast como inicial

    const handlePlayPodcast = (podcast: AudioPlayerProps) => {
        setCurrentPodcast(podcast);
    };

    return <div className="Podcast">
        <Navbar />
        <Franja text='Podcast' />

        <div className="ctPricipalP">

            <div className="ctBuscador">
                <div className="search">
                    <label className="search-icon">
                        <i className="fas fa-search"></i>
                    </label>
                    <input type="search" name="buscador" id="" placeholder='Buscar' />
                </div>
            </div>

            <div className="ctCategorias">

                <div className="ctTituloCategoria">
                    <h3>Categorias</h3>
                </div>
                <div className="ctBotones">
                    <div className="botonCategoria">e-commerce</div>
                    <div className="botonCategoria">e-commerce</div>
                    <div className="botonCategoria">e-commerce</div>
                    <div className="botonCategoria">e-commerce</div>
                    <div className="botonCategoria">e-commerce</div>
                </div>

            </div>

            <div className="ctPodcast">
                {currentPodcast && (
                    <AudioP
                        url={currentPodcast.url}
                        titulo={currentPodcast.titulo}
                        imagen={currentPodcast.imagen}
                        mostrarDatos={true}
                        enPodcast={false}
                    />
                )}
            </div>
            <div className="ctMasrecientes">

                <div className="titulosPodcast">
                    <h2>
                        Mas reciente
                    </h2>
                </div>

                <div className="listaPodcast">
                    {podcastData.map((podcast, index) => (
                        <div className='containerPod' key={index} onClick={() => handlePlayPodcast(podcast)}>
                            <AudioP
                                url={podcast.url}
                                titulo={podcast.titulo}
                                imagen={podcast.imagen}
                                mostrarDatos={true}
                                fecha={podcast.fecha}
                                autor={podcast.autor}
                                mostrarControles={false}
                            />
                        </div>
                    ))}

                </div>


            </div>
            <div className="ctMasvistos">
                <div className="titulosPodcast">
                    <h2>
                        Mas vistos
                    </h2>
                </div>

                <div className="listaPodcast">
                    {podcastData.map((podcast, index) => (
                        <div className='containerPod' key={index} onClick={() => handlePlayPodcast(podcast)}>
                            <AudioP
                                url={podcast.url}
                                titulo={podcast.titulo}
                                imagen={podcast.imagen}
                                mostrarDatos={true}
                                fecha={podcast.fecha}
                                autor={podcast.autor}
                                mostrarControles={false}
                            />
                        </div>
                    ))}
                </div>

            </div>

        </div>
        <Footer />
    </div>

}

export default Podcast 