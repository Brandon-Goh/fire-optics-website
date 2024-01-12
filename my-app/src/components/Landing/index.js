import React from "react";

import { Wrapper, Content } from "./models.style";

import Section from "../Section";
import Interior from "../Interior_Specs";
import Specs from "../Gen_Spec";
import Header from "../Header";
import Footer from "../Footer";
// import myImage from '../../../public/images/landing-full.jpg';
const Landing = () => {
  document.title = "Fire Optics";
  return (
    <Wrapper>
      <Header />
      <Content>
        <Section
          title="Fire Optics"
          desc="A hands free, visual system to easily identify signs of life for firefighters."
          backgroundImg="landing-full.jpg"
          arrow="true"
          battery="6"
          compute="4.50"
          fov="55° x 35°"
          refresh="32"
          distance="250"
        />
      </Content>
      <Content>
        <Interior />
      </Content>
      <Content>
        <Specs />
      </Content>
      <Footer bottom="bottom" />
    </Wrapper>
  );
};

export default Landing;
