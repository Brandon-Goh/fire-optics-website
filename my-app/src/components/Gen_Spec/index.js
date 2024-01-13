import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Wrapper, Content } from "./spec.style";

const Specs = () => {
  useEffect(() => {
    AOS.init({ duration: 1400 });
    AOS.refresh();
  }, []);

  return (
    <Wrapper>
      <Content>
        <div className="row">
          <div className="col" data-aos="fade-right">
            <img
              src={process.env.PUBLIC_URL + "/images/goal1.gif"}
              alt="game"
            />
          </div>
          <div className="col text" data-aos="fade-left">
            <h3> Improved Situational Awareness </h3>
            <p> Enhancing visibility in dark and fast-paced environments. </p>
          </div>
        </div>
        <div className="row">
          <div className="col text1" data-aos="fade-right">
            <h3> Efficiency & Effectiveness </h3>
            <p>
              {" "}
              Providing better apparatus alternatives to free up firefighters'
              hands, along with essential information.{" "}
            </p>
          </div>
          <div className="col" data-aos="fade-left">
            <img
              src={process.env.PUBLIC_URL + "/images/goal2.png"}
              alt="connected"
            />
          </div>
        </div>
        <div className="row">
          <div className="col" data-aos="fade-right">
            <img src={process.env.PUBLIC_URL + "/images/goal3.gif"} />
          </div>
          <div className="col text" data-aos="fade-left">
            <h3> Reliability </h3>
            <p>
              {" "}
              Ensuring the unquestionable reliability and trustworthiness of our
              algorithms and vision software, especially in fast-paced
              environments.{" "}
            </p>
          </div>
        </div>
      </Content>
    </Wrapper>
  );
};

export default Specs;
