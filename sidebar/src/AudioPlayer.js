import React, { useState } from "react";
import "./AudioPlayer.css";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import audio from "./audio";
const AudioPlayer = () => {
  const [index, setIndex] = useState(0);
  const { title, src, img } = audio[index];
  const checkNumber = (number) => {
    if (number > audio.length - 1) {
      return 0;
    }
    if (number < 0) {
      return audio.length - 1;
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
  return (
    <div className="audioPlayer">
      <h1>Audio Player</h1>
      <div className="underline"></div>
      <div className="audio">
        <img className="img" src={img} alt="image" className="img" />
        <h4 className="name">{title}</h4>

        <div className="btns">
          <button onClick={prevPerson} className="prev-btn">
            <SkipPreviousIcon />
          </button>
          <button className="play-btn">
            <PlayArrowIcon />
          </button>
          <button onClick={nextPerson} className="next-btn">
            <SkipNextIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
