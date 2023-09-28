import DropMenu from "../DropMenu/DropMenu";
import NavButton from "../NavButton/NavButton";
import { FaRegComment } from 'react-icons/fa'
import "./Navbar.css";
import BtnIcon from '../BtnIcon/BtnIcon';
const Navbar = () => {
  return <div className="Navbar">
    <div className="ctLogo">

    </div>
    <div className="ctMenu">
      <NavButton target={1} text="" />
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
            target: 1,
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
    </div>
    <div className="ctContactar">
      <BtnIcon text="Contactar" Icon={<FaRegComment />} />
    </div>
  </div>
};

export default Navbar;
