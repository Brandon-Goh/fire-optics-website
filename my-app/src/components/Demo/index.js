import React from "react";

import { Wrapper, Content, ContentTop } from "./models.style";
import ReactPlayer from "react-player";
import Section from "../Section";
import Interior from "../Interior_Specs";
import Subtitle from "../Subtitle";
import Specs from "../Gen_Spec";
import Header from "../Header";
import Footer from "../Footer";
import Video from "../Video"; // Adjust the import path as per your folder structure

const Demo = () => {
  document.title = "Fire Optics";
  return (
    <Wrapper bg="demoo-full.png">
      <Content>
        <ContentTop>
          <h1>Fire Optics</h1>
          <p>
            A hands free, visual system to easily identify signs of life for
            firefighters
          </p>
        </ContentTop>
        <Video
          videofile="testvid.mp4"
          position={{ horizontal: "center", vertical: "top" }}
          title="Thermal Camera Input"
        />
      </Content>
    </Wrapper>
  );
};

export default Demo;
