import DropMenu from "../DropMenu/DropMenu";
import NavButton from "../NavButton/NavButton";
import { FaRegComment } from "react-icons/fa";
import "./Navbar.css";
import DtmSelect from '../DtmSelect/DtmSelect';
import { idiomas } from "../../data/idiomas";
import { useContext } from "react";
import { GlobalContext  } from "../../contexts/GlobalContext";
import { textos } from "../../data/textos";
const Navbar = () => {
  const {languajeActive, languageFlag } =useContext(GlobalContext)
  return (
    <div className="Navbar">
      <NavButton className="logo" target={1} text="" />
      <div className="navigation">
        <NavButton target={1} text={`${textos[languageFlag].inicio}`} />
        <NavButton target={2} text={`${textos[languageFlag].sobreMi}`} />
        <NavButton target={4} text="Coaching" />
        <DropMenu
          text={`${textos[languageFlag].agenda}`}
          children={[
            {
              target: 6,
              text: `${textos[languageFlag].expBienesytar}`,
            },
            {
              target: 8,
              text: `${textos[languageFlag].expDeMedida}`,
            },
          ]}
        />
        <NavButton target={9} text={`${textos[languageFlag].colabrador}`} />
        <DropMenu
          text={`${textos[languageFlag].blog}`}
          children={[
            {
              target: 5,
              text: `${textos[languageFlag].blogPost}`,  
            },
            {
              target: 1,
              text: `${textos[languageFlag].testimonios}`,
            },
          ]}
        />
        <DtmSelect items={idiomas} active={languajeActive} />
      </div>

      <NavButton
        className="rounded hoverable-primary contact"
        target={3}
        text={
          <>
            <p>{textos[languageFlag].contactar}</p> <FaRegComment className="comment-icon" />
          </>
        }
      />
    </div>
  );
};

export default Navbar;
