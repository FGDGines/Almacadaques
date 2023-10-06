import DropMenu from "../DropMenu/DropMenu";
import NavButton from "../NavButton/NavButton";
import { FaRegComment } from "react-icons/fa";
import "./Navbar.css";
import DtmSelect from '../DtmSelect/DtmSelect';
import { idiomas } from "../../data/idiomas";
import { useContext } from "react";
import { GlobalContext  } from "../../contexts/GlobalContext";
const Navbar = () => {
  const {languajeActive } =useContext(GlobalContext)
  return (
    <div className="Navbar">
      <NavButton className="logo" target={1} text="" />
      <div className="navigation">
        <NavButton target={1} text="Inicio" />
        <NavButton target={2} text="Sobre Mi" />
        <NavButton target={4} text="Coaching" />
        <DropMenu
          text="Agenda"
          children={[
            {
              target: 6,
              text: "Experiencias de Bienestar",
            },
            {
              target: 8,
              text: "Experiencias de Medida",
            },
          ]}
        />
        <NavButton target={1} text="Colaborador@s" />
        <DropMenu
          text="Blog"
          children={[
            {
              target: 5,
              text: "Blog Post",
            },
            {
              target: 1,
              text: "Testimonios",
            },
            {
              target: 1,
              text: "Podcast",
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
            <p>Contactar</p> <FaRegComment className="comment-icon" />
          </>
        }
      />
    </div>
  );
};

export default Navbar;
