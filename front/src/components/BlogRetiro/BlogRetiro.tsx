import Footer from "../Footer/Footer";
import Franja from "../Franja/Franja";
import Navbar from "../Navbar/Navbar";
import "./BlogRetiro.css"; 
import { DetailBlogRetiro } from "../DetailBlogRetiro/DetailBlogRetiro";


import { GlobalContext } from "../../contexts/GlobalContext"; 
import { useContext, useEffect } from 'react';
import { useState } from 'react';
import { formDataToObject } from "../../helpers/Forms";
import { tpDtmResponse } from "../../types/typesComponents";
import { fetchDefault } from "../../helpers/Server";

interface Retiro {
  index: number;
  day: number[];
  month: number;
  year: number;
  image: string[] | string;
  title: string;
  author?: string;
  description?: string;
  estado: string
}


function BlogRetiro() {
  const { setLayoutID } = useContext(GlobalContext);
  const [showDersail, setShowDersail] = useState(false);
  const [selectedRetiro, setSelectedRetiro] = useState<Retiro | null>(null);
  const [retiros, setRetiros] = useState<Retiro[]>([]);

  const handleTitleClick = (retiro: Retiro) => {
    setSelectedRetiro(retiro);
    setShowDersail(true);
  };
  const handleCloseDetail = () => {
    setSelectedRetiro(null);
    setShowDersail(false);
  };

  const monthNames = [
    "",
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


  const { languageFlag } = useContext(GlobalContext)
  const l = languageFlag.toLowerCase() 
  const da = new FormData()
  da.set("lang", l)
  const data = {body: JSON.stringify(formDataToObject(da))}
    
    
  useEffect(() => {
    const api = async () => {
      const retiro: Retiro[] = []
      fetchDefault("/blog_retiro/read", data, (d: tpDtmResponse) => {
        if(!d.bag) return 
        for (let index = 0; index < d.bag.length; index++) {
          const element: {id: number , day: string, month: number, year: number, author: string, image: string, title_lang: {es: string, en: string , cat: string},  description_lang: {es: string, en: string , cat: string}, estado: string } = d.bag[index];
            const r = "src/blog_retiro/";
            let image: string[] =  JSON.parse(element.image)
            for (let i = 0; i < image.length; i++) {
                image[i] = r + image[i]
            }
            const day: number[] = JSON.parse(JSON.parse(element.day))
            const value = { 
                index: element.id,
                day: day,
                month: element.month,
                year: element.year,
                autor: element.author,
                image: image,
                title: element.title_lang.es || element.title_lang.en || element.title_lang.cat,
                description: element.description_lang.es || element.description_lang.en || element.description_lang.cat,
                estado: element.estado
            }
            console.log(value)
            retiro.push(value)
        }
        setRetiros(retiro);
      }) 
    };
    api();
    // eslint-disable-next-line
  }, [l]);

  return (
    <>
      <div className="BlogRetiros">
        <Navbar />
        <div className="informacionderetiro" style={{ display: showDersail ? 'block' : 'none' }} >
          {showDersail && <DetailBlogRetiro retiro={selectedRetiro as Retiro} onClose={handleCloseDetail} />}
        </div>
        <Franja text="Blog Retiros" />
        <div className="blog_Retiro">

          {retiros.map((retiro) => (
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
                <div className="titleRetiroUser">
                  <h4 onClick={() => handleTitleClick(retiro)}>Autor: {retiro.author}</h4>
                </div>
                <div className="titleRetiroUser">
                  <h4 onClick={() => handleTitleClick(retiro)}>Estado: {retiro.estado}</h4>
                </div>
                <div className="titleRetiroUser">
                  <h5 onClick={() => handleTitleClick(retiro)}>{retiro.description}</h5>
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
