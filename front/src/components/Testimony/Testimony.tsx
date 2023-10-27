import { FC } from "react";
import { tpTestimony } from "../../types/typesComponents";
import "../TestimonyBar/TestimonyBar.css"

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
      <div className="testimony">
        <p className="text">
          {testimony}
        </p>
        <div className="TestimonyLink">
          <div>
            Ver más
          </div>
        </div>
      </div>

      <div className="witness">
        {/* <img src={image} alt={witness} /> */}
        <h4>{witness}</h4>
        <div className="date">
          {day}.{month}.{year}
        </div>
      </div>
    </div>
  );
};

export default Testimony;
