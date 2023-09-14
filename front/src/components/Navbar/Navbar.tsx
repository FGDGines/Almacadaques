import DropMenu from "../DropMenu/DropMenu";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="Navbar">
      <DropMenu target={1} text="Inicio" />
      <DropMenu target={2} text="Sobre Mi" />
      <DropMenu target={3} text="Coaching" />
      <DropMenu
        target={4}
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
      <DropMenu target={7} text="Colaborador@s" />
      <DropMenu
        target={8}
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
    </div>
  );
};

export default Navbar;
