import { FC } from "react";
import { tpDropMenu } from "../../types/typesComponents";
import NavButton from "../NavButton/NavButton";
import "./DropMenu.css";

const DropMenu: FC<tpDropMenu> = ({ text, children }) => {
  return (
    <div className="DropMenu">
      <a href="#">{text}</a>

      <div className="content-list">
        {children.map((child, index) => {
          return (
            <NavButton key={index} target={child.target} text={child.text} />
          );
        })}
      </div>
    </div>
  );
};

export default DropMenu;
