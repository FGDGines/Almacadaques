import { useEffect} from "react";
import Splide from '@splidejs/splide';
import './DetailBlogRetiro.css';

interface Retiro {
    index: number;
    day: number | number[];
    month: number;
    year: number;
    image: string[] | string;
    title: string;
    author?: string;
    description?: string;
}

interface DetailBlogRetiroProps {
    retiro: Retiro | null;
    onClose: () => void;
}

const monthNames = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
];

function DetailBlogRetiro({ retiro, onClose }: DetailBlogRetiroProps) {
    useEffect(() => {
        if (retiro) {
          const handleResize = () => {
            const width = window.innerWidth;
            let perPage;
    
            if (width <= 450) {
              perPage = 1;
            } else if (width <= 780) {
              perPage = 2;
            } else {
              perPage = 3;
            }
    
            const splide = new Splide('.splide', {
              perPage: perPage,
              rewind: true,
            });
    
            splide.mount();
          };
    
          handleResize();
          window.addEventListener('resize', handleResize);
    
          return () => {
            window.removeEventListener('resize', handleResize);
          };
        }
      }, [retiro]);


  if (!retiro) {
    return null;
  }


    return (
        <div className="previRetiro">
            <div className="ctPreviRetiro">
                <div className="closePreviRetiro" onClick={onClose}>
                    <img src="../../../src/assets/images/cerrar.png" alt="Cerrar" />
                </div>

                <section className="splide" aria-label="Ejemplo HTML básico de Splide">
                <ul className="splide__pagination"></ul>
                    <div className="splide__track">
                        <ul className="splide__list">
                            {Array.isArray(retiro.image)
                                ? retiro.image.map((img, index) => (
                                    <li className="splide__slide" key={index}>
                                        <img src={img} alt={`Imagen ${index + 1}`} />
                                    </li>
                                ))
                                : (
                                    <li className="splide__slide">
                                        <img src={retiro.image} alt="Imagen" />
                                    </li>
                                )}
                        </ul>
                    </div>
                    
                </section>


                <div className="titlePreviRetiro">
                    <h4>{retiro.title}</h4>
                </div>
                <div className="dataPreviRetiro">
                    <h4>{`Dato: ${monthNames[retiro.month]} ${retiro.day}, ${retiro.year}`}</h4>
                    <h4 className='firma'>{retiro.author}</h4>
                </div>
                <div className="descripPreviRetiro">
                    <p>{retiro.description}</p>
                </div>
            </div>
        </div>
    );
}

export { DetailBlogRetiro };
