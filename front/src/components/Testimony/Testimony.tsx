import { FC } from "react";
import { tpTestimony } from "../../types/typesComponents";

const Testimony: FC<tpTestimony> = ({
  id,
  witness,
  image,
  day,
  month,
  year,
  testimony,
}) => {
  return (
    <div key={id} className="Testimony">
      <div className="testimony">{testimony}</div>

      <div className="witness">
        <img src={image} alt={witness} />
        <h2>{witness}</h2>
        <div className="date">
          {day}.{month}.{year}
        </div>
      </div>
    </div>
  );
};

export default Testimony;
