import HTMLFlipBook from 'react-pageflip';
import Navbar from "../../Navbar/Navbar";
import Franja from "../../Franja/Franja";
import Footer from "../../Footer/Footer";
import { useContext } from "react";
import { GlobalContext } from '../../../contexts/GlobalContext';
import '../BlogPost.css';


const Book3 = () => {
    const { setLayoutID } = useContext(GlobalContext);
    const handleBookInit = () => {
        // console.log('El libro se ha inicializado.');
    };




    return (
        <div className="BlogPost">
            <Navbar />
            <Franja text="Tips de Bienestar" />
            <div className="BookItem">
                <HTMLFlipBook
                    width={2500}
                    height={2500}
                    className={"libro"}
                    style={{
                        width: "85vw",
                        height: "25vw",
                    }}
                    startPage={0}
                    size={"stretch"}
                    minWidth={100}
                    maxWidth={3000}
                    minHeight={500}
                    maxHeight={5000}
                    drawShadow={true}
                    flippingTime={1000}
                    usePortrait={true}
                    startZIndex={1}
                    autoSize={true}
                    maxShadowOpacity={0.5}
                    showCover={true}
                    mobileScrollSupport={true}
                    clickEventForward={true}
                    useMouseEvents={true}
                    swipeDistance={30}
                    showPageCorners={true}
                    disableFlipByClick={false}
                    onInit={handleBookInit}

                >



                    <div className="demoPage" >
                        <div className="port">
                            <div className="titlePortal2">
                                <img src="../../../src/assets/ImgLibro/portada.jpeg" alt="" />
                                <div className="ctOverlayBook">
                                    <div className="titleCortoPor">
                                        <h1>Almacadaqués</h1>
                                        <h3>5 tips lidiar dia a dia</h3>
                                    </div>
                                    <p>Elisabet Coll-Vinent</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="demoPage" >
                        <div className="port">

                            <div className="titlePortal2">
                                <img src="../../../src/assets/ImgLibro/portada.jpeg" alt="" />
                                <div className="ctOverlayBook">

                                </div>
                            </div>
                        </div>
                    </div>




                    <div className="demoPage" >

                        <div className="marco">
                            <div className="titlePortal">
                                <div className="imgLibro">
                                    <img src="../../../../src/assets/ImgLibro/4.jpg" alt="" />
                                </ div>
                                <h4>Tip de Bienestar: “Menos es mas”</h4>
                                <p>5 tips para lidiar con tu día a día practicando “menos es mas”</p>
                                <h3>1. Estar presente</h3>
                                <p>Cuando estoy presente con lo que estoy haciendo (por ejemplo lavando los platos, saboreando la comida, hablando con la vecina, leyendo, etc) </p>



                            </div>
                        </div>

                    </div>
                    <div className="demoPage" >

                        <div className="marco">
                            <div className="titlePortal">
                                <p>no me dejo llevar por el futuro incierto y desconocido ni por la nostalgia del pasado.</p>
                                <h3>2. Céntrate en dar lo mejor de ti</h3>
                                <p>Si das lo máximo de ti en cada circunstancia y persona con la que te cruzas te sentirás bien</p>
                                <h3>3. No te apegues a los resultados</h3>
                                <p>Si tu actitud es constructiva y das lo mejor de ti, todo irá lo mejor que puede ir, no tiene sentido estar pendiente de los resultados y apegarte a ellos ya que siempre habrá variables que no dependen de ti.</p>
                                <h3>4. No des vueltas a lo que podría ser</h3>
                                <p>Cuando simplificas tus tareas diarias (evitando </p>



                            </div>
                        </div>

                    </div>
                    <div className="demoPage" >

                        <div className="marco">
                            <div className="titlePortal">
                                <p>agendas llenas de actividades que no te aportan valor), estás presente, das lo mejor de ti y no te apegas a los resultados, te sentirás bien y dejarás de dar vueltas a los que podría ser.</p>
                                <h3>5. No te compliques la vida</h3>
                                <p>Cuando fluyes con la vida practicando los tips anteriores todo es fácil y sucede lo que tiene que suceder.</p>
                                <p>Recuerda que tu tienes la capacidad de decidir cómo quieres lidiar tu día a día,  y sentir BIENESTAR.</p>
                                <h3>@almacadaques, noviembre 2023</h3>

                            </div>
                        </div>

                    </div>







                    <div className="demoPage">
                        <div className="port">

                            <div className="titlePortal2">
                                <img src="../../../src/assets/ImgLibro/portada.jpeg" alt="" />
                                <div className="ctOverlayBook">
                                    <h3 className='FinalLibro'>© Elisabet Coll-Vinent@almacadaques.com</h3>
                                </div>
                            </div>
                        </div>
                    </div>



                </HTMLFlipBook>
                <div className="ItemBookUser">
                    <div className="carduser">
                        <ul className='UlLista'>
                            <a href="#" className='EnlacesItem ' onClick={() => setLayoutID(5)}>5 Tips Parar</a>
                            <a href="#" className='EnlacesItem' onClick={() => setLayoutID(33)}>5 Tips Abundancia</a>
                            <a href="#" className='EnlacesItem' onClick={() => setLayoutID(34)}>5 tips Emociones</a>
                            <a href="#" className='EnlacesItem' onClick={() => setLayoutID(35)}>5 tips lidiar dia a dia </a>
                            <a href="#" className='EnlacesItem' onClick={() => setLayoutID(36)}>5 tips para fluir</a>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
export { Book3 };
