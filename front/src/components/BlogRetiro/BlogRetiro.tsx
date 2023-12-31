import Footer from "../Footer/Footer";
import Franja from "../Franja/Franja";
import Navbar from "../Navbar/Navbar";
import "./BlogRetiro.css";
import retiroInfo from "../../data/blogRetiro";
import { DetailBlogRetiro } from "../DetailBlogRetiro/DetailBlogRetiro";


import { GlobalContext } from "../../contexts/GlobalContext"; 
import { useContext } from 'react';
import { useState } from 'react';

interface Retiro {
  index: number;
  day: number[];
  month: number;
  year: number;
  image: string[] | string;
  title: string;
  author: string;
  description?: string;
}


function BlogRetiro() {
  const { setLayoutID } = useContext(GlobalContext);
  const [showDersail, setShowDersail] = useState(false);
  const [selectedRetiro, setSelectedRetiro] = useState<Retiro | null>(null);

  const handleTitleClick = (retiro: Retiro) => {
    setSelectedRetiro(retiro);
    setShowDersail(true);
  };
  const handleCloseDetail = () => {
    setSelectedRetiro(null);
    setShowDersail(false);
  };

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

  return (
    <>
      <div className="BlogRetiros">
        <Navbar />
        <div className="informacionderetiro" style={{ display: showDersail ? 'block' : 'none' }} >
          {showDersail && <DetailBlogRetiro retiro={selectedRetiro as Retiro} onClose={handleCloseDetail} />}
        </div>
        <Franja text="Blog Retiros" />
        <div className="blog_Retiro">

          {retiroInfo.map((retiro) => (
            <div className="infoCtRetiro" key={retiro.index}>
              <div className="imgRetiro">
                {retiro.estado === "Completo" && <div className="cintaCompleto">Completo</div>}
                {retiro.estado === "Aplazado" && <div className="cintaAplazado">Aplazado</div>}
                {retiro.estado === "Plazas limitadas" && <div className="cintaPlazasLimitadas">Plazas limitadas</div>}
                <img src={retiro.image[0]} alt="Imagen de retiro" />
              </div>

              <div className="infoRetiro">
                <div className="titleRetiroUser">
                  <h4 onClick={() => handleTitleClick(retiro)}>{retiro.title}</h4>
                </div>
                <div className="time_aut">
                  <div className="time">
                    <p>
                      {retiro.day.length === 1
                        ? `el ${retiro.day[0]} de ${monthNames[retiro.month]}, ${retiro.year}`
                        : `del ${retiro.day[0]} al ${retiro.day[retiro.day.length - 1]} de ${monthNames[retiro.month]}, ${retiro.year}`}
                    </p>

                  </div>
                  <div className="authorRetiro" onClick={() => setLayoutID(6)}>
                    <a href="#">Inscribirse</a>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
        <Footer />

      </div>




    </>
  );
}

export { BlogRetiro };
