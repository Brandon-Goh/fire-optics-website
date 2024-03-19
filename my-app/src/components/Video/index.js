import React from "react";
import ReactPlayer from "react-player";

const Video = () => {
  let videosrc = "testvid.mp4";

  return (
    <div>
      <h1>my custome player</h1>
      <ReactPlayer
        width="500px"
        height="400px"
        url={videosrc}
        controls={true}
        // light is usefull incase of dark mode
        light={false}
        // picture in picture
        pip={true}
        playing={true}
        loop={true}
      />
      <source src={videosrc} type="video/mp4" />
    </div>
  );
};

export default Video;
