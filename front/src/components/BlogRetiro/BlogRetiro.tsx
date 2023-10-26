import Footer from "../Footer/Footer";
import Franja from "../Franja/Franja";
import Navbar from "../Navbar/Navbar";
import "./BlogRetiro.css";
import retiroInfo from "../../data/blogRetiro";
import { DetailBlogRetiro } from "../DetailBlogRetiro/DetailBlogRetiro";
import { useState } from "react";

interface Retiro {
  index: number;
  day: number;
  month: number;
  year: number;
  image: string;
  title: string;
  author: string;
  description?: string;
}

function BlogRetiro() {
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
    "NULL",
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
        <div className="informacionderetiro"  style={{ display: showDersail ? 'block' : 'none' }} >
        {showDersail && <DetailBlogRetiro retiro={selectedRetiro} onClose={handleCloseDetail} />}
      </div>
        <Franja text="Blog Retiros" />
        <div className="blog_Retiro">
          {retiroInfo.map((retiro) => (
            <div className="infoCtRetiro" key={retiro.index}>
              <div className="imgRetiro">
                <img src={retiro.image} alt="Imagen de retiro" />
              </div>
              <div className="infoRetiro">
                <div className="titleRetiro">
                  <h4 onClick={() => handleTitleClick(retiro)}>{retiro.title}</h4>
                </div>
                <div className="time_aut">
                  <div className="time">
                    <p>
                      {monthNames[retiro.month]} {retiro.day}, {retiro.year}
                    </p>
                  </div>
                  <div className="authorRetiro">
                    <h4>{retiro.author}</h4>
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
