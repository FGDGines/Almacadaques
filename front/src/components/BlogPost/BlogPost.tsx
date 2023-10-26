import Navbar from "../Navbar/Navbar";
import Franja from "../Franja/Franja";
import Footer from "../Footer/Footer";
import './BlogPost.css';
import blogData from '../../../src/data/blogPost';

const BlogPost = () => {
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
    <div className="BlogPost">
      <Navbar />
      <Franja text="Tips de Bienestar" />

        <div className="infoBlogPost">
          {blogData.map((data) => (
            <div className="blog-item" key={data.index}>
              <img src={data.image} alt={data.title} className="imgInfBlog" />
              <div className="dayTitle">
                {data.day && data.month && (
                  <div className="date">
                    <div className="month">{monthNames[data.month]}</div>
                    <div className="day">{data.day}</div>
                  </div>
                )}
                <h1 className="titleInfo">{data.title}</h1>
              </div>

              <p className="authorInfo">En CREACION DE CONTENIDO por {data.author}.</p>
              <p className="textInfo">{data.abstract}</p>
              <a href="#" className="btnInfo">
                {data.btnInfo}
              </a>
            </div>
          ))}
        </div>


      <Footer />
    </div>
  );
};

export default BlogPost;
