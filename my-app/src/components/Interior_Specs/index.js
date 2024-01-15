import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Wrapper, Wrapper2, Content, Content2 } from "./interior.style";

const Interior = () => {
  useEffect(() => {
    AOS.init({ duration: 1400 });
  }, []);

  return (
    <>
      <Wrapper>
        <div className="title">
          <h1 id="background">Background</h1>
        </div>
      </Wrapper>
      <Wrapper2>
        {/* <div className="title">
        <h1 data-aos="fade-up">Background</h1>
      </div> */}
        <Content2>
          <div className="row">
            <div className="col">
              <img
                src={process.env.PUBLIC_URL + "/images/background.jpeg"}
                alt="game"
              />
            </div>
            <div className="col text">
              <h3 id="background"> Background </h3>
              <p>
                {" "}
                As a group, we found ourselves deeply impacted by the news
                coverage of rampant fires occurring globally. The alarming
                frequency and intensity of these incidents have motivated us to
                tackle this field that has historically been impacting humanity
                since fire was created. This year alone, Canada had its worst
                wildfire season on record which decimated more than 15 million
                hectares
                <a
                  href="https://www.cbc.ca/radio/ideas/world-on-fire-canada-s-worst-wildfire-season-on-record-1.6946472"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  [1]
                </a>
                . We started researching how much fires really affected the
                lives of individuals and found that the overall fire death rate
                between 2012 to 2021 was an 18% increase according to the U.S
                fire administration
                <a
                  href="https://www.usfa.fema.gov/statistics/deaths-injuries/#:~:text=U.S.%20overall%20fire%20death%20rate%20trend&text=In%202021%2C%20the%20fire%20death,11.4%20deaths%20per%20million%20population"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  [2]
                </a>
                . Throughout the term we were in contact with a local fire
                department and learned that they lack essential modern
                equipment, tools, and communication systems due to cost,
                integration and shortages. We aim to develop innovative
                solutions that empower firefighters with advanced equipment and
                technology.
              </p>
            </div>
          </div>
        </Content2>
        {/* <Content></Content> */}
      </Wrapper2>
    </>
  );
};

export default Interior;
