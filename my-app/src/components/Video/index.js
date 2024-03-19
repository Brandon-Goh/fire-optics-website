import React from "react";
import ReactPlayer from "react-player";
import { Wrapper, Content, ContentTop } from "./models.style";

const Video = () => {
  let videosrc = "testvid.mp4";

  return (
    <div>
      <ReactPlayer
        width="50vw"
        height="50vh"
        // width="500px"
        // height="400px"
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
      <h1 style={{ marginLeft: "14vw" }}>Thermal Camera Input</h1>
    </div>
  );
};

export default Video;

// style={{
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
// }}
