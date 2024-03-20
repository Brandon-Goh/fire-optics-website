import React from "react";

import { Wrapper, Content } from "./models.style";

import Section from "../Section";
import Interior from "../Interior_Specs";
import Subtitle from "../Subtitle";
import Specs from "../Gen_Spec";
import Header from "../Header";
import Footer from "../Footer";

const Landing = () => {
  document.title = "Fire Optics";
  return (
    <Wrapper>
      <Header />
      <Content>
        <Section
          title="Fire Optics"
          desc="A hands free, visual system to easily identify signs of life for firefighters"
          backgroundImg="landing-full.jpg"
          arrow="true"
          battery="5"
          compute="4.50"
          fov="55° x 35°"
          refresh="32"
          distance="10"
        />
      </Content>
      <Content>
        <Subtitle />
        <Specs />
      </Content>
      <Content>
        <Interior />
      </Content>
      <Footer bottom="bottom" />
    </Wrapper>
  );
};

export default Landing;
