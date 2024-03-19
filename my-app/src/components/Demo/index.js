import React from "react";

import { Wrapper, Content } from "./models.style";
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
    <Wrapper>
      <Header />
      <Content>
        <Section
          title="Fire Optics - Demo"
          desc="A hands free, visual system to easily identify signs of life for firefighters"
          backgroundImg="landing-full.jpg"
          arrow="true"
          battery="6"
          compute="4.50"
          fov="55° x 35°"
          refresh="32"
          distance="250"
        />
      </Content>
      <Video />
      {/* <Content>
        <Subtitle />
        <Specs />
      </Content>
      <Content>
        <Interior />
      </Content> */}
      {/* <Footer bottom="bottom" /> */}
    </Wrapper>
  );
};

export default Demo;
