import { FC, useContext } from "react";
import { tpNavButton } from "../../types/typesComponents";
import { GlobalContext } from "../../contexts/GlobalContext";

const NavButton: FC<tpNavButton> = ({ target, text }) => {
  const { setLayoutID } = useContext(GlobalContext);
  return (
    <div className="NavButton">
      <a href="#" onClick={() => setLayoutID(target)}>
        {text}
      </a>
    </div>
  );
};

export default NavButton;
