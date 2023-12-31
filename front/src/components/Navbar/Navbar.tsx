import DropMenu from "../DropMenu/DropMenu";
import NavButton from "../NavButton/NavButton";
import { FaRegComment } from "react-icons/fa";
import "./Navbar.css";
import DtmSelect from '../DtmSelect/DtmSelect';
import { idiomas } from "../../data/idiomas";
import { useContext, useState } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { textos } from "../../data/textos";
const Navbar = () => {
  const { languajeActive, languageFlag, upOrDown } = useContext(GlobalContext)
  const [showNavButton, setShowNavButton] = useState(false);

  return (
    <>
      <div className={`Navbar ${upOrDown ? 'up' : 'down'}`}>
        <NavButton className="logo" target={1} text="" />
        <div className="navigation">
          <NavButton target={1} text={`${textos[languageFlag].inicio}`} />
          <NavButton target={2} text={`${textos[languageFlag].sobreMi}`} />
          <DropMenu
            text={`Coaching`}
            children={[
              {
                target: 4,
                text: `Coaching para el Bienestar`,
              },
              {
                target: 10,
                text: `Coaching & Mentoring Internacional`, 
              },
            ]}
          />
          <DropMenu
            text={`${textos[languageFlag].agenda}`}
            children={[
              {
                target: 6,
                text: `${textos[languageFlag].expBienestar}`,
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
                target: 15,
                text: `${textos[languageFlag].podcast}`,
              },
              {
                target: 14,
                text: `${textos[languageFlag].blogRetiro}`,
              }
            ]}
          />
          <DtmSelect items={idiomas} active={languajeActive} />
        </div>

        <NavButton
          className="rounded hoverable-primary contact"
          target={3}
          text={
            <>
              <p>{`${textos[languageFlag].contactar}`}</p> <FaRegComment className="comment-icon" />
            </>
          }
        />

      </div>

      <div className="narbarMovil">
      <div className="ctLeft" onMouseDown={(e) => { e.stopPropagation(); setShowNavButton(!showNavButton);  }}>
          <label className="buttons__burger" htmlFor="burger" >
            <input type="checkbox" id="burger" />
              <span></span>
              <span></span>
              <span></span>
          </label>
          
        </div>
        <div className="ctRight">
          <NavButton className="logo" target={1} text="" />
        </div>
        
        {showNavButton && (
        <div className={`navButton ${upOrDown ? 'up' : 'down'}`}>
        <div className="navigation">
          <NavButton target={1} text={`${textos[languageFlag].inicio}`} />
          <NavButton target={2} text={`${textos[languageFlag].sobreMi}`} />
          <DropMenu
            text={`Coaching`}
            children={[
              {
                target: 4,
                text: `Coaching para el Bienestar`,
              },
              {
                target: 10,
                text: `Coaching & Mentoring Internacional`,
              },
            ]}
          />
          <DropMenu
            text={`${textos[languageFlag].agenda}`}
            children={[
              {
                target: 6,
                text: `${textos[languageFlag].expBienestar}`,
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
                target: 15,
                text: `${textos[languageFlag].podcast}`,
              },
              {
                target: 14,
                text: `${textos[languageFlag].blogRetiro}`,
              }
            ]}
          />
          <DtmSelect items={idiomas} active={languajeActive} />
        </div>
        <NavButton
          className="rounded hoverable-primary contact"
          target={3}
          text={
            <>
              <p>{`${textos[languageFlag].contactar}`}</p> <FaRegComment className="comment-icon" />
            </>
          }
        />
          
        </div>
        )}
      </div>


    </>
  );
};

export default Navbar;
