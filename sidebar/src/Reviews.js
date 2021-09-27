import React, { useState } from "react";
import "./Reviews.css";
import reviews from "./review";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const { name, job, img, text } = reviews[index];
  const checkNumber = (number) => {
    if (number > reviews.length - 1) {
      return 0;
    }
    if (number < 0) {
      return reviews.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * reviews.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <div className="continer">
      <h1>Our Reviews</h1>
      <div className="underline"></div>

      <div className="card">
        <img className="img" src={img} alt="image" />
        <h4 className="name">{name}</h4>
        <h4 className="job">{job}</h4>
        <p>{text}</p>
        <div className="btns">
          <button onClick={prevPerson} className="prev-btn">
            <ChevronLeftIcon />
          </button>
          <button onClick={nextPerson} className="next-btn">
            <ChevronRightIcon />
          </button>
        </div>
        <button onClick={randomPerson} className="random">
          suprise me
        </button>
      </div>
    </div>
  );
};

export default Reviews;
