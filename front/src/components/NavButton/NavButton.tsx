import { FC, useContext } from "react";
import { tpNavButton } from "../../types/typesComponents";
import { GlobalContext } from "../../contexts/GlobalContext";

const NavButton: FC<tpNavButton & Partial<HTMLDivElement>> = ({target,text, className}) => {
  const { setLayoutID } = useContext(GlobalContext);
  return (
    <div className={`NavButton ${className}`} onClick={() => setLayoutID(target)}>
      <a href="#">{text}</a>
    </div>
  );
};

export default NavButton;
