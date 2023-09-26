import { FC, useState } from "react";
import { tpTestimonyBar } from "../../types/typesComponents";
import Testimony from "../Testimony/Testimony";

const TestimonyBar: FC<tpTestimonyBar> = ({
  testimonies,
  quantityPerLayout,
}) => {
  const [index, setIndex] = useState(0);
  const cardsCount = Math.ceil(testimonies.length / quantityPerLayout);

  const generateTestimonies = (i: number, n: number) => {
    const tst = [];
    for (i; i < n && i < testimonies.length; i++) {
      tst.push(
        <Testimony
          id={testimonies[i].id}
          witness={testimonies[i].witness}
          image={testimonies[i].image}
          day={testimonies[i].day}
          month={testimonies[i].month}
          year={testimonies[i].year}
          testimony={testimonies[i].testimony}
        />
      );
    }
    return tst;
  };

  const generateCards = () => {
    const cards = [];

    for (let i = 0; i < cardsCount; i++) {
      cards.push(
        <div key={i} className="card">
          {generateTestimonies(i, i + quantityPerLayout)}
        </div>
      );
    }

    return cards;
  };

  const generateButtons = () => {
    const btns = [];
    for (let i = 0; i < cardsCount; i++) {
      btns.push(
        <button
          onClick={() => {
            setIndex(i);
          }}
        ></button>
      );
    }

    return btns;
  };

  return (
    <div className="TestimonyBar" style={{ translate: `${-index * 100}vw` }}>
      {generateCards()} {generateButtons()}
    </div>
  );
};

export default TestimonyBar;
