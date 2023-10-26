
import Footer from "../Footer/Footer";
import Franja from "../Franja/Franja";
import Navbar from "../Navbar/Navbar";
import "./BlogRetiro.css";
import retiroInfo from "../../data/blogRetiro"; // Importa el array retiroInfo

function BlogRetiro() {
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
        <Franja text="Blog Retiros" />
        <div className="blog_Retiro">
          {retiroInfo.map((retiro) => (
            <div className="infoCtRetiro" key={retiro.index}>
              <div className="imgRetiro">
                <img src={retiro.image} alt="Imagen de retiro" />
              </div>
              <div className="infoRetiro">
                <div className="titleRetiro">
                  <h4>{retiro.title}</h4>
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
