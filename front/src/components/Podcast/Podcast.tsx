import './Podcast.css'
import Navbar from '../Navbar/Navbar';
import Franja from '../Franja/Franja';
import Footer from '../Footer/Footer';
import { podcastData } from "../../data/listPodcast";
import { AudioP } from '../ItemPodcast/ItemPodcast'
import React, { useState, useRef, useEffect } from 'react';
import { AudioPlayerProps } from '../../types/typesComponents';


const removeAccents = (text: string) => {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};




const Podcast = () => {
    const [currentPodcast, setCurrentPodcast] = useState<AudioPlayerProps | null>(podcastData[0] || null);

    const handlePlayPodcast = (podcast: AudioPlayerProps) => {
        setCurrentPodcast(podcast);
    };

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState<AudioPlayerProps[]>([]);

    const containerRecentRef = useRef<HTMLDivElement>(null);
    const containerPopularRef = useRef<HTMLDivElement>(null);

    const [containerPodWidth, setContainerPodWidth] = useState<number>(0);

    useEffect(() => {
        const calculateContainerWidth = (containerRef: React.RefObject<HTMLDivElement>) => {
            if (containerRef.current) {
                const container = containerRef.current;
                const firstElement = container.querySelector('.containerPod');
                if (firstElement) {
                    const elementStyles = window.getComputedStyle(firstElement);
                    const elementWidth = firstElement.getBoundingClientRect().width;
                    const marginRight = parseFloat(elementStyles.marginRight || '0');
                    setContainerPodWidth(elementWidth + marginRight);
                }
            }
        };

        calculateContainerWidth(containerRecentRef);
        calculateContainerWidth(containerPopularRef);
    }, []);

    const handleNextSlide = (containerRef: React.RefObject<HTMLDivElement>) => {
        if (containerRef.current) {
            const container = containerRef.current;
            const atEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth;

            if (atEnd) {
                container.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                container.scrollTo({
                    left: container.scrollLeft + containerPodWidth,
                    behavior: 'smooth',
                });
            }
        }
    };
    const handleSelectPodcast = (podcast: AudioPlayerProps) => {
        setCurrentPodcast(podcast);
        setSearchTerm(''); // Limpiar el término de búsqueda al seleccionar un podcast
    };

    const [selectedCategory, setSelectedCategory] = useState('');

    const [filteredResults, setFilteredResults] = useState<AudioPlayerProps[]>([]);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const term = removeAccents(event.target.value).toLowerCase();
        setSearchTerm(term);

        if (term.trim() === '') {
            setFilteredResults([]);
        } else {
            const filteredPodcasts = podcastData.filter(podcast =>
                podcast.titulo && removeAccents(podcast.titulo.toLowerCase()).includes(term)
            );

            setFilteredResults(filteredPodcasts);
        }
    };

    const handleCategoryFilter = (category: string) => {
        setSelectedCategory(category);

        console.log(category)
    
        const term = removeAccents(searchTerm).toLowerCase();

       
    if (searchTerm.trim() === '') {
        const filteredByCategory = podcastData.filter(podcast => {
            const podcastCategory = removeAccents(podcast.categoria?.toLowerCase() || ''); // Asegúrate de manejar 'categoria' como una cadena
            console.log('Podcast Category:', podcastCategory); // Muestra la categoría del podcast en la consola
            const match = podcastCategory === removeAccents(category);
            console.log('Match:', match); // Muestra si hay coincidencia en la consola
            return podcast.categoria && match;
        });
        console.log('Resultados filtrados por categoría:', filteredByCategory); // Muestra los resultados filtrados en la consola

        setFilteredResults(filteredByCategory);

        } else {
            const regex = new RegExp(term.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"));
            console.log(regex);
            const filteredByCategory = podcastData.filter(podcast =>
                podcast.categoria &&
                removeAccents(podcast.categoria.toLowerCase()) === removeAccents(category) &&
                (
                    (podcast.titulo && removeAccents(podcast.titulo.toLowerCase()).match(regex)) ||
                    (podcast.titulo && removeAccents(podcast.titulo.toLowerCase()) === term)
                )
            );

            console.log(filteredByCategory);
            
            setFilteredResults(filteredByCategory);
            console.log(setFilteredResults(filteredByCategory));
        }
    };
    

    let displayedResults = searchTerm.trim() !== '' ? filteredResults : podcastData;


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
                        <input type="search" name="buscador" id="" placeholder='Buscar' value={searchTerm} onChange={handleSearch} />
                    </div>
                </div>

                <div className="ctCategorias">
                    <div className="ctTituloCategoria">
                        <h3>Categorias</h3>
                    </div>
                    <div className="ctBotones">
                        <div className="botonCategoria" onClick={() => handleCategoryFilter('experiencias almacadaques')}>Experiencias Almacadaqués</div>
                        <div className="botonCategoria" onClick={() => handleCategoryFilter('meditaciones')}>Meditaciones</div>
                        <div className="botonCategoria" onClick={() => handleCategoryFilter('almas inspiradoras')}>Almas Inspiradoras</div>
                        <div className="botonCategoria" onClick={() => handleCategoryFilter('libros con alma')}>Libros con Alma</div>
                    </div>
                </div>

                {searchTerm.trim() !== '' && (
                    <div className="ctResultadosBusqueda">
                        {displayedResults.length === 0 ? (
                            <p className='mensaje'>No hay resultados para '{searchTerm}'</p>
                        ) : (
                            displayedResults.map((podcast, index) => (
                                <div className='containerPod' key={index} onClick={() => handleSelectPodcast(podcast)}>
                                    {podcast.titulo && (
                                        <AudioP
                                            url={podcast.url}
                                            titulo={podcast.titulo}
                                            imagen={podcast.imagen}
                                            mostrarDatos={true}
                                            fecha={podcast.fecha}
                                            autor={podcast.autor}
                                            mostrarControles={false}
                                        />
                                    )}
                                </div>
                            ))
                        )}
                    </div>
                )}

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
                        <h2>Mas reciente</h2>
                    </div>
                    <div className="arrow-left">
                        <i className="fas fa-arrow-left"></i>
                    </div>
                    <div className="listaPodcast" ref={containerRecentRef} style={{ display: 'flex', overflowX: 'scroll' }}>
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
                    <div className="arrow-right" onClick={() => handleNextSlide(containerRecentRef)}>
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
                    <div className="listaPodcast" ref={containerPopularRef} style={{ display: 'flex', overflowX: 'scroll' }}>
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
                    <div className="arrow-right" onClick={() => handleNextSlide(containerPopularRef)}>
                        <i className="fa-regular fa-chevron-right"></i>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Podcast;