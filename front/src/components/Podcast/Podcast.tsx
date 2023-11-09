import './Podcast.css'
import Navbar from '../Navbar/Navbar';
import Franja from '../Franja/Franja';
import Footer from '../Footer/Footer';
import { podcastData } from "../../data/listPodcast";
import { VideosPodcast } from '../ItemPodcast/ItemPodcast'
import React, { useState, useRef, useEffect } from 'react';
import { AudioPlayerProps } from '../../types/typesComponents';




const Podcast = () => {

    const [selectedPodcast, setSelectedPodcast] = useState<AudioPlayerProps>(podcastData[0]);
    const [searchInput, setSearchInput] = useState('');
    const [filteredPodcasts, setFilteredPodcasts] = useState<AudioPlayerProps[]>(podcastData);


    const handlePodcastClick = (podcast: AudioPlayerProps) => {
        setSelectedPodcast(podcast);
    };

    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(event.target.value);
        if (event.target.value !== '') {
            filterPodcasts(event.target.value);
        } else {
            setFilteredPodcasts(podcastData);
        }
    };
    const filterPodcasts = (search: string) => {
        const filtered = podcastData.filter((podcast) => {
            const cleanSearch = search.replace(/[^a-zA-Z0-9 ]/g, "").toLowerCase();
            const cleanTitle = podcast.titulo?.replace(/[^a-zA-Z0-9 ]/g, "").toLowerCase();
            const cleanCategory = podcast.categoria?.replace(/[^a-zA-Z0-9 ]/g, "").toLowerCase();
    
            return (
                (cleanTitle?.includes(cleanSearch) ?? false) ||
                (cleanCategory?.includes(cleanSearch) ?? false)
            );
        });
    
        setFilteredPodcasts(filtered);
    };

    return (
        <div className="Podcast">
            <Navbar />
            <Franja text='Podcast' />

            <div className="ctPricipalP">
                <div className="ctBuscador">
                    <div className="search">
                        <label className="search-icon">
                            <i className="fas fa-search"></i>
                        </label>
                        <input
                            type="search"
                            name="buscador"
                            id=""
                            placeholder="Buscar"
                            value={searchInput}
                            onChange={handleSearchInputChange}
                        />
                    </div>
                </div>

                <div className="ctCategorias">
                    <div className="ctTituloCategoria">
                        <h3>Categorias</h3>
                    </div>
                    <div className="ctBotones">
                        <div className="botonCategoria">Experiencias Almacadaqués</div>
                        <div className="botonCategoria" >Meditaciones</div>
                        <div className="botonCategoria" >Almas Inspiradoras</div>
                        <div className="botonCategoria" >Libros con Alma</div>
                    </div>
                </div>

                {searchInput && ( // Mostrar solo si hay texto en el campo de búsqueda
                    <div className="ctResultadosBusqueda">
                        {filteredPodcasts.map((podcast, index) => (
                            <div className="containerPod" key={index} onClick={() => handlePodcastClick(podcast)}>
                                <VideosPodcast
                                    url={selectedPodcast.url}
                                    titulo={selectedPodcast.titulo}
                                    autor={selectedPodcast.autor}
                                    enPodcast={selectedPodcast.enPodcast}
                                />

                            </div>
                        ))}
                    </div>
                )}

                <div className="ctPodcast">

                    <div className="podcastPrincipal">
                        <VideosPodcast
                            url={selectedPodcast.url}
                            titulo={selectedPodcast.titulo}
                            autor={selectedPodcast.autor}
                            enPodcast={selectedPodcast.enPodcast}
                        />
                    </div>
                </div>

                <div className="ctMasrecientes">
                    <div className="titulosPodcast">
                        <h2>Mas reciente</h2>
                    </div>
                    <div className="arrow-left">
                        <i className="fas fa-arrow-left"></i>
                    </div>
                    <div className="listaPodcast">
                        {podcastData.map((podcast, index) => (
                            <div className='containerPod' key={index} onClick={() => handlePodcastClick(podcast)}>
                                <div className="cubrir">
                                </div>
                                <VideosPodcast
                                    url={podcast.url}
                                    titulo={podcast.titulo}
                                    autor={podcast.autor}
                                    enPodcast={podcast.enPodcast}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="arrow-right">
                        <i className="fa-regular fa-chevron-right"></i>
                    </div>
                </div>

                <div className="ctMasvistos">
                    <div className="titulosPodcast">
                        <h2>Mas vistos</h2>
                    </div>
                    <div className="arrow-left">
                        <i className="fas fa-arrow-left"></i>
                    </div>
                    <div className="listaPodcast">
                        {podcastData.map((podcast, index) => (
                            <div className='containerPod' key={index} onClick={() => handlePodcastClick(podcast)}>

                                <div className="cubrir">
                                </div>
                                <VideosPodcast
                                    url={podcast.url}
                                    titulo={podcast.titulo}
                                    autor={podcast.autor}
                                    enPodcast={podcast.enPodcast}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="arrow-right">
                        <i className="fa-regular fa-chevron-right"></i>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Podcast;