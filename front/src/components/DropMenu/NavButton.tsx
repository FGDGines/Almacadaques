import { FC, useContext } from "react";
import { tpDropMenu } from "../../types/typesComponents";
import { GlobalContext } from "../../contexts/GlobalContext";

const NavButton: FC<tpDropMenu> = ({ target, text, children = [] }) => {
  const { setLayoutID } = useContext(GlobalContext);
  return (
    <div className="NavButton">
      <a href="#" onClick={() => setLayoutID(target)}>
        {text}
      </a>

      {children.length !== 0 ? (
        <div>
          {children.map((child, index) => (
            <NavButton
              key={index}
              target={child.target}
              text={child.text}
              children={child.children}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default NavButton;
