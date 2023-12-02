import NavButton from "../NavButton/NavButton";
import "./AboutMeAbstract.css";

import u from "../../../src/assets/background/3.foto.jpg"

const AboutMeAbstract = () => {
  return (
    <div className="AboutMeAbstract">
      <div className="column">
        <h1>Trabajando juntos para una vida mejor.</h1>
        <p>
          Me esfuerzo por ayudarte a alcanzar metas ambiciosas y
          llegar a nuevas alturas simplemente centrándonos en lo que es importante para ti.
        </p>
      </div>

      <div className="column">
        <p>
          Un experimentado coach de bienestar puede ayudarte fácilmente 
          a obtener más de tu vida al establecer metas claras y planificar tus 
          acciones en el camino hacia el éxito.
        </p>

        <p>
          Como coach de bienestar profesional y 
          altamente experimentada, estaré encantada de guiarte hacia nuevos objetivos tanto para ti 
          como para tu equipo. Al asegurar el crecimiento geométrico de tu bienestar, puedes llevar 
          tu vida al límite para conseguir lo que deseas
        </p>

        <div className="coach">
          <img src={u} alt="" />
          <h3>Elizabet Coll-Vinent Puig</h3>
          <p>Coach de vida y bienestar</p>
        </div>
        <NavButton
          className="bg-primary hoverable-primary rounded"
          target={3}
          text="Mas sobre mi"
        />
      </div>
    </div>
  );
};

export default AboutMeAbstract;
