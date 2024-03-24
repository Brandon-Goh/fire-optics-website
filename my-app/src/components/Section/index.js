import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, ContentTop, ContentMid, Content } from "./section.style";
function Section({
  title,
  desc,
  backgroundImg,
  link,
  leftbtn,
  rightbtn,
  arrow,
  battery,
  compute,
  fov,
  refresh,
  distance,
  top,
}) {
  return (
    <Wrapper bg={backgroundImg}>
      <ContentTop>
        <h1>{title}</h1>
        <p>
          {desc} <a href="#">{link}</a>
        </p>
      </ContentTop>

      <div>
        <ContentMid className={arrow ? "" : "buttons"}>
          {leftbtn && (
            <div className="left">
              <button>{leftbtn}</button>
            </div>
          )}
          {rightbtn && (
            <div className="right">
              <button>{rightbtn}</button>
            </div>
          )}
        </ContentMid>

        <Content>
          <div className="Info-bar">
            <div className="Specs">
              <h2>{battery} hr</h2>
              <p>Battery Life</p>
            </div>
            {/* <div className="Specs">
              <h2>{compute} ms</h2>
              <p>Model Computing Time</p>
            </div> */}
            <div className="Specs">
              <h2>{fov}</h2>
              <p>Field of View</p>
            </div>
            <div className="Specs">
              <h2>{refresh} Hz</h2>
              <p>Refresh Rate</p>
            </div>
            <div className="Specs">
              <h2>{distance} m</h2>
              <p>Detection Distance</p>
            </div>
            <div className="order_btn">
              {/* <Link to="https://drive.google.com/file/d/1qJ83wWW0ZfZTDPlB8Ab3_tfXTnh405qI/view">
                <button> SEE A DEMO </button>
              </Link> */}
              <Link to="/demo">
                <button> SEE A DEMO </button>
              </Link>
            </div>
          </div>
        </Content>
        {arrow && (
          <div className="arrow">
            <img
              src={process.env.PUBLIC_URL + "/images/down-arrow.svg"}
              alt="arrow"
            />
          </div>
        )}
      </div>
    </Wrapper>
  );
}

export default Section;
