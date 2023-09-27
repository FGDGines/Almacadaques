import React, { FC, useEffect, useRef, useState } from "react";
import { tpTestimonyBar } from "../../types/typesComponents";
import Testimony from "../Testimony/Testimony";
import "./TestimonyBar.css";

const TestimonyBar: FC<tpTestimonyBar> = ({
  testimonies,
  quantityPerLayout,
}) => {
  const [index, setIndex] = useState(1);
  const cardsCount = Math.ceil(testimonies.length / quantityPerLayout);
  const parent = useRef<HTMLDivElement>(null);
  const cards = useRef<HTMLDivElement>(null);

  const generateTestimonies = (j: number, n: number) => {
    const tst = [];
    for (let i = j; i < n && i < testimonies.length; i++) {
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
        <div
          key={i}
          className="card"
          style={{
            width: `${parent.current?.offsetWidth}px`,
            display: "grid",
            gridTemplateColumns: `repeat(${quantityPerLayout}, 1fr)`,
          }}
        >
          {generateTestimonies(
            i * quantityPerLayout,
            (i + 1) * quantityPerLayout
          )}
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
          className={index == i ? "current" : ""}
          onClick={() => {
            setIndex(i);
          }}
        ></button>
      );
    }

    return btns;
  };

  useEffect(() => {
    setIndex(0);
  }, []);

  return (
    <div ref={parent} className="TestimonyBar">
      <div
        ref={cards}
        className="cards"
        style={{
          transform: `translateX(${
            -index * (parent.current ? parent.current.offsetWidth : 0)
          }px)`,
        }}
      >
        {generateCards()}
      </div>
      <div className="buttons">{generateButtons()}</div>
    </div>
  );
};

export default TestimonyBar;
