import { NarbarAdmin } from "../NarbarAdmin/NarbarAdmin";
import { BarSession } from "../barSession/barSession";
import { BienestarAdmin } from "../BienestarAdmin/BienestarAdmin";
import "./BlogBienestar.css";
import { BtnMas } from "../BtnMas/BtnMas";
import { GlobalContext } from '../../../contexts/GlobalContext'; 
import { useContext } from 'react';

import userImg from '../../../../src/assets/Dashboard-almacadaques/users/user.jpg'

const BlogBienestar = () => {
  const { setLayoutID, setIndexTextLibro, setDataText } = useContext(GlobalContext);

  const add = () => {
    setDataText(null)
    setIndexTextLibro(-1)
    setLayoutID(32)
  }

  return (
    <div className="BlogBienestar">
      <NarbarAdmin />
      <div className="containerBlogBienestar">
        <BarSession tituloVista='Blog' segundoTitulo='Tips Bienestar' nombre='Elisabeth' img={userImg} />
        <div className="editordeLibro">
          <BienestarAdmin />
        </div>
        <div className="BtonAgregarEventosmain" onClick={add}>
            <BtnMas/>
          </div>
      </div>
    </div>


  );
};

export { BlogBienestar };
