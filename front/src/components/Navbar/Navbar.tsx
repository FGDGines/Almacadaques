import NavButton from "../DropMenu/NavButton";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="Navbar">
      <NavButton target={1} text="Inicio" />
      <NavButton target={2} text="Sobre Mi" />
      <NavButton target={3} text="Coaching" />
      <NavButton
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
      <NavButton target={7} text="Colaborador@s" />
      <NavButton
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
