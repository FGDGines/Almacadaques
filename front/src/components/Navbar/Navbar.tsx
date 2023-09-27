import DropMenu from "../DropMenu/DropMenu";
import NavButton from "../NavButton/NavButton";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="Navbar">
      <NavButton target={1} text="" />
      <NavButton target={1} text="Inicio" />
      <NavButton target={2} text="Sobre Mi" />
      <NavButton target={4} text="Coaching" />
      <DropMenu
        text="Agenda"
        children={[
          {
            target: 5,
            text: "Experiencias de Bienestar",
          },
          {
            target: 6,
            text: "Experiencias de Medida",
          },
        ]}
      />
      <NavButton target={7} text="Colaborador@s" />
      <DropMenu
        text="Blog"
        children={[
          {
            target: 9,
            text: "Blog Post",
          },
          {
            target: 10,
            text: "Testimonios",
          },
          {
            target: 11,
            text: "Podcast",
          },
        ]}
      />
      <NavButton target={3} text="Contacto" />
    </div>
  );
};

export default Navbar;
