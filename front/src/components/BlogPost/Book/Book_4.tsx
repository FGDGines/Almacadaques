import HTMLFlipBook from 'react-pageflip';
import Navbar from "../../Navbar/Navbar";
import Franja from "../../Franja/Franja";
import Footer from "../../Footer/Footer";
import { useContext } from "react";
import { GlobalContext } from '../../../contexts/GlobalContext';
import '../BlogPost.css';


const Book4 = () => {
    const { setLayoutID } = useContext(GlobalContext);
    const handleBookInit = () => {
        console.log('El libro se ha inicializado.');
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
                                    <h3>5 tips para fluir</h3>
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
                                    <img src="../../../../src/assets/ImgLibro/5.jpg" alt="" />
                                </ div>
                                

                            </div>
                        </div>

                    </div>
                    <div className="demoPage" >

                        <div className="marco">
                            <div className="titlePortal">
                                <h3>Tip de Bienestar: Fluir con la vida</h3>
                                <h4>Aquello a lo que nos resistimos persiste y aquello con lo que fluimos nos permite avanzar y crecer. Cuando estoy cerca del mar fluyo mejor con la vida.
                                </h4>
                                <p>Aquí te comparto 5 consejos para fluir con la vida:</p>
                                <br />
                                <p>1. Acepta el cambio: Aprende a adaptarte y fluir con los cambios que se presenten en tu vida. No resistas, acepta y busca la oportunidad en cada situa</p>
                                <br />
                                <p>2. Vive el presente: Concéntrate en el aquí y ahora. Deja de preocuparte por el pasado o el futuro y disfruta plenamente cada momento.</p>
                                <br />
                                
                            </div>
                        </div>

                    </div>

                    <div className="demoPage" >

                        <div className="marco">
                            <div className="titlePortal">
                            <p>3. Sigue tu intuición: Escucha tu voz interior y confía en tus instintos. Sigue tu intuición para tomar decisiones y guiar tus acciones.</p>
                                <br />
                                <p>4. Deja ir el control: Aprende a soltar el control y confiar en el proceso de la vida. No intentes controlar todo, permite que las cosas fluyan naturalmente.</p>
                                <br />
                                <p>5. Encuentra tu pasión: Descubre lo que te apasiona y haz más de eso. Cuando haces lo que amas, te sentirás más conectado y en armonía con la vida.</p>
                                <h3>@almacadaques, diciiembre 2023</h3>
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
export { Book4 };
