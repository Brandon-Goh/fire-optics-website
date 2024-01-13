import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Wrapper, Content } from "./interior.style";

const Subtitle = () => {
  // useEffect(() => {
  //   AOS.init({ duration: 1400 });
  // }, []);

  return (
    <Wrapper>
      <div className="title">
        <h1 id="goals" data-aos="fade-up">
          Goals
        </h1>
      </div>
    </Wrapper>
  );
};

export default Subtitle;
