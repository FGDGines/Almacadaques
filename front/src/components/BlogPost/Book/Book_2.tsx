import HTMLFlipBook from 'react-pageflip';
import Navbar from "../../Navbar/Navbar";
import Franja from "../../Franja/Franja";
import Footer from "../../Footer/Footer";
import { useContext } from "react";
import { GlobalContext } from '../../../contexts/GlobalContext';
import '../BlogPost.css';


const Book2 = () => {
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
                                <img src="../../../src/assets/background/fondo-libro.jpg" alt="" />
                                <div className="ctOverlayBook">
                                    <h1>Almacadaqués</h1>
                                    <h3>5 tips Emociones</h3>
                                    <p>Elisabet Coll-Vinent</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="demoPage" >
                        <div className="port">

                            <div className="titlePortal2">
                                <img src="../../../src/assets/background/fondo-libro.jpg" alt="" />
                                <div className="ctOverlayBook">


                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="demoPage" >

                        <div className="marco">
                            <div className="titlePortal">
                                <div className="imgLibro">
                                    <img src="../../../../src/assets/ImgLibro/3.png" alt="" />
                                </ div>
                                <p>Las emociones nos dan información muy valiosa, pero hay que saber interpretarla…

                                </p>
                                <h3>5 tips para lidiar con las emociones</h3>
                            </div>
                        </div>

                    </div>
                    <div className="demoPage" >

                        <div className="marco">
                            <div className="titlePortal">
                                <h3> 1. Identifícalas</h3>
                                <p>Párate unos segundos para poder reconocer esta emoción… se trata de tristeza? culpa? rabia? vergüenza? miedo? o quizá amor? alegría? Acéptala para poderla regular e integrar</p>
                                <h3>2. Date permiso</h3>
                                <p>Si suprimimos la emoción volverá a aparecer. Si puedes posponerla para 30 minutos más tarde, cuando regrese la intensidad será menor.</p>
                                <h3>3. Escribe un diario de tus emociones</h3>
                                <p>Mantener un “diario emocional” sobre lo que sientes en determinadas situaciones te ayudará </p>

                            </div>
                        </div>

                    </div>
                    <div className="demoPage" >

                        <div className="marco">
                            <div className="titlePortal">
                                <p>a integrar tus emociones y reducir la recurrencia de pensamientos negativos.</p>
                                <h3>4. Tómate un respiro</h3>
                                <p>Respira profundamente 3 o 4 veces y usa las afirmaciones positivas para que te sientas bien.</p>
                                <h3>5. Encuentra el motivo de tus emociones</h3>
                                <p>A largo plazo la clave no está en luchar contra las emociones sino en reconocerlas y saber porque ocurren.</p>

                                <p>Recuerda que existen diferentes maneras de gestionar tus emociones, encuentra la que te ayuda a ti a sentir BIENESTAR.</p>
                                <h3>@almacadaques, noviembre 2023</h3>

                            </div>
                        </div>

                    </div>






                    
                    <div className="demoPage">
                        <div className="port">

                            <div className="titlePortal2">
                                <img src="../../../src/assets/background/fondo-libro.jpg" alt="" />
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
export { Book2 };
