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
            target: 1,
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
      <NavButton className="btn" target={3} text="Contacto" />
    </div>
  );
};

export default Navbar;
