import React from "react";
import ReactPlayer from "react-player";
import { Wrapper, Content, ContentTop } from "./models.style";

const Video = ({ title, position, videofile }) => {
  let videosrc = videofile;

  const hudStyle = {
    color: "#FFA500", // Orange color in hex
    marginLeft: "8vw",
  };

  return (
    <>
      <div>
        <ReactPlayer
          width="90vw"
          height="90vh"
          url="FV.mp4"
          controls={true}
          light={false}
          pip={true}
          playing={true}
          loop={true}
        />
        <source src="BG2.mp4" type="video/mp4" />
        {/* <h1 style={{ marginLeft: "25vw", color: "#FFA500" }}>{title}</h1> */}
        {/* <div style={{ marginLeft: "77vw", marginTop: "-25vh" }}>
          <ReactPlayer
            width="21vw"
            height="21vh"
            url="BG3.mp4"
            controls={true}
            light={false}
            pip={true}
            playing={true}
            loop={true}
          />
          <source src="BG3.mp4" type="video/mp4" />
          <h1 style={{ marginLeft: "8vw", color: "#FFA500" }}>HUD</h1>
        </div> */}
      </div>
    </>
  );
};

export default Video;

// style={{
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
// }}
