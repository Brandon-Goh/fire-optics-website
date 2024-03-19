import React from "react";
import ReactPlayer from "react-player";
import { Wrapper, Content, ContentTop } from "./models.style";

const Video = ({ title, position, videofile }) => {
  let videosrc = videofile;

  return (
    <>
      <div>
        <ReactPlayer
          width="75vw"
          height="75vh"
          url={videosrc}
          controls={true}
          light={false}
          pip={true}
          playing={true}
          loop={true}
        />
        <source src={videosrc} type="video/mp4" />
        <h1 style={{ marginLeft: "25vw" }}>{title}</h1>
        <div style={{ marginLeft: "77vw", marginTop: "-25vh" }}>
          <ReactPlayer
            width="21vw"
            height="21vh"
            url={videosrc}
            controls={true}
            light={false}
            pip={true}
            playing={true}
            loop={true}
          />
          <source src={videosrc} type="video/mp4" />
          <h1 style={{ marginLeft: "8vw" }}>HUD</h1>
        </div>
      </div>
      <div>s</div>
    </>
  );
};

export default Video;

// style={{
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
// }}
