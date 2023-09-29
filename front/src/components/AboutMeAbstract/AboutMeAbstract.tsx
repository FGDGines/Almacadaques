import NavButton from "../NavButton/NavButton";
import "./AboutMeAbstract.css";

const AboutMeAbstract = () => {
  return (
    <div className="AboutMeAbstract bg-secondary">
      <div className="column">
        <h1>Working together for your better life!</h1>
        <p>
          At Lead Planner, I strive to help you achieve ambitious goals and
          reach new heights just by focusing on what’s important for you.
        </p>
      </div>

      <div className="column">
        <p>
          An experienced business coach can easily help you get more from your
          business by setting clear goals and planning your actions on the way
          to success.
        </p>

        <p>
          As a professional and highly experienced business coach, I will be
          glad to guide you towards new goals for both you and your team. By
          ensuring the geometric growth of your business, you can push your
          company to the limit in order to get what you want.
        </p>

        <div className="coach">
          <img src="./src/assets/background/unnamed (2).jpg" alt="" />
          <h3>Juana Maria</h3>
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
