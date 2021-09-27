import { Avatar } from "@material-ui/core";
import React, { useRef, useState } from "react";
import "./FeedContiner.css";

const FeedContiner = () => {
  // const [play, setPlay] = useState(false);
  // const videoRef = useRef(null)

  // const onPausePlay = ()=>{
  //   if(play){
  //     videoRef.current.pause();
  //     setPlay(false)
  //   }
  //   else{
  //     videoRef.current.play();
  //     setPlay(true)
  //   }

  // }

  return (
    <div className="continer">
      <div className="con">
        <div className="feed-header">
          <video
            className="video"
            src={
              "https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_1920_18MG.mp4"
            }
            //ref={videoRef}
            loop
            muted={false}
            //onClick={onPausePlay}
          />
        </div>
        <div className="feed-middle">
          <div className="feed-middle-header">
            <Avatar
              className="avatar"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT-_mIfmXfxZydIr5sSyiVu6p_LMiG6L8ZDw&usqp=CAU"
            />
            <h4>heading</h4>
          </div>
          <div className="channelname">
            <h4>channel name</h4>
          </div>
          <div className="views">
            <p>
              71K <span>views -</span>
              <span>{"2 hours ago"}</span>
            </p>
          </div>
        </div>
        
      </div>
      <div className="con">
        <div className="feed-header">
          <video
            className="video"
            src={
              "https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_1920_18MG.mp4"
            }
            //ref={videoRef}
            loop
            muted={false}
            //onClick={onPausePlay}
          />
        </div>
        <div className="feed-middle">
          <div className="feed-middle-header">
            <Avatar
              className="avatar"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT-_mIfmXfxZydIr5sSyiVu6p_LMiG6L8ZDw&usqp=CAU"
            />
            <h4>heading</h4>
          </div>
          <div className="channelname">
            <h4>channel name</h4>
          </div>
          <div className="views">
            <p>
              71K <span>views -</span>
              <span>{"2 hours ago"}</span>
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default FeedContiner;
