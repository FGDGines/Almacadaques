import { NarbarAdmin } from "../NarbarAdmin/NarbarAdmin";
import { BarSession } from "../barSession/barSession";
import { BienestarAdmin } from "../BienestarAdmin/BienestarAdmin";
import "./BlogBienestar.css";
import { BtnMas } from "../BtnMas/BtnMas";
import { GlobalContext } from '../../../contexts/GlobalContext'; 
import { useContext } from 'react';


const BlogBienestar = () => {
  const { setLayoutID } = useContext(GlobalContext);
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
        <div className="BtonAgregarEventosmain" onClick={() => setLayoutID(38)}>
            <BtnMas/>
          </div>
      </div>
    </div>


  );
};

export { BlogBienestar };
