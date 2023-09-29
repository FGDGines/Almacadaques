import { FC, useContext } from "react";
import { tpNavButton } from "../../types/typesComponents";
import { GlobalContext } from "../../contexts/GlobalContext";
import "./NavButton.css";

const NavButton: FC<tpNavButton & Partial<HTMLDivElement>> = ({
  target,
  text,
  className,
}) => {
  const { setLayoutID } = useContext(GlobalContext);
  return (
    <div
      className={`NavButton ${className}`}
      onClick={() => setLayoutID(target)}
    >
      {text}
    </div>
  );
};

export default NavButton;
