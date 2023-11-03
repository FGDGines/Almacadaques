import Navbar from "../Navbar/Navbar";
import Franja from "../Franja/Franja";
import Footer from "../Footer/Footer";
import './BlogPost.css';
// import blogData from '../../../src/data/blogPost';

const BlogPost = () => {


  return (
    <div className="BlogPost">
      <Navbar />
      <Franja text="Tips de Bienestar" />

      <div className="flipbook">
      <input type="checkbox" id="checkbox-cover" className="input"/>
      <input type="checkbox" id="checkbox-page1" className="input"/>
      <input type="checkbox" id="checkbox-page2" className="input"/>
      <input type="checkbox" id="checkbox-page3" className="input"/>
      <div className="book">
        <div className="cover">
          <label htmlFor="checkbox-cover"></label>
        </div>
        <div className="page" id="page1">
          <div className="front-page">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
              magni laudantium beatae quia. Recusandae, fuga quas consectetur
              perferendis aperiam esse velit veniam ducimus? Quisquam consequatur
              perferendis quidem quia, recusandae ab!
            </p>
            <label className="next" htmlFor="checkbox-page1">
              <i className="fas fa-chevron-right"></i>
            </label>
          </div>
          <div className="back-page">
            <img src="../../../src/assets/background/3.foto.jpg" alt="Page 1" />
            <label className="prev" htmlFor="checkbox-page1">
              <i className="fas fa-chevron-left"></i>
            </label>
          </div>
        </div>
        <div className="page" id="page2">
          <div className="front-page">
            <h2>Page 2</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
              magni laudantium beatae quia. Recusandae, fuga quas consectetur
              perferendis aperiam esse velit veniam ducimus? Quisquam consequatur
              perferendis quidem quia, recusandae ab!
            </p>
            <label className="next" htmlFor="checkbox-page2">
              <i className="fas fa-chevron-right"></i>
            </label>
          </div>
          <div className="back-page">
            <img src="../../../src/assets/Fotos_Home/1.jpg" alt="Page 2" />
            <label className="prev" htmlFor="checkbox-page2">
              <i className="fas fa-chevron-left"></i>
            </label>
          </div>
        </div>
        <div className="page" id="page3">
          <div className="front-page">
            <h2>Page 3</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
              magni laudantium beatae quia. Recusandae, fuga quas consectetur
              perferendis aperiam esse velit veniam ducimus? Quisquam consequatur
              perferendis quidem quia, recusandae ab!
            </p>
          </div>
        </div>
        <div className="back-cover"></div>
      </div>
    </div>

    


      <Footer />
    </div>
  );
};

export default BlogPost;
