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
      <img src={image} alt={witness} />
      <div className="date">
        {day}.{month}.{year}
      </div>
    </div>
  );
};

export default Testimony;
