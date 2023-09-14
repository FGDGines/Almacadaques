import { FC, useContext } from "react";
import { tpDropMenu } from "../../types/typesComponents";
import { GlobalContext } from "../../contexts/GlobalContext";

const DropMenu: FC<tpDropMenu> = ({ target, text, children = [] }) => {
  const { setLayoutID } = useContext(GlobalContext);
  return (
    <div className="DropMenu">
      <a href="#" onClick={() => setLayoutID(target)}>
        {text}
      </a>

      {children.length !== 0 ? (
        <div>
          {children.map((child, index) => (
            <DropMenu
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

export default DropMenu;
