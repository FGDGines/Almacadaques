import { NarbarAdmin } from "../NarbarAdmin/NarbarAdmin";
import { BarSession } from "../barSession/barSession";
import { BienestarAdmin } from "../BienestarAdmin/BienestarAdmin";
import "./BlogBienestar.css";

const BlogBienestar = () => {
  return (
    <div className="BlogBienestar">
      <NarbarAdmin />
      <div className="containerBlogBienestar">
        <BarSession tituloVista='Blog' segundoTitulo='Tips Bienestar' nombre='Kristine' img='../../../../src/assets/Dashboard-almacadaques/users/user.svg' />
        <div className="editordeLibro">
          <BienestarAdmin />
          <BienestarAdmin />
          <BienestarAdmin />
          <BienestarAdmin />
        </div>
      </div>
    </div>


  );
};

export { BlogBienestar };
