import Franja from "../Franja/Franja";
import { tpBlogInfo } from "../../types/typesComponents";
import BlogPreview from "../BlogPreview/BlogPreview";
import Navbar from "../Navbar/Navbar";
import "./Blog.css";
import Footer from "../Footer/Footer";

const Blog = () => {
  const blog: tpBlogInfo = {
    index: 1,
    day: 15,
    month: 8,
    year: 2021,
    image: "./src/assets/images/blog-line-1-620x464.jpg",
    title: "Mejorando tu calidad de vida",
    tags: ["CalidadDeVida", "Bienestar", "Salud"],
    abstract:
      "Descubre cómo mejorar tu calidad de vida con pequeños cambios en tu rutina diaria.",
    blogContent: (
      <div>
        <h2>Introducción</h2>
        <p>
          En este post, exploraremos diferentes estrategias para mejorar tu
          calidad de vida.
        </p>

        <h2>Importancia del autocuidado</h2>
        <p>
          El autocuidado es fundamental para mantener un buen equilibrio en la
          vida diaria. Como dijo una vez Mahatma Gandhi: "Cuida de tu cuerpo, es
          el único lugar que tienes para vivir".
        </p>

        <blockquote>
          <p>
            "La vida es lo que hacemos de ella. Los viajes son los viajeros. Lo
            que vemos no es lo que vemos, sino lo que somos." - Fernando Pessoa
          </p>
        </blockquote>

        <h2>Consejos para mejorar tu calidad de vida</h2>
        <ul>
          <li>Establece una rutina diaria saludable.</li>
          <li>Aliméntate de manera balanceada y nutritiva.</li>
          <li>Practica ejercicio regularmente.</li>
          <li>Dedica tiempo a actividades que disfrutes.</li>
        </ul>

        <p>
          Recuerda que cada persona es única y lo que funciona para uno puede no
          funcionar para otro. ¡Experimenta y descubre qué hábitos te ayudan a
          mejorar tu calidad de vida!
        </p>
      </div>
    ),
  };

  return (
    <div className="Blog">
      <Navbar />
      <Franja text="Tips de Bienestar" />
      <div className="blog">
        <div className="blog-content">
          <img src={blog.image} alt={blog.title} />
          <h2>{blog.title}</h2>
          <p className="date">
            {blog.day}/{blog.month}/{blog.year}
          </p>
          {blog.blogContent}
          <div className="share">
            Compartir
            <a className="facebook" href=""></a>
            <a className="twitter" href=""></a>
            <a className="linkedin" href=""></a>
          </div>
        </div>
        <div className="sideBar">
          <div className="popular-posts">
            <h3>Popular Posts</h3>
            <BlogPreview
              index={0}
              day={17}
              month={5}
              year={2023}
              tags={["Salud", "Fitness", "Nutrición", "Mente"]}
              image="./src/assets/images/blog-line-1-620x464.jpg"
              title="The ultimate guide to time management"
            />
            <BlogPreview
              index={0}
              day={17}
              month={5}
              year={2023}
              tags={["Salud", "Fitness", "Nutrición", "Mente"]}
              image="./src/assets/images/blog-line-1-771x515.jpg"
              title="The ultimate guide to time management"
            />
            <BlogPreview
              index={0}
              day={17}
              month={5}
              year={2023}
              tags={["Salud", "Fitness", "Nutrición", "Mente"]}
              image="./src/assets/images/blog-line-2-770x433.jpg"
              title="The ultimate guide to time management"
            />
          </div>
          <div className="tags">
            <h3>Tags</h3>
            {blog.tags?.map((tag, index) => {
              return <p key={index}>{tag}</p>;
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
